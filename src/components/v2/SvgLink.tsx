import React, { type ReactNode } from 'react'
import { ToolTip } from './ToolTip'
import NextImage from 'next/image'

interface Props {
  title: string
  href: string
  icon: string
  color: string
}

export const SvgLink = ({ title, href, icon }: Props): ReactNode => {
  return (
    <ToolTip title={title}>
      <a href={href}>
        <NextImage width={32} height={32} src={`/svg/${icon}.svg`} alt="icon" />
      </a>
    </ToolTip>
  )
}
