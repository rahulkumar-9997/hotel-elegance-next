export default async function sitemap() {
  const baseUrl = "https://www.theelegance.co.in";
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/hotel-rooms-in-varanasi`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/budget-restaurant-varanasi`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/best-banquet-budget-varanasi`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/best-lounge-varansasi-tafri-elegance`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/facilities`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tariff`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/near-by-place`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
  const roomPages = [
    {
      url: `${baseUrl}/hotel-rooms-in-varanasi/suite-room`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/hotel-rooms-in-varanasi/premium-room`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/hotel-rooms-in-varanasi/king-size-room`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  try {
    const nearByPlacesResponse = await fetch(
      "https://www.inforbit.in/demo/hotel-elegance-backend/api/near-by-pace-list",
    );
    const blogResponse = await fetch(
      "https://www.inforbit.in/demo/hotel-elegance-backend/api/blog",
    );

    let nearByPlaces = [];
    let blogPages = [];
    if (nearByPlacesResponse.ok) {
      const apiResponse = await nearByPlacesResponse.json();
      const nearByPlacesData = Array.isArray(apiResponse.data)
        ? apiResponse.data
        : [];
      nearByPlaces = nearByPlacesData.map((place) => ({
        url: `${baseUrl}/near-by-place/${place.slug}`,
        lastModified: new Date(Date.now()),
        changeFrequency: "weekly",
        priority: 0.7,
      }));
    }
    if (blogResponse.ok) {
      const blogApiResponse = await blogResponse.json();
      const blogData = Array.isArray(blogApiResponse.data)
        ? blogApiResponse.data
        : [];
      blogPages = blogData.map((blog) => ({
        url: `${baseUrl}/blog/${blog.slug}`,
        lastModified: new Date(Date.now()),
        changeFrequency: "weekly",
        priority: 0.6,
      }));
    }
    return [...staticPages, ...roomPages, ...nearByPlaces, ...blogPages];

  } catch (error) {
    console.error("Sitemap API error:", error.message);
    return [...staticPages, ...roomPages];
  }
}