"use client";
import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { imageTosvg } from '@/utils/imageToSvg';
import Link from 'next/link';
import Image from 'next/image';
export const NearByPlace = ({ initialNearByPlace = [] }) => {
    const [isAOSInitialized, setIsAOSInitialized] = useState(false);
    const hasConvertedSvg = useRef(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
        });
        setIsAOSInitialized(true);
        const handleSVGConversion = () => {
            if (!hasConvertedSvg.current) {
                imageTosvg();
                hasConvertedSvg.current = true;
            }
        };
        requestAnimationFrame(() => {
            handleSVGConversion();
        });
        return () => {
            AOS.refresh();
        };
    }, []);

    const getAOSProps = (delay = null) => {
        if (!isAOSInitialized) return {};
        const props = {
            'data-aos': 'fade-up',
            'data-aos-duration': '1000',
        };
        if (delay !== null) {
            props['data-aos-delay'] = delay;
        }
        return props;
    };
    const [showSvgImages, setShowSvgImages] = useState(false);

    useEffect(() => {
        setShowSvgImages(true);
    }, []);
    return (
        <section className="section-spa padding-tb-50 near-by-place">
            <div className="container">
                <div className="row mb-minus-24">
                    <div
                        className="col-12"
                    >
                        <div className="rx-banner text-center rx-banner-effects">
                            <p>
                                <img
                                    src="/assets/img/banner/left-shape.svg"
                                    alt="banner-left-shape"
                                    className="svg-img left-side"
                                />
                                Nearby Places
                                <img
                                    src="/assets/img/banner/right-shape.svg"
                                    alt="banner-right-shape"
                                    className="svg-img right-side"
                                />
                            </p>
                            <h4>
                                Explore Varanasi from <span>Hotel Elegance </span>
                            </h4>
                        </div>
                    </div>

                    {initialNearByPlace.map((place, index) => (
                        <div
                            key={place.id}
                            className="col-xl-3 col-lg-4 col-sm-6 mb-24"
                        >
                            <div className="rx-spa-card">
                                <Link href={`/near-by-place/${place.slug}`}>
                                    <div className="spa-img">
                                        <Image
                                            src={place.image_url}
                                            alt={place.title}
                                            className="w-full object-cover"
                                            width={200}
                                            height={200}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        />
                                    </div>
                                    <div className="spa-contact p-4">
                                        <h4 className="text-lg font-bold mb-2">{place.title}</h4>
                                        <p className="text-gray-600 text-sm">{place.short_desc}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}

                    {initialNearByPlace.length > 3 && (
                        <div className="col-md-12 mb-2">
                            <div className="text-center">
                                <Link href="/near-by-place" className="btn rx-btn-two rounded">
                                    View More Places in Varanasi
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};