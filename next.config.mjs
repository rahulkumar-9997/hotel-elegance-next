
/** @type {import('next').NextConfig} */
const nextConfig = {
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
