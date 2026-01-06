
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.inforbit.in",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/restaurant.php",
        destination: "/budget-restaurant-varanasi",
        permanent: true,
      },
      {
        source: "/banquet.php",
        destination: "/best-banquet-budget-varanasi",
        permanent: true,
      },
      {
        source: "/tarriff.php",
        destination: "/tariff",
        permanent: true,
      },
      {
        source: "/:slug*.php",
        destination: "/:slug*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
