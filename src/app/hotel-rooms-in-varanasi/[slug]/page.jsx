"use client";
import React, { useEffect, useState } from 'react';
import { useParams, notFound } from 'next/navigation';
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
    Sparkles,
    ArrowLeft,
    CheckCircle,
    Clock,
    Maximize,
    ChevronLeft,
    ChevronRight,
    X,
    Star,
    Heart,
    MapPin,
    Phone,
    Mail,
    Calendar,
    User,
    CreditCard,
    Key,
    Bath as BathIcon,
    Droplets,
    Wind as Fan,
    Square,
    Users as UsersIcon,
    Shield,
    Battery,
    Home,
    Eye,
    Sunrise
} from 'lucide-react';
import { getRoomBySlug, roomsData, getIconComponent, getOtherRooms } from '@/data/roomsData';

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
    Sparkles: Sparkles,
    Droplets: Droplets,
    Home: Home,
    Phone: Phone,
    Sunrise: Sunrise
};

export default function RoomDetailPage() {
    const params = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(0);
    const [room, setRoom] = useState(null);
    const [activeTab, setActiveTab] = useState('overview');
    const [otherRooms, setOtherRooms] = useState([]);
    const [showLightbox, setShowLightbox] = useState(false);
    useEffect(() => {
        const foundRoom = getRoomBySlug(params.slug);
        if (!foundRoom) {
            notFound();
        }
        setRoom(foundRoom);
        setOtherRooms(getOtherRooms(params.slug));

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
    }, [params.slug]);

    if (!room) return null;

    const handleBookNow = () => {
        setIsModalOpen(true);
    };

    const roomFeatures = [
        { icon: <Square className="w-5 h-5" />, label: "Room Size", value: room.size },
        { icon: <UsersIcon className="w-5 h-5" />, label: "Max Guests", value: room.occupancy },
        { icon: <Bed className="w-5 h-5" />, label: "Bed Type", value: room.bedType || "King Size" },
        { icon: <BathIcon className="w-5 h-5" />, label: "Bathroom", value: room.bathroomType || "Private" },
        { icon: <Wind className="w-5 h-5" />, label: "Air Conditioning", value: "Yes" },
        { icon: <Eye className="w-5 h-5" />, label: "View", value: room.view || "City View" }
    ];

    const policies = roomsData.pageContent.policies.map((policy, index) => {
        const icons = [Clock, User, CreditCard, Key, Shield, Battery];
        const IconComponent = icons[index] || Clock;
        return {
            icon: <IconComponent className="w-4 h-4" />,
            text: policy
        };
    });

    return (
        <>
            <Breadcrumb
                title={`${room.title}`}
                backgroundImage={room.image}
                subtitle=""
            />
            <section className="py-12 bg-gradient-to-b from-white to-gray-50">
                <div className="container">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-2">
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-2">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="px-4 py-2 bg-gradient-to-r from-[#aa833f] to-[#aa833f] rounded-full">
                                            <span className="text-white font-semibold text-sm">
                                                {room.subtitle}
                                            </span>
                                        </div>                                        
                                    </div>
                                    <h2 className="text-2xl md:text-5xl font-serif font-bold mb-3">
                                        {room.title}
                                    </h2>
                                    <div className="flex items-center gap-4 text-gray-600">
                                        <span className="flex items-center gap-2">
                                            <MapPin className="w-5 h-5 text-[#aa833f]"/>
                                            5 min from Varanasi Junction
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <Heart className="w-5 h-5  text-[#aa833f]" />
                                            Most Popular Choice
                                        </span>
                                    </div>
                                </div>

                                <div className="lg:text-right">
                                    <div className="text-3xl font-bold text-[#000]">
                                        ₹{room.price.toLocaleString()}
                                        <span className="text-lg font-normal"> / night</span>
                                    </div>
                                    {/* <p className="mt-2">Including taxes & breakfast</p> */}
                                </div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2">
                                <div className="mb-8">
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-4 group">
                                        <img
                                            src={room.gallery[selectedImage]}
                                            alt={`${room.title} - View ${selectedImage + 1}`}
                                            className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                        <button
                                            onClick={() => setShowLightbox(true)}
                                            className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm text-gray-900 p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
                                        >
                                            <Maximize className="w-5 h-5" />
                                        </button>
                                        <div className="absolute bottom-6 left-6 text-white">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                                                    {selectedImage + 1} / {room.gallery.length}
                                                </div>
                                                <span className="text-sm">Photo Gallery</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-5 gap-3">
                                        {room.gallery.map((img, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setSelectedImage(index)}
                                                className={`relative rounded-xl overflow-hidden transition-all duration-300 rounded ${selectedImage === index ? 'ring-2 ring-[#410f06] scale-105' : 'opacity-70 hover:opacity-100'}`}
                                            >
                                                <img
                                                    src={img}
                                                    alt={`Thumbnail ${index + 1}`}
                                                    className="w-full h-24 object-cover"
                                                />
                                                {selectedImage === index && (
                                                    <div className="absolute inset-0 bg-amber-500/20"></div>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-white rounded-3xl shadow-xl p-3 mb-4">
                                    <h2 className="text-2xl font-serif font-bold text-gray-900 mb-3! flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-[#aa833f] to-[#aa833f] rounded-xl flex items-center justify-center">
                                            <Sparkles className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="text-2xl">Room Features & Specifications</span>
                                    </h2>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                        {roomFeatures.map((feature, index) => (
                                            <div key={index} className="bg-gray-50 p-2 rounded-xl hover:bg-amber-50 transition-all duration-300 group">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="text-[#aa833f]">
                                                        {feature.icon}
                                                    </div>
                                                    <span className="text-sm">
                                                        {feature.label}
                                                    </span>
                                                </div>
                                                <p className="text-lg font-semibold text-gray-900">{feature.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                                    <div className="border-b border-gray-200">
                                        <nav className="flex overflow-x-auto">
                                            {['overview', 'policies'].map((tab) => (
                                                <button
                                                    key={tab}
                                                    onClick={() => setActiveTab(tab)}
                                                    className={`px-4 py-3 font-bold text-2xl uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${activeTab === tab ? 'text-[#410f06] border-b-2 border-[#410f06] bg-amber-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
                                                >
                                                    {tab === 'overview' && 'Overview'}
                                                    {tab === 'policies' && 'Policies'}
                                                </button>
                                            ))}
                                        </nav>
                                    </div>
                                    <div className="p-4">
                                        {activeTab === 'overview' && (
                                            <div className="space-y-3">
                                                <h4 className="text-2xl font-serif font-bold mb-2">
                                                    Room Overview
                                                </h4>
                                                <div className="space-y-4 leading-relaxed">
                                                    {room.detailedDescription.map((paragraph, index) => (
                                                        <p key={index} className="text-lg mb-3!">{paragraph}</p>
                                                    ))}
                                                </div>                                                
                                            </div>
                                        )}

                                        {activeTab === 'policies' && (
                                            <div>
                                                <h4 className="text-2xl font-serif font-bold mb-2">
                                                    Hotel Policies
                                                </h4>
                                                <div className="space-y-2">
                                                    {policies.map((policy, index) => (
                                                        <div key={index} className="flex items-start gap-3 p-2 bg-gray-50 rounded-xl">
                                                            <div className="text-[#aa833f] mt-1">
                                                                {policy.icon}
                                                            </div>
                                                            <p className="text-gray-700">{policy.text}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Booking & Highlights */}
                            <div className="space-y-8 sticky top-24">
                                <div className="bg-gradient-to-tr from-[#410f06] via-[#410f06] to-[#aa833f] backdrop-blur-sm rounded-2xl shadow-2xl p-4">
                                    <h5 className="text-xl mb-3! text-white">Book This Room</h5>

                                    <div className="space-y-6">
                                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                            <div className="flex justify-between items-center">
                                                <span className="text-white">Total for 1 night</span>
                                                <span className="text-2xl font-bold text-white">₹{room.price.toLocaleString()}</span>
                                            </div>
                                            {/* <div className="text-sm text-gray-300 space-y-2">
                                                <div className="flex justify-between">
                                                    <span>Room Charges</span>
                                                    <span>₹{room.price.toLocaleString()}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Taxes & Fees</span>
                                                    <span>₹450</span>
                                                </div>
                                                <div className="flex justify-between border-t border-white/20 pt-2">
                                                    <span className="text-amber-300">Free Breakfast Included</span>
                                                    <span className="text-green-400">FREE</span>
                                                </div>
                                            </div> */}
                                        </div>
                                        <button
                                            onClick={() => handleBookNow(room)}
                                            className="flex-1 bg-gradient-to-tr from-[#aa833f] to-[#aa833f] text-white py-3 px-6 rounded font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl w-100"
                                        >
                                            Book Now
                                        </button>
                                    </div>
                                </div>

                                {/* Highlights Card */}
                                <div className="bg-white rounded-3xl shadow-xl p-4">
                                    <h5 className="text-xl mb-3!">
                                        Why Book This Room?
                                    </h5>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-xl">
                                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                            </div>
                                            <div>
                                                <h6 className="font-semibold mb-2">Best Location</h6>
                                                <p className="text-sm">5 minutes from Railway Station</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                                                <Calendar className="w-5 h-5 text-blue-500" />
                                            </div>
                                            <div>
                                                <h6 className="font-semibold mb-2">Flexible Booking</h6>
                                                <p className="text-sm">Free cancellation up to 24 hours</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                                                <ShieldCheck className="w-5 h-5 text-green-500" />
                                            </div>
                                            <div>
                                                <h6 className="font-semibold mb-2">Safe & Secure</h6>
                                                <p className="text-sm">24/7 security & surveillance</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Card */}
                                <div className="bg-gradient-to-tr from-[#410f06] via-[#410f06] to-[#aa833f] rounded-3xl shadow-xl p-4 border border-amber-100">
                                    <h5 className="text-xl mb-3! text-white">
                                        Need Assistance?
                                    </h5>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 p-2 bg-white rounded-xl shadow-sm">
                                            <div className="w-12 h-12 bg-[#aa833f] rounded-xl flex items-center justify-center">
                                                <Phone className="w-6 h-6 text-[#ffff]" />
                                            </div>
                                            <div>
                                                <p className="text-sm">Call us anytime</p>
                                                <p className="font-bold">
                                                    <a href={`tel:+91${roomsData.pageContent.contact.phone.replace(/\D/g, '')}`}>+91 {roomsData.pageContent.contact.phone}</a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 p-2 bg-white rounded-xl shadow-sm">
                                            <div className="w-12 h-12 bg-[#aa833f] rounded-xl flex items-center justify-center">
                                                <Mail className="-6 h-6 text-[#ffff]" />
                                            </div>
                                            <div>
                                                <p className="text-sm">Email us</p>
                                                <p className="font-bold">
                                                    <a href={`mailto:${roomsData.pageContent.contact.email}`}>{roomsData.pageContent.contact.email}</a>
                                                </p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             {showLightbox && (
                <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
                    <button
                        onClick={() => setShowLightbox(false)}
                        className="absolute top-6 right-6 text-white hover:text-amber-300 transition-colors duration-300"
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <button
                        onClick={() => setSelectedImage((prev) => (prev - 1 + room.gallery.length) % room.gallery.length)}
                        className="absolute left-6 text-white hover:text-amber-300 transition-colors duration-300"
                    >
                        <ChevronLeft className="w-10 h-10" />
                    </button>
                    <div className="max-w-6xl w-full">
                        <img
                            src={room.gallery[selectedImage]}
                            alt="Enlarged view"
                            className="w-full h-[70vh] object-contain rounded-lg"
                        />
                        <div className="text-center mt-4 text-white">
                            <p className="text-sm text-gray-300">
                                {selectedImage + 1} of {room.gallery.length} photos
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={() => setSelectedImage((prev) => (prev + 1) % room.gallery.length)}
                        className="absolute right-6 text-white hover:text-amber-300 transition-colors duration-300"
                    >
                        <ChevronRight className="w-10 h-10" />
                    </button>
                </div>
            )}
            <EnquiryModal
                isOpen={isModalOpen}
                title={room.title}
                price={room.price}
                roomType={room.subtitle}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}