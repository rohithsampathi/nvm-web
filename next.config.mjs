// next.config.mjs

import path from 'path'

/** @type {import('next').NextConfig} */
export default {
  webpack(config) {
    config.resolve.alias['@'] = path.resolve('./src')
    return config
  },

  experimental: { webpackBuildWorker: true },

  images: {
    // simplest: allow every Unsplash sub-domain you might use
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
}
