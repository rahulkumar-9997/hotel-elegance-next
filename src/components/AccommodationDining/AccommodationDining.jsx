"use client";
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { imageTosvg } from '@/utils/imageToSvg';
import EnquiryModal from '../EnquiryModal/EnquiryModal';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const AccommodationDining = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [items] = React.useState([
        {
            id: 1,
            bigImage: "assets/dev-img/accommodation/big-img/multi-cuisiner-restaurant.jpg",
            logo: "assets/dev-img/accommodation/multi-cuisine-restaurant.jpeg",
            title: "Multi-Cuisine Restaurant",
            subtitle: "Best in Banaras",
            description: "At Urban Chaupal, the best multi-cuisine restaurant in the city, discover Varanasi's rich tapestry, blending traditional customs with contemporary cuisine. Varanasi is embodied in our restaurant."
        },
        {
            id: 2,
            bigImage: "assets/dev-img/accommodation/big-img/onex-banquet.jpg",
            logo: "assets/dev-img/accommodation/onex-logo.jpg",
            title: "Onex Banquet",
            subtitle: "For every Occassion",
            description: "The Elegance Hotel offers you Onex Banquet, the Best Banquet in Varanasi near DLW and BHU. If you have a Engagement, Birthday Party, Reception, Family Get Together, Wedding Anniversary, Ring Ceremony, Sangeet & Mehandi Function."
        },
        {
            id: 3,
            bigImage: "assets/dev-img/accommodation/big-img/bar-and-lounge.jpg",
            logo: "assets/dev-img/accommodation/bar-and-lounge.png",
            title: "Bar & Lounge",
            subtitle: "For Best Evenings",
            description: "Welcome to the newest hotspot in Varanasi, the exquisite Tafri Bar & Lounge at The Elegance Hotel. Nestled within one of the city's top 10 hotels, our lounge offers an unparalleled experience for locals and visitors alike."
        },
        {
            id: 4,
            bigImage: "assets/dev-img/accommodation/big-img/sapphire-banquet.jpg",
            logo: "assets/dev-img/accommodation/onex-logo.jpg",
            title: "Sapphire Banquet",
            subtitle: "For all Events",
            description: "The Elegance Hotel offers you Onex Banquet, the Best Banquet in Varanasi near DLW and BHU. If you have a Engagement, Birthday Party, Reception, Family Get Together, Wedding Anniversary, Ring Ceremony, Sangeet & Mehandi Function."
        },
        {
            id: 5,
            bigImage: "assets/dev-img/accommodation/big-img/suites.jpg",
            title: "Suites",
            subtitle: "2 Suite Rooms",
            description: "Welcome to The Elegance Hotel in Varanasi, to create an unforgettable travel experience. Our hotel rooms in Varanasi city offer a comfortable and convenient stay for travelers eager to explore."
        }
    ]);

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
    }, []);

    return (
        <>
            <section className="section-amenities padding-tb-50 about-bg-first text-bg-white accomndation-section">
                <div
                    className="about-two__bg"
                    style={{ backgroundImage: "url(assets/dev-img/elegance-bg.jpg  )" }}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-12" data-aos="fade-up" data-aos-duration="1000">
                            <div className="rx-banner text-center rx-banner-effects">
                                <p>
                                    <img
                                        src="assets/img/banner/left-shape.svg"
                                        alt="banner-left-shape"
                                        className="svg-img left-side"
                                    />
                                    The Elegance
                                    <img
                                        src="assets/img/banner/right-shape.svg"
                                        alt="banner-right-shape"
                                        className="svg-img right-side"
                                    />
                                </p>
                                <h3>
                                    Accommodation and <span style={{ color: "#fff" }}>Dining</span>
                                </h3>
                            </div>
                        </div>
                        <div
                            className="col-12"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                        >
                            <Carousel
                                className="w-full"
                                opts={{
                                    loop: true,
                                    align: "start",
                                    skipSnaps: false,
                                    duration: 20,
                                }}
                                plugins={[
                                    Autoplay({
                                        delay: 4000,
                                        stopOnInteraction: false,
                                    }),
                                ]}
                            >
                                <CarouselContent>
                                    {items.map((item) => (
                                        <CarouselItem key={item.id}>
                                            <div className="row mb-minus-24">
                                                <div className="col-lg-7 col-12 mb-24">
                                                    <div className="rx-amenities-img h-full">
                                                        <img
                                                            src={item.bigImage}
                                                            alt={item.title}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 col-12 mb-24">
                                                    <div className="rx-amenities-contact amenities-animation h-full">
                                                        <div className="inner-banner">
                                                            {item.logo && (
                                                                <div className="acco-logo-area">
                                                                    <img src={item.logo} alt={`${item.title} logo`} />
                                                                </div>
                                                            )}
                                                            <h4>{item.title}</h4>
                                                            <h5>{item.subtitle}</h5>
                                                        </div>
                                                        <p>{item.description}</p>
                                                        <div className="amenities-btn">
                                                            <a className="rx-btn-two rounded cursor-pointer"  
                                                                onClick={() => {
                                                                    setTitle(item.title)
                                                                    setIsModalOpen(true)
                                                                }}>
                                                                Book Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <div className="flex justify-center gap-4 mt-2">
                                    <CarouselPrevious className="relative static transform-none left-0 right-0 top-0 -translate-y-0" />
                                    <CarouselNext className="relative static transform-none left-0 right-0 top-0 -translate-y-0" />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
            <EnquiryModal
                isOpen={isModalOpen}
                title={title}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};