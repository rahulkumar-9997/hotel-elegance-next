"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { imageTosvg } from '@/utils/imageToSvg';

export const PositionedUnique = () => {
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
        <section className="section-menu padding-tb-50 downtown-section">
            <div className="container">
                <div className="row">
                    <div
                        className="col-12 aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <div className="rx-banner rx-banner-effects">
                            <h4>
                                Positioned at the unique and
                                <br />
                                sought-after <span> Downtown Varanasi</span>
                            </h4>
                        </div>
                    </div>
                    <div
                        className="col-12 aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                    >
                        <div className="row">
                            <div className="col-lg-8 col-12">
                                <div className="inner-img">
                                    <img src="assets/dev-img/babatpur-airport.jpg" alt="menu-1" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="facts-cards">
                                    <div className="fact-card fact-card-half">
                                        {/* <div class="towndown-icon">
                                  <i class="ri-questionnaire-line"></i>
                              </div> */}
                                        <div>
                                            <h6 className="heading h3 greyscale-0 mb-0 facts-title">
                                                <em className="italic-text">15 minutes</em>
                                            </h6>
                                            <div className="greyscale-0 facts-desc">
                                                to Babatpur Airport
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fact-card fact-card-half">
                                        {/* <div class="towndown-icon">
                                  <i class="ri-questionnaire-line"></i>
                              </div> */}
                                        <div>
                                            <h6 className="heading h3 greyscale-0 mb-0 facts-title">
                                                <em className="italic-text">5 minutes</em>
                                            </h6>
                                            <div className="greyscale-0 facts-desc">
                                                to Cant Railway Station
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fact-card fact-card-full">
                                        {/* <div class="towndown-icon">
                                            <i class="ri-questionnaire-line"></i>
                                        </div> */}
                                        <div>
                                            <h6 className="heading h3 greyscale-0 mb-0 facts-title">
                                                <em className="italic-text">21 minutes</em>
                                            </h6>
                                            <div className="greyscale-0 facts-desc">
                                                to Kashi Vishwanath Temple
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
