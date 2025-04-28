
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import mdxMermaid from 'mdx-mermaid'
import { Mermaid } from 'mdx-mermaid/lib/Mermaid'

/**
 * @type {MDXOptions}
 */
export const mdxConfig = {
  remarkPlugins: [
    remarkGfm,
    [
      mdxMermaid,
      {
        output: 'svg',
        theme: { light: 'neutral', dark: 'forest' },
        // svgMermaidSrc: 'https://cdn.jsdelivr.net/npm/mermaid@11.4.1/+esm',
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
    remarkMath,
  ],
  components: { mermaid: Mermaid, Mermaid },
  rehypePlugins: [
    rehypeKatex,
    rehypeSlug,
    [
      rehypePrettyCode,
      {
        theme: 'one-dark-pro',
        onVisitLine(node) {
          // Prevent lines from collapsing in `display: grid` mode, and allow empty
          // lines to be copy/pasted
          if (node.children.length === 0) {
            node.children = [{ type: 'text', value: ' ' }]
          }
        },
        onVisitHighlightedLine(node) {
          node.properties.className.push('line--highlighted')
        },
        onVisitHighlightedWord(node) {
          node.properties.className = ['word--highlighted']
        },
      },
    ],
    [
      rehypeAutolinkHeadings,
      {
        properties: {
          className: ['anchor'],
        },
      },
    ],
  ],
}