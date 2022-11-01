/** @type {import('next').NextConfig} */

const plugins = [
]

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  images: {
    unoptimized: true,
  }
}

module.exports = plugins.reduce((config, plugin) => plugin(config), nextConfig)
