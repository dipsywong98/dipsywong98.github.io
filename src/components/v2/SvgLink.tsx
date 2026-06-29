'use client'

import React, { type ReactNode } from 'react'
import { ToolTip } from './ToolTip'
import NextImage from 'next/image'
import { useTheme } from 'next-themes'

interface Props {
  title: string
  href: string
  icon: string
  color: string
}

export const SvgLink = ({ title, href, icon }: Props): ReactNode => {
  let { resolvedTheme } = useTheme()
  const iconUrl = resolvedTheme !== 'dark' ? `/svg/${icon}.svg` : `/svg/dark/${icon}.svg`
  return (
    <ToolTip title={title}>
      <a href={href}>
        <NextImage width={32} height={32} src={iconUrl} alt="icon" />
      </a>
    </ToolTip>
  )
}
