"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { imageTosvg } from '@/utils/imageToSvg';
export const OurBestServices = () => {
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
        <section className="section-services padding-tb-50">
            <div className="container">
                <div className="row mb-minus-24">
                    <div className="col-12" data-aos="fade-up" data-aos-duration="1000">
                        <div className="rx-banner text-center rx-banner-effects">
                            <p>
                                <img
                                    src="assets/img/banner/left-shape.svg"
                                    alt="banner-left-shape"
                                    className="svg-img left-side"
                                />
                                Facilities
                                <img
                                    src="assets/img/banner/right-shape.svg"
                                    alt="banner-right-shape"
                                    className="svg-img right-side"
                                />
                            </p>
                            <h2>
                                Our Best <span>Services</span>
                            </h2>
                        </div>
                    </div>
                    <div
                        className="col-xl-4 col-lg-4 col-sm-12 col-12 mb-4"
                        data-aos="flip-left"
                        data-aos-duration="1000"
                    >
                        <div className="rx-services">
                            <div className="services-ico">
                                <img src="assets/img/services/front-desk-and-guest-support.svg" alt="front-desk" className="svg-img" />
                            </div>
                            <div className="services-contact">
                                <h5>Front Desk & Guest Support</h5>
                                <ul>
                                    <li>- 24/7 Front Desk Assistance</li>
                                    <li>- Express Check-in & Check-out</li>
                                    <li>- Taxi & Cab Booking Support</li>
                                    <li>- Travel & Local Guidance</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div
                        className="col-xl-4 col-lg-4 col-sm-12 col-12 mb-4"
                        data-aos="flip-left"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                    >
                        <div className="rx-services">
                            <div className="services-ico">
                                <img src="assets/img/services/room-and-comfort-services.svg" alt="room-services" className="svg-img" />
                            </div>
                            <div className="services-contact">
                                <h5>Room & Comfort Services</h5>
                                <ul>
                                    <li>- Daily Housekeeping</li>
                                    <li>- Clean Linen & Towels</li>
                                    <li>- In-Room Dining</li>
                                    <li>- Extra Bed on Request</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div
                        className="col-xl-4 col-lg-4 col-sm-12 col-12 mb-4"
                        data-aos="flip-left"
                        data-aos-duration="1000"
                        data-aos-delay="400"
                    >
                        <div className="rx-services">
                            <div className="services-ico">
                                <img src="assets/img/services/connectivity-and-utilities.svg" alt="connectivity" className="svg-img" />
                            </div>
                            <div className="services-contact">
                                <h5>Connectivity & Utilities</h5>
                                <ul>
                                    <li>- Free High-Speed Wi-Fi</li>
                                    <li>- Power Backup</li>
                                    <li>- Lift Access</li>
                                    <li>- Air-Conditioned Rooms</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div
                        className="col-xl-4 col-lg-4 col-sm-12 col-12 mb-4"
                        data-aos="flip-left"
                        data-aos-duration="1000"
                        data-aos-delay="600"
                    >
                        <div className="rx-services">
                            <div className="services-ico">
                                <img src="assets/img/services/dining-and-lounge-services.svg" alt="dining" className="svg-img" />
                            </div>
                            <div className="services-contact">
                                <h5>Dining & Lounge Services</h5>
                                <ul>
                                    <li>- Multi-Cuisine Restaurant</li>
                                    <li>- In-House Lounge</li>
                                    <li>- Veg & Non-Veg Options</li>
                                    <li>- Breakfast, Lunch & Dinner</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div
                        className="col-xl-4 col-lg-4 col-sm-12 col-12 mb-4"
                        data-aos="flip-left"
                        data-aos-duration="1000"
                    >
                        <div className="rx-services">
                            <div className="services-ico">
                                <img src="assets/img/services/business-events.svg" alt="room-facilities" className="svg-img" />
                            </div>
                            <div className="services-contact">
                                <h5>Business & Events</h5>
                                <ul>
                                    <li>- Professional Space for Meetings & Conferences</li>
                                    <li>- Perfect Choice for Business Gatherings</li>
                                    <li>- Corporate-Friendly Event Facilities</li>
                                    <li>- Smart Infrastructure for Business Events</li>                                    
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div
                        className="col-xl-4 col-lg-4 col-sm-12 col-12 mb-4"
                        data-aos="flip-left"
                        data-aos-duration="1000"
                        data-aos-delay="400"
                    >
                        <div className="rx-services">
                            <div className="services-ico">
                                <img src="assets/img/services/parking-and-accessibility.svg" alt="parking" className="svg-img" />
                            </div>
                            <div className="services-contact">
                                <h5>Parking & Accessibility</h5>
                                <ul>
                                    <li>- On-Site Parking</li>
                                    <li>- Secure Parking Area</li>
                                    <li>- Easy Vehicle Access</li>
                                    <li>- Lift Access</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}
