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

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: sanitizePath(post._raw.flattenedPath),
  }))
}

const findPost = (slug: string) => {
  const post = allPosts.find((post) => sanitizePath(post._raw.flattenedPath) === slug)
  return post
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

  const titleRegex = new RegExp(`"${post.title.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')}"`, 'igm')
  const MDXContent = useMDXComponent(markdown.replace(titleRegex, '""'), {})

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
    </CardSection>
  )
}

export default PostLayout
