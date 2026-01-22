import { Suspense } from 'react';
import NearByPlaceSkeleton from './NearByPlaceSkeleton';
import { NeatByPlaceListPage } from './near-by-place-card';
async function getNearByPlaceUrl() {
    try {
        const res = await fetch(
            "https://www.inforbit.in/demo/hotel-elegance-backend/api/near-by-pace-list", {
                next: { revalidate: 10 }
            }
        );
        if (!res.ok) {
            throw new Error(`Failed to fetch Near by places: ${res.status}`);
        }
        const data = await res.json();
        if (data && data.status && data.data) {
            return data.data;
        }
        throw new Error("Near by places data not found");
    } catch (error) {
        console.error("API data fetch error:", error);
        return [];
    }
}
export default async function NearByPlaceWrapper() {
    const nearByPlaceData = await getNearByPlaceUrl();
    return (
        <Suspense fallback={<NearByPlaceSkeleton />}>
            <NeatByPlaceListPage initialNearByPlace={nearByPlaceData} />
        </Suspense>
    );
}

