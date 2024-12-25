/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "test",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
