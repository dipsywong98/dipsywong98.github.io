import { WEBSITE_HOST_URL } from '@/lib/constants'
import { Post, allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import type { Metadata } from 'next'
import { useMDXComponent } from 'next-contentlayer2/hooks'
import { notFound } from 'next/navigation'
import './page.scss'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
import { mdxComponents } from '@/components/mdxComponents'
import { CardSection } from '@/components/CardSection'
import { sanitizePath } from '@/lib/sanitizePath'
import { WidgetsRoot } from '@/components/widgets/WidgetContext'
import { Discussion } from '@/components/Dicussion'
import { PostNavigationCard } from '@/components/PostNavigationCard'

const getPostSlugs = (post: Post) => {
  const fullSlug = sanitizePath(post._raw.flattenedPath)
    // .replace(/^(\d{4}-\d{2}-\d{2}_)-/, '$1') // remove the leading "-" in "YYYY-MM-DD_-" prefix if it exists
  const withoutDatePrefix = fullSlug.replace(/^\d{4}-\d{2}-\d{2}_/, '')

  return [
    // comment out because discussion module may require a consistent path
    // fullSlug,
    // fullSlug.toLocaleLowerCase(),
    withoutDatePrefix,
    // withoutDatePrefix.toLocaleLowerCase(),
  ].filter((slug, index, slugs) => slugs.indexOf(slug) === index)
}

export async function generateStaticParams() {
  return allPosts.flatMap((post) => getPostSlugs(post).map((slug) => ({ slug })))
}

const findPost = (slug: string) => {
  const normalizedSlug = slug.toLocaleLowerCase()
  return allPosts.find((post) => getPostSlugs(post).some((candidate) => candidate.toLocaleLowerCase() === normalizedSlug))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata | undefined> {
  const post = await findPost(params.slug)

  if (!post) {
    return
  }

  const { title, brief: description, date, time } = post

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: date ?? time,
      url: `${WEBSITE_HOST_URL}/posts/${params.slug}`,
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `${WEBSITE_HOST_URL}/posts/${params.slug}`,
    },
  }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = findPost(params.slug)

  if (!post) {
    notFound()
  }

  const markdown = post.body.code

  if (!markdown) {
    notFound()
  }

  const MDXContent = useMDXComponent(markdown, {})
  const sortedBlogPosts = allPosts
    .filter((candidate) => candidate.isProject === post.isProject)
    .sort((a, b) => (a.date > b.date ? -1 : 1))
  const currentIndex = sortedBlogPosts.findIndex((candidate) => candidate._id === post._id)
  const previousPost = currentIndex >= 0 ? sortedBlogPosts[currentIndex + 1] : undefined
  const nextPost = currentIndex > 0 ? sortedBlogPosts[currentIndex - 1] : undefined
  const previousLabel = post.isProject ? 'Previous work' : 'Previous article'
  const nextLabel = post.isProject ? 'Next work' : 'Next article'

  return (
    <CardSection>
      <h1>{post.title}</h1>
      <time className="my-4 block text-sm text-zinc-400" dateTime={post.date}>
        {post.date && format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <article className="prose dark:prose-invert max-w-[90ch]">
        <WidgetsRoot>
          <MDXContent components={mdxComponents} />
        </WidgetsRoot>
      </article>
      {(previousPost || nextPost) && (
        <div className="mt-8 grid gap-4 border-t border-zinc-200 pt-6 dark:border-zinc-800 md:grid-cols-2">
          {previousPost ? (
            <PostNavigationCard href={previousPost.url} label={previousLabel} post={previousPost} />
          ) : (
            <div />
          )}
          {nextPost ? (
            <PostNavigationCard href={nextPost.url} label={nextLabel} post={nextPost} align="right" />
          ) : (
            <div />
          )}
        </div>
      )}
      <div className="mt-8">
        <Discussion title={post.title} />
      </div>
    </CardSection>
  )
}

export default PostLayout
