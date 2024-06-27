'use client'
import { useEffect, useRef, useState } from "react"
import { Skeleton } from "../ui/skeleton"
import { cn } from "@/lib/utils"

export const ImageWithSkeleton = (props) => {
  const [showSkeleton, setShowSkeleton] = useState(true)
  const ref = useRef(null)
  const handleOnLoad = () => {
    console.log('on load')
    setShowSkeleton(false)
  }
  useEffect(() => {
    setShowSkeleton(!ref.current.complete)
  }, [ref.current])
  return (
    <>
      <Skeleton className={cn(showSkeleton ? 'h-[250px] w-full min-w-[300px] rounded-xl' : 'hidden')}/>
      <img {...props} ref={ref} className={cn(showSkeleton ? 'hidden' : props.className)} src={props.src} onLoad={handleOnLoad} onError={handleOnLoad} />
    </>
  )
}
