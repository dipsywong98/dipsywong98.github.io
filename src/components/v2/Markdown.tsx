import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import rehypeRaw from 'rehype-raw'
import rehypeHighlight from 'rehype-highlight'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
import './Markdown.scss'

import 'highlight.js/styles/atom-one-dark.css'
import { Code } from './Code'

export const Markdown = ({ children }: { children: string }): React.ReactNode => {
  const v = children.replace(/^(```.+)( showLineNumbers)$/gm, '$1 showLineNumbers').replace(/(\S)\n/gm, '$1  \n')
  // console.log(v)
  return (
    <ReactMarkdown
      className="markdown"
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeHighlight, rehypeRaw, rehypeKatex]}
      components={{
        code: Code
      }}
      >
      {v}
    </ReactMarkdown>
  )
}
