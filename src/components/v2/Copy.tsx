'use client'

import React, { useRef } from 'react'
import copyToClipboard from '../../lib/copyToClipboard'

export const Copy = ({children}) => {
  const ref = useRef<HTMLElement>(null)
  const onClick = (): void => {
    if (ref.current === null) {
      return
    }
    if ((window?.getSelection()?.toString() ?? '') === '') {
      copyToClipboard(ref.current?.innerText ?? '')
    }
  }
  return children({
    ref, onClick, title: 'Click to copy'
  })
}
