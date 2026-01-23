"use client";
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { imageTosvg } from '@/utils/imageToSvg';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import EnquiryModal from '@/components/EnquiryModal/EnquiryModal';
import Link from 'next/link';
import {
    Bed,
    Wifi,
    Car,
    Coffee,
    Utensils,
    Tv,
    Wind,
    ShieldCheck,
    Bath,
    Users,
    Sparkles
} from 'lucide-react';
import { roomsData, getIconComponent } from '@/data/roomsData';

const iconMap = {
    Bed: Bed,
    Wifi: Wifi,
    Car: Car,
    Coffee: Coffee,
    Utensils: Utensils,
    Tv: Tv,
    Wind: Wind,
    ShieldCheck: ShieldCheck,
    Bath: Bath,
    Users: Users,
    Sparkles: Sparkles
};

export default function RoomsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState({
        title: "",
        price: 0,
        type: ""
    });

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

    const handleBookNow = (room) => {
        setSelectedRoom({
            title: room.title,
            price: room.price,
            type: room.subtitle
        });
        setIsModalOpen(true);
    };

    return (
        <>
            <Breadcrumb
                title={roomsData.pageContent.breadcrumbTitle}
                backgroundImage="/assets/dev-img/bread-banner/elegance-rooms-varanasi.jpeg"
                mobileBackgroundImage="/assets/dev-img/bread-banner/mobile/Rooms.jpg"
                subtitle=""
            />
            {/* Hero Introduction Section */}
            <section className="section-room padding-b-50 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto text-center mb-10">
                        <div className="row">
                            <div className="col-12" data-aos="fade-up" data-aos-duration={1000}>
                                <div className="rx-banner text-center rx-banner-effects mb-3!">
                                    <p>
                                        <img
                                            src="assets/img/banner/left-shape.svg"
                                            alt="banner-left-shape"
                                            className="svg-img left-side"
                                        />
                                         {roomsData.pageContent.seoTitle}
                                        <img
                                            src="assets/img/banner/right-shape.svg"
                                            alt="banner-right-shape"
                                            className="svg-img right-side"
                                        />
                                    </p>
                                    <h1>
                                       {roomsData.pageContent.title}
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div>
                            {roomsData.pageContent.intro.map((paragraph, index) => (
                                <p key={index} className="mb-2 text-lg leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Rooms Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {roomsData.rooms.map((room, index) => (
                            <div
                                key={room.id}
                                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                                data-aos="fade-up"
                                data-aos-duration={1000}
                                data-aos-delay={index * 200}
                            >
                                <div className="absolute top-4 right-4 z-10">
                                    <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                        Best Value
                                    </span>
                                </div>
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={room.image}
                                        alt={room.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/60"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <h3 className="text-xl font-bold mb-1 text-white">
                                            {room.title}
                                        </h3>
                                        <p className="text-white font-medium mb-3">
                                            {room.subtitle}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                                                    {room.size}
                                                </span>
                                                <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                                                    {room.occupancy}
                                                </span>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm text-white">Starting from</p>
                                                <p className="text-2xl font-bold text-white">
                                                    ₹{room.price.toLocaleString()}
                                                    <span className="text-sm font-normal"> / night</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {room.description}
                                    </p>
                                    <div className="grid grid-cols-2 gap-3 mb-6">
                                        {room.amenities.map((amenity, idx) => {
                                            const IconComponent = iconMap[amenity.icon] || Sparkles;
                                            return (
                                                <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                                                    <div className="text-[#410f06]">
                                                        <IconComponent className="w-5 h-5" />
                                                    </div>
                                                    <span className="text-sm text-[#410f06]">{amenity.label}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => handleBookNow(room)}
                                            className="flex-1 bg-gradient-to-tr from-[#aa833f] to-[#aa833f] text-white py-3 px-6 rounded font-semibold hover:from-[#410f06] hover:to-[#410f06] transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                                        >
                                            Book Now
                                        </button>
                                        <Link
                                            href={`/hotel-rooms-in-varanasi/${room.slug}`}
                                            className="px-4 py-3 border-2 border-amber-600 text-amber-600 rounded-xl font-semibold hover:bg-amber-50 transition-all duration-300 inline-flex items-center justify-center"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Detailed Description Section */}
                    <div className="max-w-8xl mx-auto">
                        <div className="bg-gradient-to-tr from-[#410f06] via-[#410f06] to-[#aa833f] backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                            <div className="flex flex-col lg:flex-row items-center gap-8">
                                <div className="lg:w-2/3">
                                    <div className="flex items-center gap-3 mb-6">
                                        <h3 className="text-2xl font-bold text-white">
                                            {roomsData.pageContent.whyChooseUs.title}
                                        </h3>
                                    </div>
                                    <div className="space-y-4">
                                        <p className="text-lg leading-relaxed text-white mb-2">
                                            {roomsData.pageContent.whyChooseUs.description}
                                        </p>
                                        {roomsData.pageContent.whyChooseUs.points.map((point, index) => (
                                            <p key={index} className="text-lg leading-relaxed text-white">
                                                {point}
                                            </p>
                                        ))}
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                                        {roomsData.pageContent.features.map((feature, index) => {
                                            const IconComponent = iconMap[feature.icon] || Sparkles;
                                            return (
                                                <div key={index} className="text-center">
                                                    <div className="w-14 h-14 bg-gradient-to-br from-[#aa833f] to-[#aa833f] rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                                                        <IconComponent className="w-7 h-7 text-white" />
                                                    </div>
                                                    <h5 className="text-white mb-2">{feature.title}</h5>
                                                    <p className="text-sm text-white">
                                                        {feature.description}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="lg:w-1/3">
                                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-amber-100">
                                        <h4 className="text-xl font-bold text-gray-900 mb-4">
                                            Special Offer
                                        </h4>
                                        <div className="space-y-3">
                                            {roomsData.pageContent.offers.map((offer, index) => (
                                                <div key={index} className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                                                    <span className="font-medium text-gray-700">{offer.title}</span>
                                                    <span className="font-bold text-amber-600">{offer.discount}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <button
                                            onClick={() => {
                                                setSelectedRoom({
                                                    title: "Special Offer",
                                                    price: 0,
                                                    type: "Package"
                                                });
                                                setIsModalOpen(true);
                                            }}
                                            className="w-full mt-6 bg-gradient-to-r from-[#aa833f] to-[#aa833f] text-white py-3 rounded font-semibold hover:from-gray-800 hover:to-gray-700 transition-all duration-300 shadow-lg"
                                        >
                                            Enquire Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <EnquiryModal
                isOpen={isModalOpen}
                title={selectedRoom.title}
                price={selectedRoom.price}
                roomType={selectedRoom.type}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}