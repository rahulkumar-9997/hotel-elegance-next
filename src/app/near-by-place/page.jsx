"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { imageTosvg } from '@/utils/imageToSvg';
import Image from 'next/image';

export default function NeatByPlaceListPage() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
        });

        if (typeof window !== 'undefined') {
            imageTosvg();
        }
    }, []);

    return (
        <>
            {/* Breadcrumb */}
            <section className="section-breadcrumb">
                <div className="rx-breadcrumb-image">
                    <div className="rx-breadcrumb-overlay" />
                    <div className="inner-breadcrumb-contact sub_header_content">
                        <div className="main-breadcrumb-contact">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="rx-banner-contact">
                                            <h2>Near By Place</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-blog-details padding-t-50 padding-b-100">
                <div className="container">
                    <div className="row mb-minus-24">
                        <div
                            className="col-lg-8 col-12 mb-24"
                            data-aos="fade-up"
                            data-aos-duration={1000}
                            data-aos-delay={200}
                        >
                            <div className="rx-blog-details">
                                <div className="rx-blog-details-cart">
                                    <div className="blog-details-img">
                                        <img src="assets/img/blog-details/1.jpg" alt="details-1" />
                                    </div>
                                    <div className="blog-details-contact">
                                        <span>June 28, 2024 - Restaurant</span>
                                        <h4>
                                            <a href="blog-details.html">
                                                Best way to solve business deal issue in market.
                                            </a>
                                        </h4>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                                            veritatis labore, amet mollitia velit, ipsam repudiandae est
                                            dolorum doloribus architecto obcaecati recusandae quia inventore
                                            voluptatem eligendi temporibus voluptas, neque modi!
                                        </p>
                                        <p>
                                            Totam veritatis labor amet mollitia velit, ipsam repudiandae est
                                            dolorum doloribus architecto obcaecati recusandae quia inventore
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            voluptatem eligendi temporibus voluptas, neque modi!
                                        </p>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12 mb-24">
                                                <img src="assets/img/blog-details/2.jpg" alt="details-2" />
                                            </div>
                                            <div className="col-lg-6 col-md-12 mb-24">
                                                <img src="assets/img/blog-details/3.jpg" alt="details-3" />
                                            </div>
                                        </div>
                                        <p>
                                            here are many variations of passages of Lorem Ipsum available,
                                            but the majority have suffered alteration in some form, by
                                            injected humour, or randomised words which don't look even
                                            slightly believable. If you are going to use a passage of Lorem
                                            Ipsum, you need to be sure there isn't anything embarrassing
                                            hidden in the middle of text. All the Lorem Ipsum generators on
                                            the Internet tend to repeat predefined chunks as necessary,
                                            making this the first true generator on the Internet. It uses a
                                            dictionary of over 200 Latin words, combined with a handful of
                                            model sentence structures, to generate Lorem Ipsum which looks
                                            reasonable. The generated Lorem Ipsum is therefore always free
                                            from repetition, injected humour, or non-characteristic words
                                            etc.
                                        </p>
                                        <p>
                                            The standard chunk of Lorem Ipsum used since the 1500s is
                                            reproduced below for those interested. Sections 1.10.32 and
                                            1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                                            reproduced in their exact original form
                                        </p>
                                        <div className="pagination">
                                            <ul>
                                                <li>
                                                    <a href="javascript:void(0)">Previous</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">Next</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-12 mb-24"
                            data-aos="fade-up"
                            data-aos-duration={1000}
                        >
                            <div className="rx-blog-details-sidebar">

                                <div className="rx-recent-post">
                                    <h5 className="sub-title">Recent Posts</h5>
                                    <div className="recent-inner-post">
                                        <div className="recent-post-cart">
                                            <div className="post-img">
                                                <img src="assets/img/blog/1.jpg" alt="blog-1" />
                                            </div>
                                            <div className="post-contact">
                                                <span>June 28, 2024 - Restaurant</span>
                                                <h4>
                                                    <a href="blog-details.html">
                                                        Best way to solve business deal issue in market.
                                                    </a>
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="recent-post-cart">
                                            <div className="post-img">
                                                <img src="assets/img/blog/2.jpg" alt="blog-2" />
                                            </div>
                                            <div className="post-contact">
                                                <span>June 30, 2026 - Gym</span>
                                                <h4>
                                                    <a href="blog-details.html">
                                                        Marketing Guide 5 steps to Success.
                                                    </a>
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="recent-post-cart">
                                            <div className="post-img">
                                                <img src="assets/img/blog/3.jpg" alt="blog-1" />
                                            </div>
                                            <div className="post-contact">
                                                <span>June 16, 2026 - Spa</span>
                                                <h4>
                                                    <a href="blog-details.html">
                                                        Best Way to solve Business deal.
                                                    </a>
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="recent-post-cart">
                                            <div className="post-img">
                                                <img src="assets/img/blog/4.jpg" alt="blog-1" />
                                            </div>
                                            <div className="post-contact">
                                                <span>June 10, 2025 - Golf</span>
                                                <h4>
                                                    <a href="blog-details.html">
                                                        customer service stats know in 2019.
                                                    </a>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}