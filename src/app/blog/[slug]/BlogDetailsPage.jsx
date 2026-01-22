"use client";
import Image from "next/image";
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from "next/link";
export default function BlogDetailsPage({ blog }) {
    const router = useRouter();    
    const renderHTML = (htmlContent) => {
        return { __html: htmlContent };
    };
    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {
        });
        return () => {
            Fancybox.destroy();
        };
    }, []);
    const getAnimationDelay = (index) => {
        const delays = ['100', '200', '300', '400'];
        return delays[index % delays.length];
    };

    return (
        <section className="section-blog-details padding-t-50 padding-b-100">
            <div className="container">
                <div className="row de-flex justify-content-md-center mb-minus-24">
                    <div className="col-md-8 col-12 mb-24">
                        <div className="rx-blog-details">
                            <div className="rx-blog-details-cart">
                                {blog.featured_image && (
                                    <div className="blog-details-img">
                                        <Image
                                            src={blog.featured_image}
                                            alt={blog.title || "Blog Featured Image"}
                                            className="blog-de-image"
                                            width={400}
                                            height={250}
                                            sizes=""
                                            style={{ height: "400px", objectFit: "cover" }}
                                        />
                                    </div>
                                )}
                                <div className="blog-details-contact blog-single">
                                    <div className="blog_details mb-3 ttr-post-text blog-post-data">
                                        <h2 className="mt-2 mb-2">
                                            {blog.title}
                                        </h2>
                                        {blog.short_desc && (
                                            <p className="lead">
                                                {blog.short_desc}
                                            </p>
                                        )}
                                        {blog.content && (
                                            <div className="blog-content" dangerouslySetInnerHTML={renderHTML(blog.content)}
                                            />
                                        )}
                                    </div>
                                    <div className="blog_paragraphs mb-3 ">
                                        {blog.paragraphs && blog.paragraphs.map((paragraph, index) => (
                                            <div key={index} className="bg-gradient-to-tr from-[#f5f5f5] via-[#f5f5f5] to-[#f5f5f5] backdrop-blur-sm rounded p-2 border border-gray-700/50 mb-3">
                                                {paragraph.title && (
                                                    <h2 className="paragraphs-title">
                                                        {paragraph.title}
                                                    </h2>
                                                )}
                                                {paragraph.image && (
                                                    <div className="mt-3">
                                                        <div className="para-img featureCard__image ratio ratio-19:22 rounded-24 -hover-image-scale__image">
                                                            <Image
                                                            src={paragraph.image}
                                                            alt={paragraph.title || blog.title}
                                                            className="img-ratio paragraph-image rounded! mb-2" 
                                                            width={500}
                                                            height={300}
                                                            sizes="400px"                                                          
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                                {paragraph.content && (
                                                    <div className="paragraph-content mt-3 blog-post-data"
                                                        dangerouslySetInnerHTML={renderHTML(paragraph.content)}
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="row masonry-grid">
                                        {blog.images.length > 0 ? (
                                            blog.images.map((image, index) => (
                                                <div
                                                    key={image.id}
                                                    className="col-xl-4 col-lg-4 col-sm-6 col-12 mb-24 masonry-item"
                                                    data-aos="flip-left"
                                                    data-aos-duration={1000}
                                                    data-aos-delay={getAnimationDelay(index)}
                                                >
                                                    <div className="rx-gallery-card-two">
                                                        <a
                                                            className="rx-gallery-img block overflow-hidden rounded-lg group relative"
                                                            href={image.image}
                                                            data-fancybox="gallery"
                                                            data-caption={image.alt || blog.title || `Gallery Image ${index + 1}`}
                                                        >
                                                            <Image
                                                                src={image.image}
                                                                alt={image.alt || blog.title || `Gallery Image ${index + 1}`}
                                                                width={300}
                                                                height={200}
                                                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                                                
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 mb-24">
                        <div className="rx-blog-details-sidebar">
                            <div className="rx-recent-post">
                                <h5 className="sub-title mb-3">Recent Posts</h5>
                                <div className="recent-inner-post">                                    
                                    {blog.recent_posts && blog.recent_posts.map((post) => (
                                    <div key={post.id} className="recent-post-cart">
                                       <Link href={`/blog/${post.slug}`} className="recent-link d-flex align-items-center gap-2">
                                            <div className="post-img">
                                                {post.image_url ? (
                                                    <Image
                                                        src={post.image_url}
                                                        alt={post.title}
                                                        width={100}
                                                        height={100}
                                                    />
                                                ) : (
                                                    <img 
                                                        src="assets/img/blog/placeholder.jpg" 
                                                        alt={post.title}
                                                    />
                                                )}
                                            </div>
                                            <div className="post-contact">
                                                <h4> 
                                                    {post.title?.slice(0, 40)}...
                                                </h4>
                                                <p className="text-black line-clamp-1">
                                                    {post.short_desc?.slice(0, 30)}...
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                    ))}
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}