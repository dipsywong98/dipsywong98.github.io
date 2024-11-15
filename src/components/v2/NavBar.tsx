'use client'

import React, { useState, useRef, useEffect } from 'react'
import './NavBar.scss'
import ThemeSwitch from '../ThemeSwitch'
import NextLink from 'next/link'
import { cn } from '@/lib/utils'

const NavItem = ({ href, children, className = '', onClick = () => { } }) => (
  <NextLink className={cn("nav-item transition-all hover:bg-foreground/10", className)} href={href} onClick={onClick}>{children}</NextLink>
)

export const NavBar = (): React.ReactNode => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setIsDrawerOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [drawerRef]);

  const navItems = [
    { href: "/#home", text: "Dipsyland", className: "title px-3" },
    { href: "/#about", text: "About Me" },
    { href: "/#works", text: "Works" },
    { href: "/#blog", text: "Blog" },
    { href: "/#about", text: "Contact" }
  ];

  return (
    <header className="fixed top-0 w-full z-10 shadow-lg overflow-x-hidden">
      <nav>
        <div className="flex justify-between items-center px-4 md:px-16 bg-nav text-nav-foreground h-[var(--nav-height)]">
          <div className="flex items-center">
            {/* Hamburger menu for mobile */}
            <button
              className="md:hidden p-2 hover:bg-foreground/10 rounded"
              onClick={toggleDrawer}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center">
              {navItems.map((item, index) => (
                <NavItem key={index} href={item.href} className={item.className}>{item.text}</NavItem>
              ))}
            </div>

            {/* Mobile navigation */}
            <div className="md:hidden">
              <NavItem href="/#home" className="title px-3">Dipsyland</NavItem>
            </div>
          </div>
          <div>
            <ThemeSwitch />
          </div>
        </div>

        {/* Mobile drawer */}
        <div ref={drawerRef} className={cn(
          "fixed left-0 top-0 h-full w-64 bg-nav transform transition-transform duration-300 ease-in-out",
          isDrawerOpen ? "translate-x-0" : "-translate-x-full",
          "md:hidden"
        )}>
          <div className="pt-16 px-4">
            {navItems.slice(1).map((item, index) => (
              <NavItem
                key={index}
                href={item.href}
                className="block py-2"
                onClick={() => setIsDrawerOpen(false)}
              >
                {item.text}
              </NavItem>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
