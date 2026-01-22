import { Flyers } from "./Flyers";
import { Suspense } from 'react';
async function getFlyersUrl() {
    try {
        const res = await fetch(
            "https://www.inforbit.in/demo/hotel-elegance-backend/api/flyers-home", {
                next: { revalidate: 10 }
            }
        );

        if (!res.ok) {
            throw new Error(`Failed to fetch flyers. Status: ${res.status}`);
        }

        const data = await res.json();

        if (data && data.status && data.data) {
            return data.data;
        }

        throw new Error("Flyers data not found");
    } catch (error) {
        console.error("Flyers API fetch error:", error);
        return null;
    }
}
function FlyersSkeleton() {
    return (
        <section className="feature-four other-hotel-section">
            <div
                className="feature-four__bg jarallax"
                data-jarallax=""
                data-speed="0.1"
                data-imgposition="50% -100%"
                style={{ backgroundImage: "url(assets/dev-img/feature-bg-1-1.webp)" }}
            ></div>
            <div className="overlay" />
            <div className="container">
                <div className="row justify-content-md-center">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="col-lg-4 mb-4">
                            <div className="other-hotel">
                                <div className="other-hotels-container skeleton">
                                    <div className="skeleton-image rounded-lg"
                                        style={{ height: '300px', width: '100%' }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default async function FlyersWrapper() {
    const flyersData = await getFlyersUrl();
    return (
        <Suspense fallback={<FlyersSkeleton />}>
            <Flyers initialFlyers={flyersData} />
        </Suspense>
    );
}
