'use client'

import React, { useEffect, useState } from 'react'
import { codeToHtml } from './codeToHtml'
import { Copy } from '../v2/Copy'
import { useWidgetValues } from './WidgetContext'
import {useDebounce} from 'use-debounce'

interface Props {
  children: React.ReactNode
  language?: string
}

const getNodeText = (node): string => {
  if (['string', 'number'].includes(typeof node)) return node
  if (node instanceof Array) return node.map(getNodeText).join('')
  if (typeof node === 'object' && node) return getNodeText(node.props.children)
}

export const CodeBlock = ({ children, language }: Props) => {
  const [html, setHtml] = useState('')

  const { interpolate } = useWidgetValues()
  const code = interpolate(getNodeText(children))
  
  useEffect(() => {
    console.log('start code to html')
    codeToHtml({
      code,
      language,
    }).then((html) => {
      setHtml(html)
    }).catch(console.error)
  }, [code])

  return <Copy>
    {(copyProps) => {
      if (html === '') {
        return <pre className="codeblock-loading"><code {...copyProps} >{code}</code></pre>
      }
      return <div {...copyProps} dangerouslySetInnerHTML={{ __html: html }} />
    }}
  </Copy>
}