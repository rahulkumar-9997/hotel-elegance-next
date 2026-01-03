"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Flyers = ({ initialFlyers = [] }) => {
    return (
        <section className="feature-four other-hotel-section">
            <div
                className="feature-four__bg jarallax"
                data-jarallax=""
                data-speed="0.1"
                data-imgposition="50% -100%"
                style={{ backgroundImage: "url(assets/dev-img/feature-bg-1-1.webp)" }}
            ></div>            
            <div className="container">                
                <div className="row justify-content-md-center">
                    {initialFlyers?.length > 0 &&
                    initialFlyers.map((flyer, index) => (
                    <div key={flyer.id}
                        className="col-lg-4 pb-3"                       
                    >
                        <div className="other-hotel">
                            <div className="other-hotels-container">
                                <a href={flyer.link || "https://www.instagram.com/theelegancehotel/"}>
                                    <img src={flyer.image_url} alt={`Instagram Flyer ${index + 1}`}/>
                                </a>
                            </div>
                        </div>
                    </div>
                    ))
                    }                    
                </div>
            </div>
        </section>
    )
}
