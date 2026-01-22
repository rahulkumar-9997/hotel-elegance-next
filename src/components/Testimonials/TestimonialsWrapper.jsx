async function getTestimonialsUrl() {
    try {
        const res = await fetch(
            "https://www.inforbit.in/demo/hotel-elegance-backend/api/testimonials-home", {
                next: { revalidate: 10 }
            }
        );

        if (!res.ok) {
            throw new Error(`Failed to fetch testimonials. Status: ${res.status}`);
        }

        const data = await res.json();

        if (data?.status && data?.data) {
            return data.data.map((testimonial) => ({
                id: testimonial.id,
                title: testimonial.title || "Guest Review",
                guest_type: testimonial.guest_type || "Guest",
                visit_date: testimonial.visit_date || "Recently",
                review_text: testimonial.review_text || "",
                ratings: testimonial.ratings || [],
            }));
        }

        return [];
    } catch (error) {
        console.error("Testimonials API fetch error:", error);
        return [];
    }
}

export default async function TestimonialsWrapper() {
    const testimonialsData = await getTestimonialsUrl();
    const { Testimonials } = await import("./Testimonials");
    return <Testimonials initialTestimonials={testimonialsData} />;
}
