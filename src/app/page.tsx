import { Dipsyland } from '@/components/v2/Dipsyland'
import { NameCard } from '@/components/v2/NameCard'
import { NavBar } from '@/components/v2/NavBar'
import { PhotoBanner } from '@/components/v2/PhotoBanner'
import { Works } from '@/components/v2/Works'
import { getWorks } from '@/lib/getWorks'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )
  const { allWorks, meta } = getWorks('works')
  const { allWorks: allBlog, meta: blogMeta } = getWorks('blog')

  return (
    <div id='app'>
      <div id='head'>
        <NavBar />
      </div>
      <div id='content'>
        <div id='home' />
        <Dipsyland />
        <PhotoBanner src='/img/banners/game.jpg' />
        <div id='about' />
        <NameCard />
        <PhotoBanner src='/img/banners/oscon.jpg' />
        <div id='works' />
        <Works allWorks={allWorks} meta={meta} category='works' defaultFilters={['featured']} />
        <PhotoBanner src='/img/banners/success.jpg' />
        <div id='blog' />
        <Works allWorks={allBlog} meta={blogMeta} category='blog' defaultFilters={[]} />
      </div>
    </div>
  )
}
