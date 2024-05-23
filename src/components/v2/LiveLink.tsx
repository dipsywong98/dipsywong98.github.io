import React, { forwardRef } from 'react'
import './LiveLink.scss'

interface Props {
  href: string
}

export const LiveLink = forwardRef<HTMLDivElement, Props>(function LiveLink ({ href }, ref) {
  return (
    <div className="live-root" ref={ref}>
      <a className="live" href={href}>
        <div className="triangle"></div>
        <div className="gradient"></div>
        <div className="text">Live</div>
      </a>
    </div>
  )
})
