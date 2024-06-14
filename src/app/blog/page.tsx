import { Works } from '@/components/v2/Works'
import { getWorks } from '@/lib/getWorks'

import { WEBSITE_HOST_URL } from '@/lib/constants'

const meta = {
  title: 'Blog',
  description: 'I like to blog about web development',
  url: `${WEBSITE_HOST_URL}/blog`,
}

export const metadata = {
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

export default function BlogPage() {
  const { allWorks, meta } = getWorks('blog')
  return (
    <Works allWorks={allWorks} meta={meta} category='blog' defaultFilters={[]} />
  )
}
