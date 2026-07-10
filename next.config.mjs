
const nextConfig = {
  htmlLimitedBots: /.*/,
  images: {
    unoptimized: false,   
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.inforbit.in",
      },
    ],
  },
};

export default nextConfig;
