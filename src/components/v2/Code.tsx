'use client'

import React, { useRef } from 'react'
import copyToClipboard from '../../lib/copyToClipboard'

export const Code: React.FC = (props) => {
  const codeRef = useRef<HTMLElement>(null)
  const handleClick = (): void => {
    if (codeRef.current === null) {
      return
    }
    if ((window?.getSelection()?.toString() ?? '') === '') {
      copyToClipboard(codeRef.current?.innerText ?? '')
    }
  }
  return <code ref={codeRef} onClick={handleClick} title='Click to copy' {...props} />
}
