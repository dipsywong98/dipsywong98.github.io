const { withContentlayer } = require('next-contentlayer2')
const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: { unoptimized: true },
  trailingSlash: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.ya?ml$/,
      // type: 'json',
      use: 'yaml-loader',
    })
    return config
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = withMDX(withContentlayer(nextConfig))
