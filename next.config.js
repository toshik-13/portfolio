/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['your-image-host.com'], // optional, only if you load external images
  },
};

module.exports = nextConfig;
