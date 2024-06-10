'use client'
import React, { useEffect, useReducer, useRef } from 'react'
import './Dipsyland.scss'
// import { style } from '@vanilla-extract/css'
// import { vars } from '../styles/global.css'

// const root = style({
//   position: 'relative',
//   width: '100%',
//   height: vars.dim.sectionHeight
// })

// const container = style({})

interface State {
  x: number
  y: number
  w: number
  h: number
}

export const Dipsyland = (): React.ReactNode => {
  const [{ x, y, w }, setState] = useReducer((cur: State, patch: Partial<State>) => ({ ...cur, ...patch }), { x: 0, y: 0, w: 0, h: 0 })
  const background = useRef<HTMLDivElement>(null)
  const sky = useRef<HTMLDivElement>(null)
  const cloud = useRef<HTMLDivElement>(null)
  const city = useRef<HTMLDivElement>(null)
  const grass = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const backgroundDiv = background.current
    if (backgroundDiv === null) {
      return
    }
    const handleResize = (): void => {
      const { innerWidth, innerHeight } = window
      setState({ w: innerWidth, h: innerHeight })
    }
    const handleMouseMove = (event: MouseEvent): void => {
      const { screenY: y } = event
      const { clientWidth: w, clientHeight: h } = backgroundDiv
      // this.x = (x - w / 2) / w - 0.3;
      setState({
        y: -y / h / 2,
        w,
        h
      })
    }
    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className='dipsyland root'>
      <div className='container' ref={background}>
        <div className="background sky" ref={sky}></div>
        <div className="background cloud" ref={cloud} style={{ marginLeft: `${x * 5 - w}px`, bottom: `${y * 10 - 50}px` }}></div>
        <div className="background city" ref={city} style={{ marginLeft: `${x * 40 - w}px`, bottom: `${y * 50 - 50}px` }}></div>
        <div className="background grass" ref={grass} style={{ marginLeft: `${x * 80 - w}px`, bottom: `${y * 100 - 50}px` }}></div>
      </div>
    </div>
  )
}
