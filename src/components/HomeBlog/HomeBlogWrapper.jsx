import { Suspense } from 'react';
import { HomeBlog } from './HomeBlog';
const HomeBlogSkeleton = () => {
    return (
        <section className="section-spa padding-tb-50">
            <div className="container">
                <div className="row mb-minus-24">
                    <div className="col-12">
                        <div className="rx-banner text-center rx-banner-effects">
                            <div className="skeleton-banner-title" style={{
                                height: '24px',
                                width: '200px',
                                margin: '0 auto 10px',
                                borderRadius: '4px'
                            }}></div>
                            <div className="skeleton-banner-subtitle" style={{
                                height: '20px',
                                width: '150px',
                                margin: '0 auto',
                                borderRadius: '4px'
                            }}></div>
                        </div>
                    </div>

                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="col-xl-3 col-lg-4 col-sm-6 mb-24">
                            <div className="rx-spa-card">
                                <div className="spa-img skeleton">
                                    <div style={{
                                        height: '200px',
                                        width: '100%',
                                        borderRadius: '8px 8px 0 0'
                                    }}></div>
                                </div>
                                <div className="spa-contact">
                                    <div className="skeleton-text" style={{
                                        height: '16px',
                                        width: '60%',
                                        marginBottom: '10px',
                                        borderRadius: '4px'
                                    }}></div>
                                    <div className="skeleton-title" style={{
                                        height: '20px',
                                        width: '80%',
                                        marginBottom: '15px',
                                        borderRadius: '4px'
                                    }}></div>
                                    <div className="skeleton-description">
                                        <div style={{
                                            height: '12px',
                                            width: '100%',
                                            marginBottom: '8px',
                                            borderRadius: '4px'
                                        }}></div>
                                        <div style={{
                                            height: '12px',
                                            width: '90%',
                                            marginBottom: '8px',
                                            borderRadius: '4px'
                                        }}></div>
                                        <div style={{
                                            height: '12px',
                                            width: '70%',
                                            borderRadius: '4px'
                                        }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
async function getHomeBlogData() {
    try {
        const res = await fetch(
            "https://www.inforbit.in/demo/hotel-elegance-backend/api/home-blog", {
                next: { revalidate: 10 },
            }
        );


        if (!res.ok) {
            throw new Error(`Failed to fetch blog data. Status: ${res.status}`);
        }
        const data = await res.json();
        if (data && data.data) {
            return data.data;
        }
        throw new Error("Blog data not found");
    } catch (error) {
        console.error("Blog data fetch error:", error);
        return null;
    }
}

export default async function HomeBlogWrapper() {
    const blogData = await getHomeBlogData();
    return (
        <Suspense fallback={<HomeBlogSkeleton />}>
            <HomeBlog initialBlogData={blogData} />
        </Suspense>
    );
}