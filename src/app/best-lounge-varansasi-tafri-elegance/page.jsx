import React from 'react';
import ImageComponent from './ImageComponent';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
async function getTafriLoungeImages() {
    try {
        const res = await fetch(
            'https://www.inforbit.in/demo/hotel-elegance-backend/api/tafri-lounge-image',            
        );

        if (!res.ok) {
            throw new Error(`Failed to fetch Tafri Lounge images: ${res.status}`);
        }
        return await res.json();
    } catch (error) {
        console.error('Error fetching Tafri Lounge images:', error);
        return null;
    }
}

export async function generateMetadata() {
    try {
        const data = await getTafriLoungeImages();

        if (!data?.status) {
            return {
                title: 'Tafri Lounge - Hotel Elegance',
                description: 'Best lounge in Varanasi near BHU for chilling and relaxation',
            };
        }

        return {
            title: 'Tafri Lounge by Elegance - Best Lounge in Varanasi',
            description: 'Experience the best lounge in Varanasi near BHU. Tafri Lounge by Hotel Elegance offers vibrant atmosphere, music, and drinks.',
        };
    } catch (error) {
        return {
            title: 'Tafri Lounge - Hotel Elegance',
            description: 'Premium lounge experience in Varanasi',
        };
    }
}

export default async function TafriLoungePage() {
    const imagesData = await getTafriLoungeImages();
    return (
        <>
            <Breadcrumb 
                title="Tafri Lounge by Elegance" 
                backgroundImage="/assets/dev-img/bread-banner/Taffri.jpg"
                subtitle=""
            />
            <section className="section-menu padding-t-50 padding-b-50">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-12 aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <div className="rx-banner text-center rx-banner-effects">
                                <p>
                                    <img alt="banner-left-shape" className="svg-img left-side"
                                        src="assets/img/banner/left-shape.svg"
                                    />
                                    One of Top Places to Chill in Banaras
                                    <img alt="banner-right-shape" className="svg-img right-side" src="assets/img/banner/right-shape.svg"
                                    />
                                </p>
                                <h1>
                                    Best Lounge in Varanasi Tafri by Elegance near BHU
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-minus-24 mt-3">
                        <div
                            className="col-lg-4 col-12 mb-24 aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <div className="rx-about-img">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-purple-600/20 mix-blend-overlay z-10" />
                                    <div className="aspect-[9/16] md:aspect-[4/5] bg-black">
                                        <iframe
                                            className="absolute inset-0 w-full h-full"
                                            src="https://www.youtube.com/embed/v_HL8E9EpA8?rel=0&controls=0&autoplay=1&mute=1&loop=1&playlist=v_HL8E9EpA8"
                                            title="Hotel Elegance Video Intro"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-8 col-12 mb-24 aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                        >
                            <div className="bg-gradient-to-tr from-[#410f06] via-[#410f06] to-[#aa833f] backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50">
                                <div className="tafri-content text-justify text-white">
                                    <p className="text-white">
                                        Welcome to the newest hotspot in Varanasi, the exquisite Tafri Lounge at The Elegance Hotel. Nestled within one of the city's top 10 hotels, our lounge offers an unparalleled experience for locals and visitors alike. Whether you're looking to unwind after a long day or celebrate a special occasion, our stylish and vibrant atmosphere is the perfect setting.
                                    </p>
                                    <div className="border-b border-gray-300 w-full h-px my-2.5" />
                                    <p className="mt-2 text-white">
                                        Tafri Lounge by Elegance is designed to cater to all ages, ensuring a safe and welcoming environment for everyone. Enjoy an eclectic mix of music that sets the perfect mood, from soothing melodies to lively beats that get you dancing. Our talented DJs and live bands are sure to keep you entertained all night long.
                                    </p>
                                    <div className="border-b border-gray-300 w-full h-px my-2.5" />
                                    <p className="mt-2 text-white">
                                        We pride ourselves on our extensive drink menu, featuring a wide variety of cocktails, spirits, wines, and non-alcoholic beverages to satisfy every palate. Our skilled bartenders are masters of their craft, creating both classic and innovative drinks that will delight your senses.
                                    </p>
                                    <div className="border-b border-gray-300 w-full h-px my-2.5" />
                                    <p className="mt-2 text-white">
                                        Join a crowd of friendly and dynamic individuals, making every visit a memorable experience. Whether you're here to relax with friends, meet new people, or simply enjoy the ambiance, Tafri Lounge at The Elegance Hotel promises a good time for all. Come and be a part of the most happening scene in Varanasi!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ImageComponent imagesData={imagesData} />
        </>
    )
}
