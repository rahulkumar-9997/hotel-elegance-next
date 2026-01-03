import React from 'react';
import AlbumGallery from './AlbumGallery';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
async function getAlbumGallery(albumId = null) {
    try {
        let url = 'https://www.inforbit.in/demo/hotel-elegance-backend/api/album-gallery';
        if (albumId) {
            url += `?album_id=${albumId}`;
        }
        const res = await fetch(url, {
            cache: 'no-store'
        });
        if (!res.ok) {
            throw new Error(`Failed to fetch gallery data: ${res.status}`);
        }
        return await res.json();
    } catch (error) {
        console.error('Error fetching gallery:', error);
        return null;
    }
}

export async function generateMetadata() {
    try {
        const data = await getAlbumGallery();

        if (!data?.status) {
            return {
                title: 'Gallery - Hotel Elegance',
                description: 'Explore our gallery showcasing Hotel Elegance amenities, rooms, and facilities',
            };
        }
        return {
            title: `${data.data.selected_album.title} Gallery - Hotel Elegance`,
            description: `Browse ${data.data.total_images} images from our ${data.data.selected_album.title} gallery at Hotel Elegance Varanasi`,
        };
    } catch (error) {
        return {
            title: 'Gallery - Hotel Elegance',
            description: 'Photo gallery of Hotel Elegance Varanasi',
        };
    }
}

export default async function GalleryPage({ searchParams }) {
    const albumId = searchParams?.album_id || null;
    const galleryData = await getAlbumGallery(albumId);
    return (
        <>
            <Breadcrumb 
                title="Gallery" 
                backgroundImage="/assets/img/banner/banner.jpg"
                subtitle=""
            />
            <AlbumGallery
                initialData={galleryData}
                currentAlbumId={albumId}
            />
        </>
    );
}