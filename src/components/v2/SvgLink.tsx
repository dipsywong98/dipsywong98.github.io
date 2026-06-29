'use client'

import React, { useEffect, useState, type ReactNode } from 'react'
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
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  const iconUrl = (mounted && resolvedTheme !== 'dark') ? `/svg/${icon}.svg` : `/svg/dark/${icon}.svg`
  return (
    <ToolTip title={title}>
      <a href={href}>
        <NextImage width={32} height={32} src={iconUrl} alt="icon" />
      </a>
    </ToolTip>
  )
}
