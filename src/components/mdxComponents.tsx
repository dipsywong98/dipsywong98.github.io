import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import NextImage from 'next/image'
import { Code } from './v2/Code'
import { CodeBlock } from './widgets/CodeBlock'
import { WidgetValue, WidgetsRoot } from './widgets/WidgetContext'
import { WidgetInput } from './widgets/WidgetInput'
import { WidgetResetButton } from './widgets/WidgetResetButton'


// Define your custom MDX components.
export const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  Image: (props) => {
    console.log(props.src)
  return <NextImage className="rounded-lg" {...props} src={props.src.replace('../public/', '/')} />},
  img: (props) => {
    console.log(props.src)
    return <img alt={props.alt ?? 'alt'} className="rounded-lg" {...props} src={props.src.replace('../public/', '/')} />
  },
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