// import { Mermaid } from 'mdx-mermaid/lib/Mermaid'

/**
 * @type {MDXOptions}
 */
export const mdxConfig = {
  remarkPlugins: [
    'remark-gfm',
    [
      'mdx-mermaid',
      {
        output: 'svg',
        theme: { light: 'neutral', dark: 'forest' },
        mermaid: {
          theme: 'dark',
          look: 'handDrawn',
          flowchart: {
            defaultRenderer: 'elk',
            padding: 30,
          },
        },
      },
    ],
    'remark-math',
  ],
  // components: { mermaid: Mermaid, Mermaid },
  rehypePlugins: [
    'rehype-katex',
    'rehype-slug',
    [
      'rehype-pretty-code',
      {
        theme: 'one-dark-pro',
      },
    ],
    [
      'rehype-autolink-headings',
      {
        properties: {
          className: ['anchor'],
        },
      },
    ],
  ],
}
