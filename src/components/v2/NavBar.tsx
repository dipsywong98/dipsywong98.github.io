import React from 'react'
import './NavBar.scss'
import ThemeSwitch from '../ThemeSwitch'
import NextLink from 'next/link'
import { cn } from '@/lib/utils'

const NavItem = ({href, children, className = ''}) => (
  <NextLink className={cn("nav-item transition-all hover:bg-foreground/10", className)} href={href}>{children}</NextLink>
)

export const NavBar = (): React.ReactNode => {
  return (
    <header className="fixed top-0 w-full z-10 shadow-lg">
      <nav>
        <div className="flex justify-between items-center px-16 bg-nav text-nav-foreground">
          <div className="flex items-center">
            <NavItem className="title px-3" href="/#home">Dipsyland</NavItem>
            <NavItem href="/#about">About Me</NavItem>
            <NavItem href="/#works">Works</NavItem>
            <NavItem href="/#blog">Blog</NavItem>
            <NavItem href="/#about">Contact</NavItem>
          </div>
          <div>
            <ThemeSwitch/>
          </div>
        </div>
      </nav>
    </header>
  )
}
