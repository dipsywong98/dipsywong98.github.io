import { withContentlayer } from 'next-contentlayer2'
import {mdxConfig} from './mdx.config.mjs'
import createMDX from '@next/mdx'
const withMDX = createMDX({
  options: mdxConfig
})

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

export default withMDX(withContentlayer(nextConfig))
