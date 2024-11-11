/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
    ],
    // domains: ["api.escuelajs.co", "i.imgur.com"], // أضف المجالات المطلوبة هنا
  },
  // experimental: {
  //   ppr: "incremental",
  // },
};

export default nextConfig;
