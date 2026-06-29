import { withContentlayer } from 'next-contentlayer2'
import { mdxConfig } from './mdx.config.mjs'
import createMDX from '@next/mdx'
const withMDX = createMDX({
  options: mdxConfig,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: { unoptimized: true },
  trailingSlash: true,
  turbopack: {
    root: import.meta.dirname,
    rules: {
      // Match all .yaml and .yml files
      '*.{yaml,yml}': {
        loaders: ['yaml-loader'],
        as: '*.js', // Tells Turbopack to treat the evaluated output as JavaScript/JSON
      },
    },
  },
}

export default withMDX(withContentlayer(nextConfig))
