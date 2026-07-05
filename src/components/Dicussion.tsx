'use client'

import Giscus from '@giscus/react'
import { useTheme } from 'next-themes'

export const Discussion = ({ title }: { title: string }) => {
  const { resolvedTheme } = useTheme()
  const theme = resolvedTheme === 'dark' ? 'dark_dimmed' : 'light'

  return (
    <Giscus
      repo="dipsywong98/dipsywong98.github.io"
      repoId="R_kgDOMHeZ3g"
      category="Announcements"
      categoryId="DIC_kwDOMHeZ3s4DATE0"
      mapping="specific"
      term={title}
      strict="1"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme={theme}
      lang="en"
    />
  )
}