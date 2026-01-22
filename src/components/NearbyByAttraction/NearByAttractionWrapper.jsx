async function getNearByAttractionUrl() {
    try {
        const res = await fetch(
            "https://www.inforbit.in/demo/hotel-elegance-backend/api/attraction-home",{ 
                next: { revalidate: 10 } 
            }            
        );
        if (!res.ok) {
            throw new Error(`Failed to fetch attractions. Status: ${res.status}`);
        }
        const data = await res.json();

        if (data && data.data) {
            return data.data;
        }

        throw new Error("Attractions data not found");
    } catch (error) {
        console.error("Api data fetch error:", error);
        return null;
    }
}

import { NearbyByAttraction } from "./NearbyByAttraction";
import { Suspense } from 'react';
function NearbyAttractionSkeleton() {
    return (
        <section className="section-contact padding-t-50 padding-b-100 home-map-bg">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="rx-contact-form">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-12 mb-24">
                                    <div className="home-map skeleton">
                                        <div className="skeleton-map"></div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12 mb-24 align-items-center">
                                    <div className="near-by-attraction">
                                        <div className="near-by-title">
                                            <div className="skeleton-title"></div>
                                        </div>
                                        <div className="near-by-attraction-slider">
                                            <div className="skeleton-carousel">
                                                {[1, 2, 3, 4].map((i) => (
                                                    <div key={i} className="skeleton-slide">
                                                        <div className="skeleton-image"></div>
                                                        <div className="skeleton-text"></div>
                                                    </div>
                                                ))}
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
    );
}

export default async function NearByAttractionWrapper() {
    const attractionData = await getNearByAttractionUrl();
    return (
        <Suspense fallback={<NearbyAttractionSkeleton />}>
            <NearbyByAttraction initialAttractions={attractionData} />
        </Suspense>
    );
}