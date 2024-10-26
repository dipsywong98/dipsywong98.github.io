import { Works } from '@/components/Works'
import { getWorks } from '@/lib/getWorks'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import { allPosts } from 'contentlayer/generated'

const meta = {
  title: 'Works',
  description: 'All the works made by Dipsy',
  url: `${WEBSITE_HOST_URL}/works`,
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

export default function WorksPage() {
  // const { allWorks, meta } = getWorks('works')
  return (
    <Works allWorks={allPosts.filter((post) => post.isProject).sort((a, b) => a.date > b.date? -1 : 1)} category='works' defaultFilters={['featured']} />
  )
}
