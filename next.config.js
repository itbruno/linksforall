/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars3.githubusercontent.com'
      }
    ]
  }
};

module.exports = nextConfig;
