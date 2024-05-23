import { useEffect, useState } from 'react'

export const useScreenWidth = (): number => {
  const [screenWidth, setScreenWidth] = useState(1000)
  useEffect(() => {
    const fn = (): void => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', fn)
    return () => {
      window.removeEventListener('resize', fn)
    }
  }, [])
  return screenWidth
}
