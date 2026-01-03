"use client";
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { imageTosvg } from '@/utils/imageToSvg';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import EnquiryModal from '@/components/EnquiryModal/EnquiryModal';  
export default function RoomsPage() {
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
    return (
        <>
            <Breadcrumb 
                title="Rooms" 
                backgroundImage="/assets/dev-img/bread-banner/Rooms.jpg"
                subtitle=""
            />
            <section className="section-room padding-t-50 padding-b-50">
                <div className="container">
                    <div className="row mb-minus-24">                        
                        <div
                            className="col-lg-4 col-md-6 col-sm-12 col-12 mb-24"
                            data-aos="fade-up"
                            data-aos-duration={1000}
                        >
                            <div className="rx-rooms-box-2">
                                <div className="rx-rooms-img">
                                    <img src="assets/dev-img/room/suite-room.jpg" alt="room-4" />
                                    <div className="inner-back-side">
                                        <div className="sub-title">
                                            <h5>Suite Room</h5>
                                            <span className="rx-price">2500Rs / N</span>
                                        </div>
                                        <div className="inner-info">
                                            <ul>
                                                <li>Daily cleaning</li>
                                                <li>Room Service</li>
                                                <li>Housekeeping</li>
                                                <li>Wi-Fi &amp; Parking</li>
                                            </ul>
                                        </div>
                                        <div className="rx-button">
                                            <a className="rx-btn-one cursor-pointer"  
                                            onClick={() => {
                                                setTitle("Suite Room")
                                                setIsModalOpen(true)
                                                }}>
                                                Book Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-12 col-12 mb-24"
                            data-aos="fade-up"
                            data-aos-duration={1000}
                            data-aos-delay={200}
                        >
                            <div className="rx-rooms-box-2">
                                <div className="rx-rooms-img">
                                    <img src="assets/dev-img/room/premium-room.jpg" alt="room-5" />
                                    <div className="inner-back-side">
                                        <div className="sub-title">
                                            <h5>Premium Rooms</h5>
                                            <span className="rx-price">3000Rs. / N</span>
                                        </div>
                                        <div className="inner-info">
                                            <ul>
                                                <li>Daily cleaning</li>
                                                <li>Room Service</li>
                                                <li>Housekeeping</li>
                                                <li>Wi-Fi &amp; Parking</li>
                                            </ul>
                                        </div>
                                        <div className="rx-button">
                                            <a className="rx-btn-one cursor-pointer"  
                                            onClick={() => {
                                                setTitle("Premium Rooms")
                                                setIsModalOpen(true)
                                                }}>
                                                Book Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-12 col-12 mb-24"
                            data-aos="fade-up"
                            data-aos-duration={1000}
                            data-aos-delay={400}
                        >
                            <div className="rx-rooms-box-2">
                                <div className="rx-rooms-img">
                                    <img src="assets/dev-img/room/king-size-room.jpg" alt="room-6" />
                                    <div className="inner-back-side">
                                        <div className="sub-title">
                                            <h5>King Size Rooms</h5>
                                            <span className="rx-price">5000Rs. / N</span>
                                        </div>
                                        <div className="inner-info">
                                            <ul>
                                                <li>Daily cleaning</li>
                                                <li>Room Service</li>
                                                <li>Housekeeping</li>
                                                <li>Wi-Fi &amp; Parking</li>
                                            </ul>
                                        </div>
                                        <div className="rx-button">
                                            <a className="rx-btn-one cursor-pointer"  
                                            onClick={() => {
                                                setTitle("King Size Rooms")
                                                setIsModalOpen(true)
                                                }}>
                                                Book Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
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
