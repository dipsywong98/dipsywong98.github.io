import { BackwardCompatibleRedirect } from '@/components/BackwardCompatibleRedirect'
import { NameCard } from '@/components/v2/NameCard'
import { PhotoBanner } from '@/components/v2/PhotoBanner'
import WorksPage from './works/page'
import BlogPage from './blog/page'

export default function Home() {

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
      <WorksPage />
      <PhotoBanner src='/img/banners/success.jpg' />
      <div id='blog' />
      <BlogPage />
      <BackwardCompatibleRedirect />
    </>
  )
}
