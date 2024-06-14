'use client'

import React from 'react'
import { Copy } from './Copy'

export const Code = (props) => {
  return <Copy>
    {(copyProps) => <code {...copyProps} {...props} />}
  </Copy>
}
