"use client";
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { imageTosvg } from '@/utils/imageToSvg';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const Testimonials = ({ initialTestimonials = [] }) => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        // Transform API data to match your component structure
        if (initialTestimonials && initialTestimonials.length > 0) {
            const transformedTestimonials = initialTestimonials.map((item, index) => ({
                id: item.id || index + 1,
                hotelName: item.title || "Guest Review",
                guestType: item.guest_type || "Guest",
                dateVisited: item.visit_date || "Recently",
                review: item.review_text || "",
                ratings: {
                    value: item.ratings?.value || 5.0,
                    rooms: item.ratings?.rooms || 5.0,
                    location: item.ratings?.location || 5.0,
                    cleanliness: item.ratings?.cleanliness || 5.0,
                    service: item.ratings?.service || 5.0,
                    sleepQuality: item.ratings?.sleepQuality || 5.0
                }
            }));
            setTestimonials(transformedTestimonials);
        }
    }, [initialTestimonials]);

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

    const renderRatingBar = (score) => (
        <div className="rating-bar">
            <div
                className="rating-fill"
                style={{ width: `${(score / 5) * 100}%` }}
            />
        </div>
    );

    const renderRatingItem = (label, score) => (
        <div className="rating-item">
            <span className="rating-label">{label}</span>
            <div className="rating-bar-score">
                {renderRatingBar(score)}
                <span className="rating-score">{score.toFixed(1)}</span>
            </div>
        </div>
    );

    return (
        <section className="section-testimonials padding-tb-50 testimonials-first">
            {/* <div className="overlay-welcome" /> */}
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-12">
                        <div className="rx-banner text-center rx-banner-effects">
                            <p>
                                <img
                                    src="assets/img/banner/left-shape.svg"
                                    alt="banner-left-shape"
                                    className="svg-img left-side"
                                />
                                Testimonials (Trip Advisor)
                                <img
                                    src="assets/img/banner/right-shape.svg"
                                    alt="banner-right-shape"
                                    className="svg-img right-side"
                                />
                            </p>
                            <h4>
                                Our Happy <span>Guests Say</span>
                            </h4>
                        </div>
                    </div>
                    <div
                        className="col-12 col-lg-8"                        
                    >
                        <Carousel
                            className="w-full"
                            opts={{
                                loop: true,
                                align: "center",
                                skipSnaps: false,
                                duration: 30,
                            }}
                            plugins={[
                                Autoplay({
                                    delay: 5000,
                                    stopOnInteraction: false,
                                }),
                            ]}
                        >
                            <CarouselContent>
                                {testimonials.map((testimonial) => (
                                    <CarouselItem key={testimonial.id}>
                                        <div className="row mb-minus-24 justify-content-md-center">
                                            <div className="col-md-10 col-12 mb-24">
                                                <div className="rx-testimonials-contact">
                                                    <div className="rx-inner-banner">
                                                        <h4>{testimonial.hotelName}</h4>
                                                        <span>
                                                            ({testimonial.guestType})
                                                            <span>
                                                                <strong>Date visited :</strong> {testimonial.dateVisited}
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="inner-contact">
                                                        <p style={{ whiteSpace: 'pre-line' }}>
                                                            {testimonial.review}
                                                        </p>
                                                        <div className="tripadvisor-rating">
                                                            <div className="tripadvisor-ratings-grid">
                                                                {renderRatingItem("Value", testimonial.ratings.value)}
                                                                {renderRatingItem("Rooms", testimonial.ratings.rooms)}
                                                                {renderRatingItem("Location", testimonial.ratings.location)}
                                                                {renderRatingItem("Cleanliness", testimonial.ratings.cleanliness)}
                                                                {renderRatingItem("Service", testimonial.ratings.service)}
                                                                {renderRatingItem("Sleep Quality", testimonial.ratings.sleepQuality)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            {/* <div className="flex justify-center gap-4 mt-6">
                                <CarouselPrevious className="relative static transform-none left-0 right-0 top-0 -translate-y-0 bg-white/20 hover:bg-white/40 text-white border-white/30" />
                                <CarouselNext className="relative static transform-none left-0 right-0 top-0 -translate-y-0 bg-white/20 hover:bg-white/40 text-white border-white/30" />
                            </div> */}
                        </Carousel>
                    </div>
                    <div
                        className="col-md-12 mb-3 mt-2 text-center"
                    >
                        <div className="text-center">
                            <a
                                href="https://www.tripadvisor.in/Hotel_Review-g297685-d23708537-Reviews-The_Elegance_Hotel-Varanasi_Varanasi_District_Uttar_Pradesh.html#REVIEWS"
                                target="_blank"
                                className="btn rx-btn-two rounded"
                            >
                                View More Reviews On Trip Advisor
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};