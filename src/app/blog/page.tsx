import { WEBSITE_HOST_URL } from '@/lib/constants'
import { Posts } from '@/components/Posts'
import { allPosts } from 'contentlayer/generated'

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

const description = `
Sometimes I wrote some notes in English/Chinese when learning new stuff
`

export default function BlogPage() {
  return (
    <Posts
      description={description}
      dateFormat="yyyy LLLL" 
      allPosts={allPosts.filter((post) => !post.isProject).sort((a, b) => a.date > b.date ? -1 : 1)} 
      category='blog' 
      defaultFilters={[]} />
  )
}
