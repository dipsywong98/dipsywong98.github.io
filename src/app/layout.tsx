import './global.css'
import { ThemeProvider } from '@/app/providers'
import { Container } from '@/components/Container'
import { Navigation } from '@/components/Navigation'
import ThemeSwitch from '@/components/ThemeSwitch'
import { GoogleAnalytics } from '@next/third-parties/google'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/v2/NavBar'
import { Dipsyland } from '@/components/v2/Dipsyland'
import { Footer } from '@/components/Footer'

const meta = {
  title: 'Dipsyland',
  description:
    'Welcome to Dipsyland, the portfolio and technical blog of Dipsy Wong, a random hacky programmer who loves building interesting software and games for fun. I hope you find them interesting too.',
  image: `${WEBSITE_HOST_URL}/og-preview.jpg`,
}

export const metadata: Metadata = {
  title: {
    default: meta.title,
    template: '%s | Dipsyland',
  },
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: WEBSITE_HOST_URL,
    siteName: meta.title,
    locale: 'en-US',
    type: 'website',
    images: [
      {
        url: meta.image,
      },
    ],
  },
  twitter: {
    title: meta.title,
    description: meta.description,
    images: meta.image,
    card: 'summary_large_image',
  },
  alternates: {
    canonical: WEBSITE_HOST_URL,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-[100vh] flex flex-col">
        <GoogleAnalytics gaId="G-2G457C66LH" />
        <ThemeProvider attribute="class" defaultTheme="dark">
          <header id='head'>
            <NavBar />
          </header>
          <main id='content' className="flex-auto flex flex-col h-full">
            <div id='home' />
            <Dipsyland />
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
