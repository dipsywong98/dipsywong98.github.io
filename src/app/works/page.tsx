import { Posts } from '@/components/Posts'
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

const description = `
I love working on interesting side projects, most of them are [game](#) and [web](#) projects. In additional to those, I also worked on [embedded system](#), [computer graphics](#), [AI](#) and [cloud](#) projects. I pinned the 6 most interesting ones I think as [featured](#) works.


When I was studying in university, besides working on [academic](#) projects, I was also a software engineer of [robotics](#) team and a developer of [USThing](#).
`

export default function WorksPage() {
  return (
    <Posts description={description} dateFormat="yyyy LLLL" allPosts={allPosts.filter((post) => post.isProject).sort((a, b) => a.date > b.date ? -1 : 1)} category='works' defaultFilters={['featured']} />
  )
}
