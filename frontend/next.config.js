// @type {import('next').NextConfig}

//  const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
  
//   images: {
//     unoptimized: true,
//   }
// }

// module.exports = nextConfig
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  images: {
    disableStaticImages: true,
  } 
}

module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
  }],

  // your other plugins here

], nextConfig);