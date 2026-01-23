async function getNearByPlaceUrl() {
    try {
        const res = await fetch(
            "https://www.inforbit.in/demo/hotel-elegance-backend/api/near-place-home"
        );
        if (!res.ok) {
            throw new Error(`Failed to fetch Near by place Status: ${res.status}`);
        }
        const data = await res.json(); 
        if (data && data.data) {
            return data.data;
        }
        console.log(data);
        throw new Error("Near by place not found");
    } catch (error) {
        console.error("Api data fetch error:", error);
        return [];
    }
}

import { NearByPlace } from "./NearByPlace";
import { Suspense } from 'react';
function NearByPlaceSkeleton() {
    return (
        <section className="section-spa padding-tb-50 near-by-place">
            <div className="container">
                <div className="row mb-minus-24">
                    <div className="col-12">
                        <div className="rx-banner text-center rx-banner-effects">
                            <p>
                                <img
                                    src="assets/img/banner/left-shape.svg"
                                    alt="banner-left-shape"
                                    className="svg-img left-side"
                                />
                                Nearby Places
                                <img
                                    src="assets/img/banner/right-shape.svg"
                                    alt="banner-right-shape"
                                    className="svg-img right-side"
                                />
                            </p>
                            <h4>
                                Explore Varanasi from <span>Hotel Elegance </span>
                            </h4>
                        </div>
                    </div>
                    {/* Skeleton cards */}
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="col-xl-3 col-lg-4 col-sm-6 mb-24">
                            <div className="rx-spa-card skeleton">
                                <div className="spa-img skeleton-img"></div>
                                <div className="spa-contact">
                                    <div className="skeleton-title"></div>
                                    <div className="skeleton-text"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default async function NearByPlaceWrapper() {
    const nearByPlaceData = await getNearByPlaceUrl();

    return (
        <Suspense fallback={<NearByPlaceSkeleton />}>
            <NearByPlace initialNearByPlace={nearByPlaceData} />
        </Suspense>
    );
}