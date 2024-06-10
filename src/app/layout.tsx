import './global.css'
import { ThemeProvider } from '@/app/providers'
import { Container } from '@/components/Container'
import { Navigation } from '@/components/Navigation'
import ThemeSwitch from '@/components/ThemeSwitch'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/v2/NavBar'
import { Dipsyland } from '@/components/v2/Dipsyland'

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
      <body>
        <div id='head'>
          <NavBar />
        </div>
        <div id='content'>
          <div id='home' />
          {children}
        </div>
        {/* <ThemeProvider attribute="class" defaultTheme="dark">
          <header className="py-4">
            <Container>
              <div className="flex items-center justify-between py-6">
                <Navigation />
                <ThemeSwitch />
              </div>
            </Container>
          </header>
          <main>
            <Container>{children}</Container>
          </main>
          <footer className="py-16">
            <Container>
              <p>
                Make with love by Dipsy, Copyright© 2024 All Right Reserved
              </p>
            </Container>
          </footer>
        </ThemeProvider> */}
      </body>
    </html>
  )
}
