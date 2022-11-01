// module.exports = nextConfig
// const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = optimizedImages({
  images: {
    disableStaticImages: true,
  }   
})

// ----

// related issues:
// next-compose-plugins issue: https://github.com/vercel/next.js/issues/39161#issue-comment-box
// syntax without next-compose-plugins: https://stackoverflow.com/questions/65604469/how-to-combine-several-plugins-inside-next-config-js-file
// original commit: https://github.com/deep-research/victorslibrary-metadata/commit/4779ef6b52549a02726fbefd0099180de98a49cc

// syntax with next-compose-plugins:
// 
// const nextConfig = {
//   images: {
//     disableStaticImages: true,
//   } 
// }

// module.exports = withPlugins([
//   [optimizedImages, {
//     /* config for next-optimized-images */
//   }],

//   // your other plugins here

// ], nextConfig);