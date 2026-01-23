// app/gallery/GalleryClient.js
'use client'
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';
import { useRouter } from 'next/navigation';
export default function AlbumGallery({ initialData, currentAlbumId }) {
    const router = useRouter();
    const [galleryData, setGalleryData] = useState(initialData);
    const [loadingAlbum, setLoadingAlbum] = useState(null);
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
        });
        if (galleryData?.data?.images?.length > 0) {
            Fancybox.bind("[data-fancybox='gallery']", {
                Thumbs: {
                    autoStart: true,
                },
                Toolbar: {
                    display: {
                        left: ["infobar"],
                        middle: ["zoomIn", "zoomOut", "toggle1to1", "rotateCCW", "rotateCW", "flipX", "flipY"],
                        right: ["slideshow", "download", "thumbs", "close"],
                    },
                },
                Images: {
                    zoom: true,
                    zoomOpacity: "auto",
                    click: "close",
                    wheel: "slide",
                },
            });
        }
        return () => {
            Fancybox.destroy();
        };
    }, [galleryData]);
    const handleAlbumClick = async (albumId) => {
        setLoadingAlbum(albumId);        
        try {
            const url = new URL(window.location);
            url.searchParams.set('album_id', albumId);
            router.push(url.toString());
            const response = await fetch(
                `https://www.inforbit.in/demo/hotel-elegance-backend/api/album-gallery?album_id=${albumId}`, { cache: "no-store" }   
            );            
            if (response.ok) {
                const newData = await response.json();
                setGalleryData(newData);
            }
        } catch (error) {
            console.error('Error loading album:', error);
        } finally {
            setLoadingAlbum(null);
        }
    };
    const getAnimationDelay = (index) => {
        const delays = [null, 200, 400, 600];
        return delays[index % 4];
    };
    if (!galleryData?.status) {
        return (
            <section className="section-gallery">
                <div className="container">
                    <div className="text-center py-20">
                        <p className="text-gray-600">Gallery data is currently unavailable.</p>
                    </div>
                </div>
            </section>
        );
    }
    const { albums, images, selected_album, total_images } = galleryData.data;
    return (
        <section className="section-gallery">
            <div className="container">
                <div className="gallery-masonry-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mb-10">
                                <div className="gallery-button">
                                    {albums.map((album) => (
                                        <button
                                            key={album.id}
                                            onClick={() => handleAlbumClick(album.id)}
                                            disabled={loadingAlbum === album.id || album.is_active}
                                            className={`rounded px-3 py-2.5 text-base font-semibold transition-all ${
                                                album.is_active 
                                                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white' 
                                                    :'rounded px-6 py-2.5 text-sm font-semibold bg-gradient-to-r bg-amber-900 text-white '
                                            } ${loadingAlbum === album.id ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        >
                                            {loadingAlbum === album.id ? (
                                                <span className="flex items-center gap-2">
                                                    <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                                                    Loading...
                                                </span>
                                            ) : (
                                                album.title
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row masonry-grid">
                        {images.length > 0 ? (
                            images.map((image, index) => (
                                <div
                                    key={image.id}
                                    className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-24 masonry-item"
                                    data-aos="flip-left"
                                    data-aos-duration={1000}
                                    data-aos-delay={getAnimationDelay(index)}
                                >
                                    <div className="rx-gallery-card-two">
                                        <a
                                            className="rx-gallery-img block overflow-hidden rounded-lg group"
                                            href={image.image_url}
                                            data-fancybox="gallery"
                                            data-caption={image.title || `Gallery Image ${index + 1}`}
                                        >
                                            <img
                                                src={image.image_url}
                                                alt={image.title || `Gallery Image ${index + 1}`}
                                                loading="lazy"
                                                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                                <i className="fas fa-search-plus text-white text-2xl"></i>
                                            </div>
                                        </a>
                                       
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-12">
                                <div className="text-center py-10">
                                    <p className="text-gray-600">No images available for this album.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}