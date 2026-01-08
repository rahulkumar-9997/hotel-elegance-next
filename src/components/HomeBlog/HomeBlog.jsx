"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LeftShapeSVG, RightShapeSVG } from '../SVG/BannerShapes';
export const HomeBlog = ({ initialBlogData }) => {
    if (!initialBlogData || initialBlogData.length === 0) {
        return (
            <section className="section-spa padding-tb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="text-center">
                                <p>No blog posts available at the moment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    return (
        <section className="section-spa padding-b-50 home-blog-section pt-5">
            <div className="container">
                <div className="row mb-minus-24">
                    <div className="col-12">
                        <div className="rx-banner text-center rx-banner-effects">
                            <p>
                            <LeftShapeSVG />
                                Blogs
                            <RightShapeSVG />
                            </p>
                            <h4>
                                Special Features
                            </h4>
                        </div>
                    </div>

                    {initialBlogData.map((blog, index) => (
                        <div key={blog.id} className="col-xl-3 col-lg-4 col-sm-6 mb-24">
                            <Link href={`/blog/${blog.slug}`} className="text-decoration-none">
                                <div className="rx-spa-card">
                                    <div className="single-item d-grid gap-2 gap-md-2 transition d-center">
                                        <div className="spa-img img-area position-relative d-center image-file">
                                            <Image className="w-100 border-radius"
                                                src={blog.featured_image}
                                                alt={blog.title}
                                                width={400}
                                                height={300}
                                            />
                                        </div>
                                        <div className="spa-contact">
                                            <h4>{blog.title}</h4>
                                            <p className="mb-1 line-clamp-3">
                                                {blog.short_desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        
                    ))}
                    <div className="col-md-12 mb-3 mt-2 text-center">
                        <div className="text-center">
                            <Link href="/blog"  className="btn rx-btn-two rounded">View All Blogs</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};