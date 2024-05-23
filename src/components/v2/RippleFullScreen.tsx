import React, { useCallback, useEffect, useRef, useState } from 'react'
import './RippleFullScreen.scss'

interface Props {
  ripple?: boolean
  showByDefault?: boolean
  onAnimate?: () => void
  onActive?: () => void
  onClose?: () => void
  outside: React.ReactNode
  children?: React.ReactNode
}

export const RippleFullScreen = ({ ripple = true, showByDefault = false, onActive, onAnimate, onClose, outside, children }: Props): React.ReactNode => {
  const frameRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const wholeRef = useRef<HTMLDivElement>(null)
  const rippleContainerRef = useRef<HTMLDivElement>(null)
  const realRippleRef = useRef<HTMLDivElement>(null)

  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isActive, setActive] = useState(false)
  const [isAnimating, setAnimating] = useState(false)

  const show = useCallback((x: number, y: number): void => {
    setAnimating(true)
    onAnimate?.()
    const rippleContainer = rippleContainerRef.current
    const realRipple = realRippleRef.current
    const whole = wholeRef.current
    if (rippleContainer === null || realRipple === null || whole === null) {
      console.error('something wrong when rippling full screen')
      return
    }
    position.x = x
    position.y = y
    setPosition({
      x,
      y
    })
    whole.style.display = ''
    rippleContainer.style.left = `${x}px`
    rippleContainer.style.top = `${y}px`
    rippleContainer.style.display = ''
    document.body.style.overflowY = 'hidden'
    setTimeout(() => {
      realRipple.classList.add('show')
      rippleContainer.classList.add('show')
      rippleContainer.style.left = '50vw'
      rippleContainer.style.top = '50vh'
    })
    setTimeout(() => {
      onActive?.()
      setActive(true)
      setAnimating(false)
    }, 500)
  }, [onActive, onAnimate, position])

  const hide = useCallback((): void => {
    setAnimating(true)
    const rippleContainer = rippleContainerRef.current
    const realRipple = realRippleRef.current
    const whole = wholeRef.current
    if (rippleContainer === null || realRipple === null || whole === null) {
      console.error('something wrong when hiding ripple full screen')
      return
    }
    realRipple.classList.remove('show')
    rippleContainer.classList.remove('show')
    rippleContainer.style.left = `${position.x}px`
    rippleContainer.style.top = `${position.y}px`
    document.body.style.overflowY = ''
    setTimeout(() => {
      rippleContainer.style.display = 'none'
      setActive(false)
      setAnimating(false)
      whole.style.display = 'none'
      onClose?.()
    }, 500)
  }, [onClose, position.x, position.y])

  const toggle: React.MouseEventHandler<HTMLDivElement> = (e): void => {
    const prevent = e.nativeEvent.composedPath()
      .map(el => (el as HTMLElement).classList)
      .filter(a => a !== null && a !== undefined && a.length > 0)
      .map(l => l.contains('prevent-ripple-full-screen'))
      .reduce((a, b) => a || b, false)
    if (prevent) {
      return
    }
    const { clientX: x, clientY: y } = e
    if (!isAnimating) {
      if (!isActive) {
        show(x, y)
      }
    }
  }

  useEffect(() => {
    if (!ripple) {
      hide()
    }
  }, [ripple, hide])

  useEffect(() => {
    if (showByDefault) {
      show(0, 0)
    }
  }, [showByDefault, show])

  return (
    <div ref={frameRef} className={`frame ${(!ripple) ? 'disabled' : ''}`} onClick={toggle}>
      <div ref={textRef} className="text" onClick={toggle}>
        {outside}
        <div ref={wholeRef} className="whole" style={{ display: isAnimating || isActive ? '' : 'none' }}>
          <div className={`content anim ${(!isAnimating && isActive) ? 'show' : ''}`}>
            {children}
            <div className="close" onClick={hide}>x</div>
          </div>
          <div ref={rippleContainerRef} className="rippleContainer anim">
            <div ref={realRippleRef} className="realRipple anim"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
