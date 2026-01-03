"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';
import { imageTosvg } from '@/utils/imageToSvg';
import Image from 'next/image';
const ImageComponent = ({ imagesData }) => {
    const galleryImages = imagesData?.data?.images?.map((img, index) => ({
        id: img.id || index + 1,
        src: img.image_url,
        alt: img.title || `gallery-${index + 1}`
    })) || [];

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
        });

        if (typeof window !== 'undefined') {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                    imageTosvg();
                });
            } else {
                imageTosvg();
            }
        }
        if (galleryImages.length > 0) {
            Fancybox.bind("[data-fancybox='gallery']", {
                Thumbs: {
                    autoStart: false,
                },
                Toolbar: {
                    display: {
                        left: ["infobar"],
                        middle: ["zoomIn", "zoomOut", "toggle1to1", "rotateCCW", "rotateCW", "flipX", "flipY"],
                        right: ["slideshow", "download", "thumbs", "close"],
                    },
                },
                Images: {
                    zoom: true,
                },
            });
        }
        return () => {
            Fancybox.destroy();
        };
    }, [galleryImages]);

    const getAnimationDelay = (index) => {
        const delays = [null, "200", "400", "600"];
        return delays[index % 4];
    };
    if (!imagesData) {
        return (
            <section className="section-gallery pt-1 pb-10">
                <div className="container">
                    <div className="text-center py-10">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="mt-3">Loading gallery images...</p>
                    </div>
                </div>
            </section>
        );
    }

    if (!imagesData.status || !galleryImages.length) {
        return (
            <section className="section-gallery pt-1 pb-10">
                <div className="container">
                    <div className="text-center py-10">
                        <p>No gallery images available at the moment.</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="section-gallery pt-1 pb-10">
            <div className="container">
                <div className="row mb-minus-24">
                    {galleryImages.map((image, index) => (
                        <div
                            key={image.id}
                            className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-24 rx-575-50"
                            data-aos="flip-left"
                            data-aos-duration="1000"
                            data-aos-delay={getAnimationDelay(index)}
                        >
                            <div className="rx-gallery-card-two">
                                <a
                                    className="rx-gallery-img"
                                    href={image.src}
                                    data-fancybox="gallery"
                                    data-caption={image.alt}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        loading="lazy"
                                        width={350}
                                        height={300}
                                        sizes='300'
                                    />
                                    <div className="gallery-overlay">
                                        <div className="overlay-content">
                                            <i className="fas fa-search-plus"></i>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImageComponent;