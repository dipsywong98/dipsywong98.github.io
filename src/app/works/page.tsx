import { Works } from '@/components/v2/Works'
import { getWorks } from '@/lib/getWorks'
import { WEBSITE_HOST_URL } from '@/lib/constants'

export const meta = {
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
  const { allWorks, meta } = getWorks('works')
  return (
    <Works allWorks={allWorks} meta={meta} category='works' defaultFilters={['featured']} />
  )
}
