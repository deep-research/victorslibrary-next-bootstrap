/** @type {import('next').NextConfig} */

const withExportImages = require('next-export-optimize-images')

const plugins = [
  withExportImages
];

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // images: {
  //   unoptimized: true,
  // },
}

module.exports = plugins.reduce((config, plugin) => plugin(config), nextConfig)
