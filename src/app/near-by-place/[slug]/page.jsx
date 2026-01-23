import React from 'react';
import 'aos/dist/aos.css';
import NearByPlaceDetailsPage from './NearByPlaceDetailsPage';

async function getNearByPlaceDetails(slug) {
    try {
        const res = await fetch(
            `https://www.inforbit.in/demo/hotel-elegance-backend/api/near-by-pace-list/${slug}`
        );
        if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.status}`);
        }
        return await res.json();
    } catch (error) {
        console.error('Error fetching data:', error.message);
        return null;
    }
}
export async function generateMetadata({ params }) {
    try {
        const { slug } = await params;
        const data = await getNearByPlaceDetails(slug);
        if (!data?.status) {
            return {
                title: 'Place Not Found - Hotel Elegance',
            };
        }
        return {
            title: data.data.meta_title || `${data.data.title} - Hotel Elegance`,
            description: data.data.meta_description || data.data.short_desc,
        };
    } catch (error) {
        console.error('Error in generateMetadata:', error);
        return {
            title: 'Nearby Place - Hotel Elegance',
            description: 'Explore nearby places from Hotel Elegance',
        };
    }
}
export default async function page({ params }) {
    try {
        const { slug } = await params;
        const placeData = await getNearByPlaceDetails(slug);
        if (!placeData?.status) {
            return (
                <div className="section-blog-details padding-t-50 padding-b-100">
                    <div className="container">
                        <div className="text-center text-danger py-5">
                            <h4>Place not found</h4>
                            <p>Sorry, we couldn't find the place you're looking for.</p>
                            <p className="small text-muted mt-2">Slug: {slug}</p>
                        </div>
                    </div>
                </div>
            );
        }
        return <NearByPlaceDetailsPage initialData={placeData} />;
    } catch (error) {
        console.error('Error in Page component:', error);
        return (
            <div className="section-blog-details padding-t-50 padding-b-100">
                <div className="container">
                    <div className="text-center text-danger py-5">
                        <h4>Error Loading Page</h4>
                        <p>There was a problem loading the page. Please try again.</p>
                        <p className="small text-muted mt-2">{error.message}</p>
                    </div>
                </div>
            </div>
        );
    }
}