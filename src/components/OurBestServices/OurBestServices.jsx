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
                        className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-24 rx-575-50"
                        data-aos="flip-left"
                        data-aos-duration="1000"
                    >
                        <div className="rx-services">
                            <div className="services-ico">
                                <img
                                    src="assets/img/services/1.svg"
                                    alt="services-1"
                                    className="svg-img"
                                />
                            </div>
                            <div className="services-contact">
                                <h5>Friendly Service</h5>
                                <ul>
                                    <li>- Reception/Front Desk</li>
                                    <li>- Room Service</li>
                                    <li>- Housekeeping</li>
                                    <li>- Wi-Fi &amp; Parking</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-24 rx-575-50"
                        data-aos="flip-left"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                    >
                        <div className="rx-services">
                            <div className="services-ico">
                                <img
                                    src="assets/img/services/2.svg"
                                    alt="services-2"
                                    className="svg-img"
                                />
                            </div>
                            <div className="services-contact">
                                <h5>Get Breakfast</h5>
                                <ul>
                                    <li>- Comfortable Bedding</li>
                                    <li>- Bathroom &amp; Pool</li>
                                    <li>- Tv, Ac &amp; Heathing</li>
                                    <li>- Mini Bar &amp; Safe</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-24 rx-575-50"
                        data-aos="flip-left"
                        data-aos-duration="1000"
                        data-aos-delay="400"
                    >
                        <div className="rx-services">
                            <div className="services-ico">
                                <img
                                    src="assets/img/services/3.svg"
                                    alt="services-3"
                                    className="svg-img"
                                />
                            </div>
                            <div className="services-contact">
                                <h5>Transfer Services</h5>
                                <ul>
                                    <li>- Restaurant &amp; Cafe</li>
                                    <li>- Bar &amp; Lounge</li>
                                    <li>- Cafe &amp; Canteen</li>
                                    <li>- Room service</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-24 rx-575-50"
                        data-aos="flip-left"
                        data-aos-duration="1000"
                        data-aos-delay="600"
                    >
                        <div className="rx-services">
                            <div className="services-ico">
                                <img
                                    src="assets/img/services/4.svg"
                                    alt="services-4"
                                    className="svg-img"
                                />
                            </div>
                            <div className="services-contact">
                                <h5>Multi-Cuisine</h5>
                                <ul>
                                    <li>- Swimming pool</li>
                                    <li>- Gym / Fitness center</li>
                                    <li>- Spa &amp; Beauty</li>
                                    <li>- Sauna &amp; Steam Room</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-24 rx-575-50"
                        data-aos="flip-left"
                        data-aos-duration="1000"
                    >
                        <div className="rx-services">
                            <div className="services-ico">
                                <img
                                    src="assets/img/services/5.svg"
                                    alt="services-5"
                                    className="svg-img"
                                />
                            </div>
                            <div className="services-contact">
                                <h5>Cozy Rooms</h5>
                                <ul>
                                    <li>- Conference Hall</li>
                                    <li>- Meeting Rooms</li>
                                    <li>- Business Center</li>
                                    <li>- Wi-Fi &amp; Internet</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-24 rx-575-50"
                        data-aos="flip-left"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                    >
                        <div className="rx-services">
                            <div className="services-ico">
                                <img
                                    src="assets/img/services/6.svg"
                                    alt="services-6"
                                    className="svg-img"
                                />
                            </div>
                            <div className="services-contact">
                                <h5>Family Facilities</h5>
                                <ul>
                                    <li>- Kids Club</li>
                                    <li>- Babysitting Services</li>
                                    <li>- Family Rooms</li>
                                    <li>- Game zone</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-24 rx-575-50"
                        data-aos="flip-left"
                        data-aos-duration="1000"
                        data-aos-delay="400"
                    >
                        <div className="rx-services">
                            <div className="services-ico">
                                <img
                                    src="assets/img/services/7.svg"
                                    alt="services-7"
                                    className="svg-img"
                                />
                            </div>
                            <div className="services-contact">
                                <h5>Additional Services</h5>
                                <ul>
                                    <li>- Concierge</li>
                                    <li>- Laundry &amp; Dry Cleaning</li>
                                    <li>- Shuttle Service</li>
                                    <li>- Pet-Friendly</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-24 rx-575-50"
                        data-aos="flip-left"
                        data-aos-duration="1000"
                        data-aos-delay="600"
                    >
                        <div className="rx-services">
                            <div className="services-ico">
                                <img
                                    src="assets/img/services/8.svg"
                                    alt="services-8"
                                    className="svg-img"
                                />
                            </div>
                            <div className="services-contact">
                                <h5>Special Features</h5>
                                <ul>
                                    <li>- Custom Rooms</li>
                                    <li>- Garden &amp; Golf</li>
                                    <li>- Terrace</li>
                                    <li>- Event Spaces</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}