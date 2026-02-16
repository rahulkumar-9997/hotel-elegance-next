
const nextConfig = {
  htmlLimitedBots: /.*/,
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
        source: "/restaurant",
        destination: "/budget-restaurant-varanasi",
        permanent: true,
      },
      {
        source: "/banquet",
        destination: "/best-banquet-budget-varanasi",
        permanent: true,
      },
      {
        source: "/tarriff",
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


module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}
export default nextConfig;
