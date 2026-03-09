
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
};

export default nextConfig;
