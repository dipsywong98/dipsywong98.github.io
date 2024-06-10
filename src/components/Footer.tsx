import { Github } from "lucide-react"
import ThemeSwitch from "./ThemeSwitch"
import { SvgLink } from "./v2/SvgLink"
import my from './v2/namecard.yaml'

export const Footer = () => {
  return (
    <div>
      <div className="flex justify-between container py-8 items-center">
        <div>
          <div>
            Make with love by Dipsy, Copyright© 2024 All Right Reserved
          </div>
          <div>
            <div className="flex space-x-2">
              {my.media.map(medium => <SvgLink key={medium.title} href={medium.href} icon={medium.icon} color={medium.color} title={medium.title}></SvgLink>)}
            </div>
          </div>
        </div>
        <div>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  )
}