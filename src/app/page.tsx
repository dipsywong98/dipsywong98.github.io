import { BackwardCompatibleRedirect } from '@/components/BackwardCompatibleRedirect'
import { PostCard } from '@/components/PostCard'
import { Dipsyland } from '@/components/v2/Dipsyland'
import { NameCard } from '@/components/v2/NameCard'
import { NavBar } from '@/components/v2/NavBar'
import { PhotoBanner } from '@/components/v2/PhotoBanner'
import { Works } from '@/components/v2/Works'
import { getWorks } from '@/lib/getWorks'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

export default function Home() {
  const { allWorks: allBlog, meta: blogMeta } = getWorks('blog')
  // const posts = allPosts.sort((a, b) =>
  //   compareDesc(new Date(a.date), new Date(b.date)),
  // ).filter((p) => allBlogSet.has(p.title))
  const { allWorks, meta } = getWorks('works')
  const postsMap = Object.fromEntries(allPosts.map((p) => [p.title, p]))
  const posts = allBlog.map(b => ({...b, ...postsMap[b.title]}))

  return (
    <>
      <div className="dipsyland float">
        <h1 className="title">Dipsyland</h1>
        <h6 className="quote">Not Lalaland nor Poland</h6>
      </div>
      <PhotoBanner src='/img/banners/game.jpg' />
      <div id='about' />
      <NameCard />
      <PhotoBanner src='/img/banners/oscon.jpg' />
      <div id='works' />
      <Works allWorks={allWorks} meta={meta} category='works' defaultFilters={['featured']} />
      <PhotoBanner src='/img/banners/success.jpg' />
      <div id='blog' />
      <Works allWorks={posts} meta={blogMeta} category='blog' defaultFilters={[]} />
      <BackwardCompatibleRedirect />
    </>
  )
}
