import React from 'react'
import './PhotoBanner.scss'

export const PhotoBanner = ({ src }: { src: string }): React.ReactNode => {
  return <div className="section photo" style={{ backgroundImage: `url(${src})` }} />
}
