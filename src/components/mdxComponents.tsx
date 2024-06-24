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
  img: (props) => {
    return <div>
      <img alt={props.alt ?? 'alt'} className="rounded-lg mb-0 max-h-[30vh]" {...props} src={props.src.replace('../public/', '/')} />
      {!['alt text', '', 'image'].includes(props.alt) && <span className='mt-0 italic text-muted-foreground'>▲ {props.alt}</span>}
    </div>
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