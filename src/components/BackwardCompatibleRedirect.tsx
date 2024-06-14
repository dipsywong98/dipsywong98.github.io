'use client'

import { allPosts } from "contentlayer/generated"
import { useEffect } from "react"

export const BackwardCompatibleRedirect = () => {
  useEffect(() => {
    const {hash} = window.location
    if (!hash || hash.length <= 1){
      return
    }
    const title = decodeURIComponent(hash.replace('#', ''))
    const post = allPosts.find((p) => p.title === title)
    window.location.href = post.url
  }, [])
  return <div />
}