/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
    ],
    // أضف المجالات المطلوبة هنا
  },
  // experimental: {
  //   ppr: "incremental",
  // },
};

export default nextConfig;
