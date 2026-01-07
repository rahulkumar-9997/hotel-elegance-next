"use client";
export default function BlogDetailsPage({ blog }) {
    const renderHTML = (htmlContent) => {
        return { __html: htmlContent };
    };
    return (
        <section className="section-blog-details padding-t-50 padding-b-100">
            <div className="container">
                <div className="row de-flex justify-content-md-center mb-minus-24">
                    <div className="col-md-10 col-12 mb-24">
                        <div className="rx-blog-details">
                            <div className="rx-blog-details-cart">
                                {blog.featured_image && (
                                    <div className="blog-details-img">
                                        <img
                                            src={blog.featured_image}
                                            alt={blog.title || "Blog Featured Image"}
                                            className="img-fluid w-100"
                                            style={{ maxHeight: "500px", objectFit: "cover" }}
                                        />
                                    </div>
                                )}

                                <div className="blog-details-contact">
                                    <span>{blog.created_at || "June 28, 2024"}</span>
                                    <h4 className="mt-2 mb-4">
                                        {blog.title}
                                    </h4>
                                    {blog.short_desc && (
                                        <p className="lead">
                                            {blog.short_desc}
                                        </p>
                                    )}
                                    {blog.content && (
                                        <div
                                            className="blog-content"
                                            dangerouslySetInnerHTML={renderHTML(blog.content)}
                                        />
                                    )}
                                    {blog.images && blog.images.length > 0 && (
                                        <>
                                            <div className="row mt-4">
                                                {blog.images.slice(0, 2).map((img, index) => (
                                                    <div
                                                        key={img.id || index}
                                                        className="col-lg-6 col-md-12 mb-24"
                                                    >
                                                        <img
                                                            src={img.image}
                                                            alt={img.alt || blog.title}
                                                            className="img-fluid w-100"
                                                            style={{ height: "300px", objectFit: "cover" }}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                            {blog.images.length > 2 && (
                                                <div className="row mt-3">
                                                    {blog.images.slice(2).map((img, index) => (
                                                        <div
                                                            key={img.id || index + 2}
                                                            className="col-12 mb-24"
                                                        >
                                                            <img
                                                                src={img.image}
                                                                alt={img.alt || blog.title}
                                                                className="img-fluid w-100"
                                                                style={{ height: "400px", objectFit: "cover" }}
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    )}
                                    {blog.paragraphs && blog.paragraphs.map((paragraph, index) => (
                                        <div key={index} className="mt-5">
                                            {paragraph.title && (
                                                <h5 className="mt-4 mb-3" style={{ color: "#333", fontWeight: "600" }}>
                                                    {paragraph.title}
                                                </h5>
                                            )}

                                            {paragraph.content && (
                                                <div
                                                    className="paragraph-content"
                                                    dangerouslySetInnerHTML={renderHTML(paragraph.content)}
                                                />
                                            )}

                                            {paragraph.image && (
                                                <div className="mt-3">
                                                    <img
                                                        src={paragraph.image}
                                                        alt={paragraph.title || blog.title}
                                                        className="img-fluid w-100"
                                                        style={{ height: "400px", objectFit: "cover" }}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-4 col-12 mb-24">
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
                    </div> */}
                </div>
            </div>
        </section>
    );
}