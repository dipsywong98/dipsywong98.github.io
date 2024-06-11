
import React from 'react'
import './NameCard.scss'
import { SvgLink } from './SvgLink'
import NextImage from 'next/image'
import jsyaml from 'js-yaml'
import my from './namecard.yaml'

interface My {
  name: string
  position: string
  tagLine: string
  icon: string
  media: Array<{
    title: string
    href: string
    icon: string
    color: string
  }>
}

// async function getData (): Promise<My> {
//   const res = await fetch('https://hackmd.io/ux_QXxWNTbetEKqOgRSQSA/download', { cache: 'no-cache' })
//   // const res = await fetch('http://localhost:3000/namecard.yml', { cache: 'no-cache' })
//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   return jsyaml.load(await res.text()) as My
// }

export function NameCard (): React.JSX.Element {
  return (
    <div className="namecard card flex space-x-3 bg-card">
      <div>
        <NextImage src={'/img/icon.png'} width={204} height={204} alt='icon' />
      </div>
      <div className="flex flex-col space-y-2">
        <h2>{my.name}</h2>
        <h4>{my.position}</h4>
        <h5>{my.tagLine}</h5>
        <div className="links">
          {my.media.map(medium => <SvgLink key={medium.title} href={medium.href} icon={medium.icon} color={medium.color} title={medium.title}></SvgLink>)}
        </div>
      </div>
    </div>
  )
}
