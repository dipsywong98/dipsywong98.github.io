'use client'
import React from 'react'
import './NavBar.scss'

export const NavBar = (): React.ReactNode => {
  return (
    <header>
      <div className="shadow-lg navbar-fixed">
        <nav>
          <div className="nav-wrapper bg-nav text-nav-foreground">
            <a href="/#home" className="nav-item title transition-all">Dipsyland</a>
            <div style={{ display: 'inherit' }}>
              <a href="/#about" className="nav-item transition-all">About Me</a>
              <a href="/#works" className="nav-item transition-all">Works</a>
              <a href="/#blog" className="nav-item transition-all">Blog</a>
              <a href="/#about" className="nav-item transition-all">Contact</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
