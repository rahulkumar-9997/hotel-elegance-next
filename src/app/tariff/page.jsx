"use client";
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { imageTosvg } from '@/utils/imageToSvg';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import EnquiryModal from '@/components/EnquiryModal/EnquiryModal'; 
export default function tariffPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState("");
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

    const rooms = [
        {
            title: "SUITE ROOM",
            image: "/assets/dev-img/room/page/suite-room-w15.jpg",
            doublePrice: "Rs. 7500",
            singlePrice: "Rs. 6500",
            features: ["Luxury Living", "City View", "Private Balcony", "King Size Bed"],
            highlight: "Most Popular"
        },
        {
            title: "PREMIUM ROOM",
            image: "/assets/dev-img/room/page/premium-room.jpg",
            doublePrice: "Rs. 6000",
            singlePrice: "Rs. 5000",
            features: ["Spacious", "Work Desk", "Double Bed"],
            highlight: "Best Value"
        },
        {
            title: "STANDARD ROOM",
            image: "/assets/dev-img/room/page/standard-room.jpg",
            doublePrice: "Rs. 5000",
            singlePrice: "Rs. 4000",
            features: ["Comfort Plus", "Garden View", "Coffee Maker"],
            highlight: null
        },

    ];

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb 
                title="Tariff" 
                backgroundImage="/assets/dev-img/bread-banner/Tariff.jpg"
                mobileBackgroundImage="/assets/dev-img/bread-banner/mobile/Tariff.jpg"
                subtitle=""
            />
            <section className="section-menu padding-t-100 padding-b-20">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-md-8" data-aos="fade-up" data-aos-duration={1000}>
                            <div className="rx-banner text-center rx-banner-effects">
                                <p>
                                    <img
                                        src="assets/img/banner/left-shape.svg"
                                        alt="banner-left-shape"
                                        className="svg-img left-side"
                                    />
                                    Tariff Rooms
                                    <img
                                        src="assets/img/banner/right-shape.svg"
                                        alt="banner-right-shape"
                                        className="svg-img right-side"
                                    />
                                </p>
                                <h1 className="text-4xl md:text-5xl font-bold mt-4 text-black">
                                    Best Tariff Rooms in Varanasi
                                </h1>
                                <p className="mt-6 text-lg text-black max-w-3xl mx-auto">
                                    Are you planning a trip to Varanasi, India's heart of spirit? We'll guide you to the best spots to stay. Varanasi's got history and charm, and we want you comfy on your trip. Here's the best rooms at The Elegance Hotel:
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-md-center">
                        <div className="mt-16 w-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                {rooms.map((room, index) => (
                                    <CardContainer
                                        key={index}
                                        className="w-full group h-full"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                    >
                                        <CardBody className="bg-white relative group/card
                                            border border-gray-100 rounded-3xl p-0
                                            hover:shadow-2xl hover:shadow-gray-200/50
                                            transition-all duration-500 hover:-translate-y-2
                                            w-full h-full overflow-hidden
                                            hover:border-primary/20">
                                            {room.highlight && (
                                                <div className="absolute top-4 right-4 z-10">
                                                    <div className="px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 
                                                        text-white text-xs font-bold rounded-full 
                                                        shadow-lg animate-pulse">
                                                        {room.highlight}
                                                    </div>
                                                </div>
                                            )}
                                            <CardItem
                                                translateZ="80"
                                                rotateX={5}
                                                rotateZ={-1}
                                                className="w-full h-56 overflow-hidden relative"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                                                <img
                                                    src={room.image}
                                                    className="h-full w-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                                                    alt={room.title}
                                                />
                                            </CardItem>
                                            <div className="p-6">
                                                <CardItem
                                                    translateZ="50"
                                                    className="text-2xl font-bold text-black mb-2"
                                                >
                                                    <h4 className="text-[#410f06]">{room.title}</h4>
                                                </CardItem>
                                                <div className="mb-6">
                                                    <div className="flex flex-wrap gap-2 mt-4">
                                                        {room.features.map((feature, idx) => (
                                                            <span
                                                                key={idx}
                                                                className="px-3 py-1.5 bg-gray-50
                                                                    text-xs font-medium rounded-full 
                                                                    border border-gray-200">
                                                                {feature}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="border-t border-gray-100 pt-6">
                                                    <div className="flex flex-col space-y-4">
                                                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                                                            <div className="flex items-center space-x-3">
                                                                <div className="w-8 h-8 flex items-center justify-center bg-[#410f06] rounded-lg">
                                                                    <span className="text-[#ffff] font-bold">1</span>
                                                                </div>
                                                                <div>
                                                                    <p className="text-sm font-medium text-black">Single Occupancy</p>
                                                                </div>
                                                            </div>
                                                            <CardItem
                                                                translateZ={30}
                                                                className="text-xl font-bold text-black"
                                                            >
                                                                {room.singlePrice}
                                                            </CardItem>
                                                        </div>
                                                        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl">
                                                            <div className="flex items-center space-x-3">
                                                                <div className="w-8 h-8 flex items-center justify-center bg-[#410f06] rounded-lg">
                                                                    <span className="text-white font-bold">2</span>
                                                                </div>
                                                                <div>
                                                                    <p className="text-sm font-medium text-black">Double Occupancy</p>
                                                                </div>
                                                            </div>
                                                            <CardItem
                                                                translateZ={30}
                                                                className="text-2xl font-bold text-black"
                                                            >
                                                                {room.doublePrice}
                                                            </CardItem>
                                                        </div>
                                                    </div>
                                                    <CardItem
                                                        translateZ={40}
                                                        as="button"
                                                        className="w-full mt-3 px-3 py-3  bg-gradient-to-r from-[#410f06] via-[#410f06] to-[#aa833f]
                                                            text-white font-semibold rounded
                                                            hover:from-primary hover:to-primary/90
                                                            transition-all duration-300
                                                            shadow-lg hover:shadow-xl
                                                            hover:scale-[1.02] active:scale-[0.98]"
                                                            onClick={() => {
                                                            setTitle(room.title)
                                                            setIsModalOpen(true)
                                                        }}
                                                    >
                                                        Book Now
                                                        <span className="ml-2">→</span>
                                                    </CardItem>
                                                </div>
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent 
                                                opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                        </CardBody>
                                    </CardContainer>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="section-menu pt-5 padding-b-50">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-4">
                        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                            <h4 className="text-lg font-bold text-[#410f06] mb-4 flex items-center">
                                <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-lg mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                                Important Information
                            </h4>
                            <ul className="space-y-4">
                                <li className="flex items-start p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                                    <span className="inline-flex items-center justify-center w-8 h-8 bg-amber-100 text-amber-600 rounded-lg mr-3 flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </span>
                                    <span>
                                        <span className="font-semibold text-black">Extra Bed:</span> It's Rs. 1500 more
                                    </span>
                                </li>
                                <li className="flex items-start p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                                    <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-lg mr-3 flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </span>
                                    <span className="">
                                        <span className="font-semibold text-black">GST Taxes:</span> Will add to your bill
                                    </span>
                                </li>
                                <li className="flex items-start p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                                    <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 rounded-lg mr-3 flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </span>
                                    <span className="">
                                        <span className="font-semibold text-black">Check-in:</span> 12:00 PM | <span className="font-semibold text-black">Check-out:</span> 11:00 AM
                                    </span>
                                </li>
                                <li className="flex items-start p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                                    <span className="inline-flex items-center justify-center w-8 h-8 bg-purple-100 text-purple-600 rounded-lg mr-3 flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </span>
                                    <div>
                                        <span className="font-semibold text-black">Room Availability:</span>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">2 Suite Rooms</span>
                                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">6 Premium Rooms</span>
                                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">All Standard Rooms</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                            <div className="flex items-start mb-4">
                                <span className="inline-flex items-center justify-center w-10 h-10 bg-[#410f06] text-white rounded-lg mr-3 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                <div>
                                    <h4 className="text-xl font-bold text-[#410f06] mb-1">Booking Rules</h4>
                                    <p>We aim to keep it simple and fair for all</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="relative pl-10">
                                    <div className="absolute left-0 top-1 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="bg-green-50 p-2 rounded-lg border border-green-100">
                                        When you book your room, you must pay half the cost in advance, at least three days before your stay.
                                    </p>
                                </div>

                                <div className="relative pl-10">
                                    <div className="absolute left-0 top-1 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p className=" bg-blue-50 p-2 rounded-lg border border-blue-100">
                                        The Customer needs to pay at least 50% Advance 3 days prior to Check IN Date. The above condition will not be applicable in case of Advance less than 50% before 3 days.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-[#410f06]/5 to-[#aa833f]/5 rounded-xl p-6 border border-[#410f06]/10">
                            <div className="flex items-start mb-4">
                                <span className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-[#410f06] to-[#aa833f] text-white rounded-lg mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </span>
                                <div>
                                    <h4 className="text-xl mb-1">
                                        Ready for Your Varanasi Trip?
                                    </h4>
                                    <p>Your Ultimate Room Guide!</p>
                                </div>
                            </div>

                            <p className="mb-6">
                                Now that you know about the best spots to stay in Varanasi, it's time to plan your visit! Whether you're seeing old temples or walking through lively markets, a cozy place to rest is key.
                            </p>

                            <div className="space-y-3 mb-3 mt-2 book-now">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Book your stay now</span>
                                </div>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Get ready for an unforgettable journey</span>
                                </div>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Experience the spiritual heart of India</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-[#410f06]/5 to-[#aa833f]/5 rounded-xl p-6 border border-[#410f06]/10">
                            <h4 className="text-xl font-bold mb-4 flex items-center">
                                <span className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-[#410f06] to-[#aa833f] text-white rounded-lg mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                </span>
                                Experience Varanasi in Style
                            </h4>
                            <p className="mb-4">
                                Plan your Varanasi trip now! Check out our awesome rooms. Dream of staying in a Suite Room – big and fancy, perfect for anyone! Or relax in a Standard Room for a good night's sleep.
                            </p>
                            <p className="">
                                Need more space? We can add an extra bed easily. Just make sure to book three days in advance – we're ready for you! Get ready for a great Varanasi trip – from old sights to busy markets, there's lots to see. Book your room today and let's start the adventure!
                            </p>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 md:gap-4">
                            <div className="noteThat bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-2 mb-2"> 
                                <p className="text-blck mb-0">
                                    <strong>Please Note:</strong>
                                     In case of any Cancellation from the Hotel side, or failure in part of commitment from the Hotel regarding Room Reservations, we will refund the Advance amount paid by the Customer as well as additional Rs.1000 penalty per room. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <EnquiryModal 
                isOpen={isModalOpen} 
                title = {title}
                onClose={() => setIsModalOpen(false)} 
            />
        </>
    )
}