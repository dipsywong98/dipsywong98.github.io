import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import '../posts/[slug]/page.scss'
import { useMDXComponent } from 'next-contentlayer2/hooks'

const meta = {
  title: 'About Me',
  description: 'I like to blog about web development',
  url: `${WEBSITE_HOST_URL}/about`,
}

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
  },
  twitter: {
    title: meta.title,
    description: meta.description,
  },
  alternates: {
    canonical: meta.url,
  },
}

export default function About({ children }) {
  return (
    <div className='post card'>
      <div className='container-el'>
        <div className='my-work m-auto'>
          {children}
        </div>
      </div>
    </div>
  )
}
