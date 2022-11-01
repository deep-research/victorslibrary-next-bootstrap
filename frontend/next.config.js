// @type {import('next').NextConfig}

//  const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
  
//   images: {
//     unoptimized: true,
//   }
// }

// module.exports = nextConfig

const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  /* config for next-optimized-images */

  // your config for other plugins or the general next.js here...
  images: {
    disableStaticImages: true,
  }
});