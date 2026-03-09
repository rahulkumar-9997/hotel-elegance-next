
const nextConfig = {
  htmlLimitedBots: /.*/,
  images: {
    unoptimized: true,   
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.inforbit.in",
      },
    ],
  },

  // async redirects() {
  //   return [
  //     {
  //       source: "/restaurant",
  //       destination: "/budget-restaurant-varanasi",
  //       permanent: true,
  //     },
  //     {
  //       source: "/banquet",
  //       destination: "/best-banquet-budget-varanasi",
  //       permanent: true,
  //     },
  //     {
  //       source: "/tarriff",
  //       destination: "/tariff",
  //       permanent: true,
  //     },
  //     {
  //       source: "/:slug*.php",
  //       destination: "/:slug*",
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default nextConfig;
