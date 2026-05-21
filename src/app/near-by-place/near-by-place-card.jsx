'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
export function NeatByPlaceListPage({ initialNearByPlace }) {
    const [nearByPlaces, setNearByPlaces] = useState(initialNearByPlace || []);
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
            easing: 'ease-in-out',
        });
        AOS.refresh();
    }, [nearByPlaces]);
    const getAOSProps = (delay = 0) => ({
        'data-aos': 'fade-up',
        'data-aos-delay': delay,
        'data-aos-duration': 800,
    });
    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb
                title="Near By Places"
                backgroundImage="/assets/dev-img/bread-banner/Rooms.jpg"
                mobileBackgroundImage="/assets/dev-img/bread-banner/mobile/Rooms.jpg"
                subtitle=""
            />
            <section className="section-spa padding-tb-50 near-by-place">
                <div className="container">
                    <div className="row mb-minus-24">
                        {nearByPlaces.map((place, index) => (
                            <div
                                key={place.id}
                                className="col-xl-3 col-lg-4 col-sm-6 mb-24"
                                {...getAOSProps(index * 200)}                            >
                                <div className="rx-spa-card shadow-[0_0px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_0_25px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-20">
                                    <Link href={`/near-by-place/${place.slug}`}>
                                        <div className="spa-img">
                                            <img
                                                src={place.image_url}
                                                alt={place.title}
                                                className="w-full object-cover"
                                                onError={(e) => {
                                                    e.target.src = 'assets/img/placeholder-image.jpg';
                                                }}
                                            />
                                        </div>
                                        <div className="spa-contact p-4">
                                            <h4 className="text-lg font-bold mb-2">{place.title}</h4>
                                            <p className="text-gray-600 text-sm">{place.short_desc}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}