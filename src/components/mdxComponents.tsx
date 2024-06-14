import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import NextImage from 'next/image'
import { Code } from './v2/Code'
import { CodeBlock } from './v2/CodeBlock'


// Define your custom MDX components.
export const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  Image: (props) => <NextImage className="rounded-lg" {...props} />,
  code: Code,
  CodeBlock,
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...mdxComponents,
  }
}