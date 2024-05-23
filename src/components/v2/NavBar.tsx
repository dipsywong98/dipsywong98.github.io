'use client'
import React from 'react'
import './NavBar.scss'
import { useScreenWidth } from '../../hooks/useScreenWidth'

export const NavBar = (): React.ReactNode => {
  const screenWidth = useScreenWidth()
  return (
    <header>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a href="#home" className="nav-item title anim">Dipsyland</a>
            {screenWidth > 768
              ? <div style={{ display: 'inherit' }}>
                <a href="#about" className="nav-item anim">About Me</a>
                <a href="#works" className="nav-item anim">Works</a>
                <a href="#blog" className="nav-item anim">Blog</a>
                <a href="#about" className="nav-item anim">Contact</a>
              </div>
              : <a style={{ display: 'inherit' }} className="nav-item anim">menu</a>}

            {/* <RippleFullScreen v-else :ripple="ripple" @close="ripple=true">
            <template slot="outside">
              <a style="display: inherit;" className="nav-item anim">menu</a>
            </template>
            <template slot="inside">
              <div className="inner-links">
                <a @click="ripple=false" href="#home" className="inner-link">Home</a>
                <a @click="ripple=false" href="#about" className="inner-link">About Me</a>
                <a @click="ripple=false" href="#works" className="inner-link">Works</a>
                <a @click="ripple=false" href="#blog" className="inner-link">Blog</a>
                <a @click="ripple=false" href="#about" className="inner-link">Contact</a>
              </div>
            </template>
          </RippleFullScreen> */}
          </div>
        </nav>
      </div>
    </header>
  )
}
