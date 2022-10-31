/** @type {import('next').NextConfig} */

// https://whereisthemouse.com/image-optimization-for-static-nextjs-sites
const withOptimizedImages = require('next-optimized-images');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  withOptimizedImages: {
    handleImages: [
      'jpeg',
      'png',
      'svg'
    ]
  }
}

module.exports = nextConfig
