'use client'

import React, { useEffect, useRef, useState } from 'react'
import copyToClipboard from '../../lib/copyToClipboard'
import { codeToHtml } from './codeToHtml'
import { Copy } from './Copy'

interface Props {
  children: React.ReactNode
  language?: string
}

const getNodeText = node => {
  if (['string', 'number'].includes(typeof node)) return node
  if (node instanceof Array) return node.map(getNodeText).join('')
  if (typeof node === 'object' && node) return getNodeText(node.props.children)
}

export const CodeBlock = ({ children, language }: Props) => {
  const [html, setHtml] = useState('')
  console.log(children)
  const code = getNodeText(children)
  useEffect(() => {
    codeToHtml({
      code,
      language,
    }).then((html) => {
      setHtml(html)
    })
  }, [code])

  return <Copy>
    {(copyProps) => {
      if (html === '') {
        return <pre className="codeblock-loading"><code {...copyProps} >{children}</code></pre>
      }
      return <div dataLine {...copyProps} dangerouslySetInnerHTML={{ __html: html }} />
    }}
  </Copy>
}