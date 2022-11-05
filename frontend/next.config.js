/**
 * @type {import('next').NextConfig}
 */

const withOptimizedImages = require('next-optimized-images');

const nextConfig = {
  images: {
    disableStaticImages: true,
  }
}

module.exports = () => {
 const plugins = [
  withOptimizedImages
]

 return plugins.reduce((config, plugin) => plugin(config), nextConfig);
}