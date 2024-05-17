/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*' // Add image hostname to keep secure
      }
    ]
  }
};

module.exports = nextConfig;
