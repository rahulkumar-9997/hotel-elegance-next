"use client";
import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import Image from 'next/image';
import 'aos/dist/aos.css';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const OnexBanquet = ({ onexData }) => {
    const [isLoading, setIsLoading] = useState(!onexData);
    const [banquetData, setBanquetData] = useState(onexData?.data || null);
    const fancyboxInitialized = useRef(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
        });
        if (!fancyboxInitialized.current) {
            Fancybox.bind("[data-fancybox='gallery-onex']", {
                Thumbs: {
                    autoStart: true,
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
                    zoomOpacity: "auto",
                    click: "close",
                    wheel: "slide",
                },
                on: {
                    init: () => {
                        console.log("Fancybox initialized");
                    },
                },
            });
            fancyboxInitialized.current = true;
        }

        return () => {
            Fancybox.unbind("[data-fancybox='gallery-onex']");
            Fancybox.close();
        };
    }, []);

    useEffect(() => {
        if (onexData) {
            setBanquetData(onexData.data);
            setIsLoading(false);
        }
    }, [onexData]);
    useEffect(() => {
        if (banquetData?.images && fancyboxInitialized.current) {
            setTimeout(() => {
                Fancybox.unbind("[data-fancybox='gallery-onex']");
                Fancybox.bind("[data-fancybox='gallery-onex']", {
                    Thumbs: {
                        autoStart: true,
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
                        zoomOpacity: "auto",
                        click: "close",
                        wheel: "slide",
                    },
                });
            }, 100);
        }
    }, [banquetData]);

    const galleryImages = banquetData?.images?.map((img, index) => ({
        id: img.id || index + 1,
        src: img.image_url,
        alt: `onex-banquet-${index + 1}`
    })) || [];

    if (isLoading) {
        return (
            <section className="section-gallery padding-tb-50 banquate">
                <div className="container">
                    <div className="text-center py-10">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="mt-3">Loading banquet details...</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="section-gallery padding-tb-50 banquate">
            <div className="container">
                <div className="row mb-minus-24 justify-content-md-center">
                    <div className="col-md-8" data-aos="fade-up" data-aos-duration="1000">
                        <div className="rx-banner text-center rx-banner-effects">
                            <p>
                                <img
                                    src="assets/img/banner/left-shape.svg"
                                    alt="banner-left-shape"
                                    className="svg-img left-side"
                                />
                                Onex Banquet
                                <img
                                    src="assets/img/banner/right-shape.svg"
                                    alt="banner-right-shape"
                                    className="svg-img right-side"
                                />
                            </p>
                            <h1>
                                Best Banquets near DLW Varanasi <span>by Hotel Elegance</span>
                            </h1>
                            <h2 className="mt-1 text-xl banquate-2">
                                Amazing & Perfect place for your Special Celebrations.
                            </h2>
                            <div className="mt-3">
                                <p>
                                    The Elegance Hotel offers you Onex Banquet, the Best Banquet in Varanasi near DLW and BHU. If you have a Engagement, Birthday Party, Reception, Family Get Together, Wedding Anniversary, Ring Ceremony, Sangeet & Mehandi Function, Wedding or any family event coming up in your family and booking a perfect Banquet Hall is 1st priority, Onex Banquet by Hotel Elegance is the Best Option.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-minus-24">
                    <div className="col-12" data-aos="fade-up" data-aos-duration="1000">
                        <div className="relative w-full">
                            <Carousel
                                className="w-full mx-auto"
                                opts={{
                                    loop: true,
                                    align: "start",
                                    skipSnaps: false,
                                    duration: 25,
                                }}
                                plugins={[
                                    Autoplay({
                                        delay: 4000,
                                        stopOnInteraction: false,
                                    }),
                                ]}
                            >
                                <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 text-gray-800 border-gray-300 shadow-xl hover:shadow-2xl transition-all duration-300 w-10 h-10 md:w-12 md:h-12 rounded flex items-center justify-center" />

                                <CarouselContent className="py-4 px-2 md:px-4">
                                    {galleryImages.map((image) => (
                                        <CarouselItem
                                            key={image.id}
                                            className="pl-1 md:pl-1 basis-1/2 md:basis-1/3 lg:basis-1/4"
                                        >
                                            <div className="p-2">
                                                <div className="rx-gallery-card-two overflow-hidden rounded-lg group">
                                                    <a
                                                        className="rx-gallery-img block overflow-hidden relative"
                                                        href={image.src}
                                                        data-fancybox="gallery-onex"
                                                        data-src={image.src}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            Fancybox.show([{
                                                                src: image.src,
                                                                type: "image"
                                                            }], {
                                                                Thumbs: { autoStart: true },
                                                            });
                                                        }}
                                                    >
                                                        <Image
                                                            src={image.src}
                                                            alt={image.alt}
                                                            className="w-full h-48 md:h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                                            width={350}
                                                            height={350}
                                                            sizes='300'
                                                            loading="lazy"
                                                        />
                                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                                                    </a>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>

                                <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 text-gray-800 border-gray-300 shadow-xl hover:shadow-2xl transition-all duration-300 w-10 h-10 md:w-12 md:h-12 rounded flex items-center justify-center" />
                            </Carousel>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-8 -mb-6 mt-3">
                    <div className="lg:w-8/12">
                        <div className="space-y-4">
                            <p className="mb-3">
                                Onex Banquet is an indoor banquet hall with a capacity of 300 and 500
                                floating guests. Craft your conference meetings in an impeccable manner
                                with our Banquet Hall. At a banquet, you may expect family, friends and
                                associates who may be travelling thus a venue near the Railway Station
                                is best suitable for any function. Our hotel is less than 1 km from the
                                Banaras Railway Station.
                            </p>
                            <p className="mb-2">
                                Onex Banquet Hall provides a variety of services to effectively organise
                                the event, including cuisine, interior decoration, entertainment, and
                                more. With many friends, family members, and coworkers expected at your
                                event, you would undoubtedly want everything to go smoothly. Such a
                                problem might be simply fixed with the aid of Onex banquet Hall, which
                                not only give you a wonderful location but also assist you in expertly
                                arranging the event.
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-4/12">
                        <div className="relative h-64 w-full max-w-xs mx-auto md:mx-0">
                            <div className="group bg-[#a27121] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 border border-white">
                                <div className="relative h-70  w-full">
                                    <img
                                        src="/assets/dev-img/onex-logo.jpg"
                                        alt="Onex Banquet Logo"
                                        className="rounded! object-contain h-full w-full filter drop-shadow-lg"
                                    />
                                </div>
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-200 rounded-2xl transition-colors duration-300 pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default OnexBanquet;