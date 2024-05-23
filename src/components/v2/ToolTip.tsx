'use client'
import React, { type ReactNode, useState } from 'react'
import './ToolTip.scss'

interface Props {
  alwaysShow?: boolean

  title: string

  children: React.ReactNode
}

export const ToolTip = ({ alwaysShow, title, children }: Props): ReactNode => {
  const [show, setShow] = useState(alwaysShow ?? false)
  const onMouseIn = (): void => {
    setShow(true)
  }
  const onMouseOut = (): void => {
    setShow(false)
  }

  return (
    <div className="tooltip-root" onMouseOver={onMouseIn} onMouseLeave={onMouseOut}>
      <div className="title" style={{ opacity: `${show ? 1 : 0}` }}>{title}</div>
      {children}
    </div>
  )
}
