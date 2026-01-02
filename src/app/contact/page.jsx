"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { imageTosvg } from '@/utils/imageToSvg';

export default function tariffPage() {
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
            {/* Breadcrumb */}
            <section className="section-breadcrumb">
                <div className="rx-breadcrumb-image">
                    <div className="rx-breadcrumb-overlay" />
                    <div className="inner-breadcrumb-contact sub_header_content">
                        <div className="main-breadcrumb-contact">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="rx-banner-contact">
                                            <h1>Contact Us</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-10 md:py-10 bg-gradient-to-b from-gray-50 to-white contact-us-card">
                <div className="max-w-7xl mx-auto px-1 sm:px-1 lg:px-1">
                    <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Address Card */}
                        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 flex flex-col sm:flex-row gap-3 border border-gray-100 hover:border-primary/20 hover:-translate-y-1">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-[#410f06] group-hover:bg-[#410f06] group-hover:text-white! transition-colors duration-300">
                                    <i className="text-2xl ri-user-location-fill"></i>
                                </div>
                            </div>

                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                                    Visit Us
                                </h3>
                                <address className="text-gray-600 not-italic space-y-1">
                                    <p className="leading-relaxed">
                                        N 10/60, Kakarmatta, DLW Road,<br />
                                        Near Banaras Railway Station,<br />
                                        Varanasi, Uttar Pradesh - 221004
                                    </p>
                                </address>
                                <div className="mt-4">
                                    <a
                                        href="https://maps.google.com/maps?width=1405&height=568&hl=en&q=Kakarmatta N.10/60 AM Kakarmatta, DLW Varanasi (U.P) 221106, Varanasi, Uttar Pradesh 221004&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-[#410f06]! font-medium hover:text-primary/80 transition-colors duration-300"
                                    >
                                        View on Maps
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Phone Card */}
                        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 flex flex-col sm:flex-row gap-3 border border-gray-100 hover:border-primary/20 hover:-translate-y-1">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-[#410f06] group-hover:bg-[#410f06] group-hover:text-white! transition-colors duration-300">
                                    <i className="text-2xl ri-headphone-fill"></i>
                                </div>
                            </div>

                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                                    Call Us
                                </h3>
                                <div className="space-y-3">
                                    <div>
                                        <a
                                            href="tel:+918810719088"
                                            className="text-gray-900 hover:text-primary transition-colors duration-300 text-lg font-medium block"
                                        >
                                            +91 88107 19088
                                        </a>
                                    </div>
                                    <div>
                                        <a
                                            href="tel:+918756882728"
                                            className="text-gray-900 hover:text-primary transition-colors duration-300 text-lg font-medium block"
                                        >
                                            +91 87568 82728
                                        </a>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 mt-3">
                                    Available Monday - Saturday, 9AM - 6PM
                                </p>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 flex flex-col sm:flex-row gap-3 border border-gray-100 hover:border-primary/20 hover:-translate-y-1">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-[#410f06] group-hover:bg-[#410f06] group-hover:text-white! transition-colors duration-300">
                                    <i className="text-2xl ri-mail-add-fill"></i>
                                </div>
                            </div>

                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                                    Email Us
                                </h3>
                                <a
                                    href="mailto:theelegance.kashi@gmail.com"
                                    className="text-gray-900 hover:text-primary transition-colors duration-300 text-lg font-medium block mb-2 break-words"
                                >
                                    theelegance.kashi@gmail.com
                                </a>
                                <p className="text-sm text-gray-500">
                                    We typically respond within 24 hours
                                </p>
                                <div className="mt-4">
                                    <a
                                        href="mailto:theelegance.kashi@gmail.com"
                                        className="inline-flex items-center px-4 py-2 bg-primary/10 text-[#410f06]! font-medium rounded-lg hover:bg-[#410f06]! hover:text-white! transition-all duration-300"
                                    >
                                        Send Message
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-contact padding-t-40 padding-b-100">
                <div className="container">
                    <h2 className="d-none">Contact</h2>
                    <div className="row">
                        <div className="col-12" data-aos="fade-up" data-aos-duration={1000}>
                            <div className="rx-contact-form bg-gradient-to-tr from-[#410f06] via-[#410f06] to-[#aa833f] backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50">
                                <div className="row mb-minus-24">
                                    <div className="col-lg-6 col-12 mb-24">
                                        <div className="rx-contact-touch-ifrem">
                                            <iframe src="https://maps.google.com/maps?width=1405&height=568&hl=en&q=Kakarmatta N.10/60 AM Kakarmatta, DLW Varanasi (U.P) 221106, Varanasi, Uttar Pradesh 221004&t=&z=14&ie=UTF8&iwloc=B&output=embed" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12 mb-24">
                                        <div className="rx-inner-form">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-lg-6 col-12 mb-24">
                                                        <div className="rx-input-box">
                                                            <label htmlFor="firstname" className="text-white">Your Name*</label>
                                                            <input
                                                                type="text"
                                                                id="firstname"
                                                                className="rx-form-control"
                                                                required=""
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-12 mb-24">
                                                        <div className="rx-input-box">
                                                            <label htmlFor="email" className="text-white">Your Email*</label>
                                                            <input
                                                                type="email"
                                                                id="email"
                                                                className="rx-form-control"
                                                                required=""
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-12 mb-24">
                                                        <div className="rx-input-box">
                                                            <label htmlFor="subject" className="text-white">Your Subject*</label>
                                                            <input
                                                                type="text"
                                                                id="subject"
                                                                className="rx-form-control"
                                                                required=""
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-12 mb-24">
                                                        <div className="rx-input-box">
                                                            <label htmlFor="message" className="text-white">Message*</label>
                                                            <textarea
                                                                className="rx-form-control"
                                                                id="message"
                                                                defaultValue={""}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="rx-inner-button">
                                                            <button type="button" className="rx-btn-two rounded">
                                                                Send Message
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}