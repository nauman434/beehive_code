/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  experimental: {
    esmExternals: 'loose',
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
