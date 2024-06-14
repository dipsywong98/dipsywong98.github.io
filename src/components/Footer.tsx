import { Github } from "lucide-react"
import ThemeSwitch from "./ThemeSwitch"
import { SvgLink } from "./v2/SvgLink"
import my from './v2/namecard.yaml'

export const Footer = () => {
  return (
    <footer className="bg-background/30 text-foreground backgrop-satuate-100 backdrop-blur-sm shadow py-8">
      <div className="flex justify-between container py-8 items-center">
        <div className='flex flex-col space-y-2'>
          Make with love by Dipsy, Copyright© 2024 All Right Reserved
        </div>
        <div className="flex space-x-4">
          {my.media.map(medium => <SvgLink key={medium.title} href={medium.href} icon={medium.icon} color={medium.color} title={medium.title}></SvgLink>)}
        </div>
      </div>
    </footer>
  )
}