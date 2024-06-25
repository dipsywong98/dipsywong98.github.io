import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import { Code } from './v2/Code'
import { CodeBlock } from './widgets/CodeBlock'
import { WidgetValue, WidgetsRoot } from './widgets/WidgetContext'
import { WidgetInput } from './widgets/WidgetInput'
import { WidgetResetButton } from './widgets/WidgetResetButton'
import { Image } from './widgets/Image'


// Define your custom MDX components.
export const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  img: Image,
  code: Code,
  CodeBlock,
  WidgetsRoot,
  Value: WidgetValue,
  Input: WidgetInput,
  ResetButton: WidgetResetButton,
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...mdxComponents,
  }
}