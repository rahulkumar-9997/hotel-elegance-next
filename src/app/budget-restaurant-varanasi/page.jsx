"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { imageTosvg } from '@/utils/imageToSvg';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
export default function RestaurantPage() {
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
            <Breadcrumb 
                title="Restaurant" 
                backgroundImage="/assets/dev-img/bread-banner/best-restaurant-varanasi-elegance.jpeg"
                mobileBackgroundImage="/assets/dev-img/bread-banner/mobile/resturant.jpg"
                subtitle=""
            />
            {/* Menu */}
            <section className="section-menu padding-b-50">
                <div className="container">
                    <div className="row">
                        <div className="col-12" data-aos="fade-up" data-aos-duration={1000}>
                            <div className="rx-banner text-center rx-banner-effects">
                                <p>
                                    <img
                                        src="assets/img/banner/left-shape.svg"
                                        alt="banner-left-shape"
                                        className="svg-img left-side"
                                    />
                                    Urban Chaupal
                                    <img
                                        src="assets/img/banner/right-shape.svg"
                                        alt="banner-right-shape"
                                        className="svg-img right-side"
                                    />
                                </p>
                                <h1>
                                    Best Indian Restaurant in Varanasi by  <span>Hotel Elegance</span>
                                </h1>
                            </div>
                        </div>
                        <div
                            className="col-12"
                            data-aos="fade-up"
                            data-aos-duration={1000}
                            data-aos-delay={200}
                        >
                            <div className="tab-content rx-menutab">
                                <div
                                    className="tab-pane fade show active"
                                    id="starters"
                                    role="tabpanel"
                                    aria-labelledby="starters-tab"
                                >
                                    <div className="row mb-minus-24 rx-relative">
                                        <div className="col-md-6 col-12 mb-24">
                                            <div className="rx-menu-tabs-contact">
                                                <div className="inner-menu active-menu">
                                                    <div className="sub-contact">
                                                        <h5>Unmatched Pampering at Elegance</h5>
                                                        <p>
                                                            Experience unparalleled luxury as we strive to pamper you at every step. Our pride lies in the exquisite Urban Chaupal Restaurant, a signature dining experience at Hotel Elegance, promising an unforgettable culinary journey.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="inner-menu">
                                                    <div className="sub-contact">
                                                        <h5>A Haven for Multi Cuisine Lovers</h5>
                                                        <p>
                                                            Urban Chaupal in Varanasi is a hidden gem, renowned for its unparalleled Multi cuisine. A paradise for food lovers with Vegetarian & Non Vegetarian options, from Indian, Mughlai, Chinese & Continental Cuisines, with captivating interiors, it offers a unique and delightful dining experience.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="inner-menu">
                                                    <div className="sub-contact">
                                                        <h5>Casual Elegance, Timeless Taste</h5>
                                                        <p>
                                                            Urban Chaupal's casual yet classy ambiance invites repeat visits, showcasing unbeatable cuisine crafted by dedicated chefs. Indulge in a gastronomic adventure with delectable Indian and global dishes.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="inner-menu">
                                                    <div className="sub-contact">
                                                        <h5>Capture Moments of Delight</h5>
                                                        <p>Indulge in Urban Chaupal's enchanting ambiance, capturing picturesque moments for a visual delight on social media. Come, savor, and create lasting memories with every delectable bite!</p>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row mb-minus-24 rx-side-menu-image">
                                                <div className="col-lg-6 col-12 mb-24">
                                                    <div className="inner-img radius-one">
                                                        <img src="assets/dev-img/restaurant/Unmatched-Pampering-at-Elegance.jpg" alt="menu-1" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                    <div className="inner-img radius-two">
                                                        <img src="assets/dev-img/restaurant/A-Haven-for-Indian-Cuisine-Lovers.jpg" alt="menu-2" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                    <div className="inner-img radius-three">
                                                        <img src="assets/dev-img/restaurant/Casual-Elegance-Timeless-Taste.jpg" alt="menu-3" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                    <div className="inner-img radius-four">
                                                        <img src="assets/dev-img/restaurant/Capture-Moments-of-Delight.jpg" alt="menu-4" />
                                                    </div>
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
        </>

    )
}
