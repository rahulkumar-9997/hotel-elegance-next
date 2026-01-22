import React from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import { LeftShapeSVG, RightShapeSVG } from '@/components/SVG/BannerShapes';
async function getFacilitiesData() {
    try {
        const res = await fetch(
            'https://www.inforbit.in/demo/hotel-elegance-backend/api/facilities',{
                next: { revalidate: 10 }
            }
        );
        if (!res.ok) {
            throw new Error(`Failed to fetch facilities data: ${res.status}`);
        }
        return await res.json();
    } catch (error) {
        console.error('Error fetching facilities:', error);
        return null;
    }
}

export async function generateMetadata() {
    try {
        const data = await getFacilitiesData();       
        return {
            title: 'Hotel Facilities at The Elegance Varanasi | Comfort Assured',
            description: `Explore modern hotel facilities at The Elegance Varanasi. From comfort to convenience, everything is designed for a relaxing stay and events.`,
        };
    } catch (error) {
        return {
            title: 'Hotel Facilities at The Elegance Varanasi | Comfort Assured',
            description: `Explore modern hotel facilities at The Elegance Varanasi. From comfort to convenience, everything is designed for a relaxing stay and events.`,
        };
    }
}

export default async function FacilitiesPage() {
    const facilitiesData = await getFacilitiesData();
    const facilities = facilitiesData?.data?.facilities || [];

    return (
        <>
            <Breadcrumb 
                title="Facilities" 
                backgroundImage="/assets/dev-img/bread-banner/Facilities.jpg"
                mobileBackgroundImage="/assets/dev-img/bread-banner/mobile/Facilities.jpg"
                subtitle=""
            />
            <section className="services-section-2 section-menu padding-t-50 padding-b-50">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="services-left-content sticky">
                                <div className="rx-banner rx-banner-effects facilities-banner-d">
                                    <p>
                                        <LeftShapeSVG />
                                        Facilities
                                        <RightShapeSVG />
                                    </p>
                                    <h1>
                                        Best Boutique Hotel in Varanasi
                                    </h1>
                                    <p className="mt-2">We're dedicated to helping you achieve and maintain beautiful, healthy eye. Trust us to provide exceptional care tailored to you. Personalized, compassionate car</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            {/* Display only API data - no default fallback */}
                            {facilities.length > 0 ? (
                                facilities.map((facility, index) => (
                                    <div
                                        key={facility.id}
                                        className="services-item bg-gradient-to-r from-[#410f06] via-[#410f06] to-[#aa833f] backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50 mb-6"
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                        data-aos-delay={`${(index % 3) * 100}`}
                                    >
                                        <div className="services-image">
                                            <a href="#">
                                                <figure className="image-anime">
                                                    <Image
                                                        src={facility.image_url}
                                                        alt={facility.title}
                                                        loading="lazy"
                                                        width={250}
                                                        height={200}
                                                        sizes='100'
                                                    />
                                                </figure>
                                            </a>
                                        </div>
                                        <div className="services-content">
                                            <div className="services-content-text">
                                                <h3 className="services-title line-anime">
                                                    <a href="#">{facility.title}</a>
                                                </h3>
                                                <p>
                                                    {facility.short_desc}
                                                </p>
                                            </div>
                                            {/* <div className="services-button-wapper">
                                                <a
                                                    href="#"
                                                    className="theme-button style-1"
                                                    aria-label={`View ${facility.title}`}
                                                >
                                                    View Services
                                                </a>
                                            </div> */}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-10">
                                    <div className="text-gray-600">
                                        <p>Facilities information is currently unavailable.</p>
                                        <p className="mt-2">Please check back later or contact us for more information.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
