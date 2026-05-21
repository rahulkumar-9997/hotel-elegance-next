"use client";
import Link from "next/link";
import Image from "next/image";

export default function BlogList({ initialBlogData }) {
    if (!initialBlogData.length) {
        return <p>No blogs found.</p>;
    }
    return (
        <div className="row mb-minus-24">
            {initialBlogData.map((blog) => (
                <div key={blog.id} className="col-xl-3 col-lg-4 col-sm-6 mb-24">
                    <Link
                        href={`/blog/${blog.slug}`}
                        className="text-decoration-none"
                    >
                        <div className="rx-spa-card shadow-[0_0px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_0_25px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-20">
                            <div className="single-item d-grid gap-2 transition d-center">
                                <div className="spa-img position-relative image-file">
                                    <Image
                                        src={blog.featured_image}
                                        alt={blog.title}
                                        width={400}
                                        height={300}
                                        className="w-100 border-radius"
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
        </div>
    );
}
