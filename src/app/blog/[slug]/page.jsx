import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import BlogDetailsPage from "./BlogDetailsPage";
async function getBlogDetails(slug) {
    try {
        const apiUrl = `https://www.inforbit.in/demo/hotel-elegance-backend/api/blog/${slug}`;
        const res = await fetch(apiUrl, {
            next: { revalidate: 10 },
        });
        if (!res.ok) {
            console.error("Blog API failed:", res.status);
            return null;
        }
        return await res.json();
    } catch (error) {
        console.error("Blog details fetch error:", error);
        return null;
    }
}
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const res = await getBlogDetails(slug);
    if (!res?.status) {
        return {
            title: "Blog Not Found - Hotel Elegance",
            description: "The requested blog could not be found.",
        };
    }
    const blog = res.data;
    return {
        title: blog.meta_title || blog.title,
        description: blog.meta_description || blog.short_desc,
        openGraph: {
            title: blog.title,
            description: blog.short_desc,
            images: blog.featured_image ? [blog.featured_image] : [],
            type: "article",
        },
    };
}
export default async function Page({ params }) {
    const { slug } = await params;
    const blogRes = await getBlogDetails(slug);
    if (!blogRes?.status) {
        return (
            <>
                <Breadcrumb
                    title="Blog Not Found"
                    backgroundImage="/assets/dev-img/bread-banner/Tariff.jpg"
                    mobileBackgroundImage=""
                    subtitle=""
                />
                <section className="section-blog-details padding-t-50 padding-b-100">
                    <div className="container text-center py-5">
                        <h4 className="text-danger">Blog not found</h4>
                        <p className="text-muted">
                            The blog post you are looking for does not exist.
                        </p>
                        <p className="small text-muted">Slug: {slug}</p>
                    </div>
                </section>
            </>
        );
    }
    return (
        <>
            <Breadcrumb
                title={blogRes.data.title}
                backgroundImage="/assets/dev-img/bread-banner/Tariff.jpg"
                mobileBackgroundImage=""
                subtitle=""
            />

            <BlogDetailsPage blog={blogRes.data} />
        </>
    );
}
