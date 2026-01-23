import React from 'react';
import AlbumGallery from './AlbumGallery';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';

async function getAlbumGallery(albumId = null) {
    try {
        let url = 'https://www.inforbit.in/demo/hotel-elegance-backend/api/album-gallery';
        if (albumId) {
            url += `?album_id=${albumId}`;
        }
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Failed to fetch gallery data: ${res.status}`);
        }
        return await res.json();
    } catch (error) {
        console.error('Error fetching gallery:', error);
        return null;
    }
}

export async function generateMetadata({ searchParams }) {
    try {
        const params = await searchParams;
        const albumId = params?.album_id || null;
        const data = await getAlbumGallery(albumId);

        if (!data?.status) {
            return {
                title: 'Inside The Elegance Varanasi | Hotel, Rooms & Events',
                description: 'Take a visual tour of The Elegance Varanasi. View hotel rooms, restaurant, banquet halls, and event spaces that define comfort and style.',
            };
        }

        return {
            title: `${data.data.selected_album.title} Gallery - Hotel Elegance`,
            description: `Browse ${data.data.total_images} images from our ${data.data.selected_album.title} gallery at Hotel Elegance Varanasi`,
        };
    } catch (error) {
        return {
            title: 'Inside The Elegance Varanasi | Hotel, Rooms & Events',
            description: 'Take a visual tour of The Elegance Varanasi. View hotel rooms, restaurant, banquet halls, and event spaces that define comfort and style.',
        };
    }
}

export default async function GalleryPage({ searchParams }) {
    const params = await searchParams;
    const albumId = params?.album_id || null;
    const galleryData = await getAlbumGallery(albumId);

    return (
        <>
            <Breadcrumb
                title="Gallery"
                backgroundImage="/assets/dev-img/bread-banner/elegance-best-hotel-varanasi.jpeg"
                mobileBackgroundImage="/assets/dev-img/bread-banner/mobile/Gallery.jpg"
                subtitle=""
            />
            <AlbumGallery
                initialData={galleryData}
                currentAlbumId={albumId}
            />
        </>
    );
}