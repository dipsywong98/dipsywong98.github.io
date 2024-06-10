import { WEBSITE_HOST_URL } from '@/lib/constants'
import { IWork, getWorks } from '@/lib/getWorks'
import { Post, allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import type { MDXComponents } from 'mdx/types'
import type { Metadata } from 'next'
import { getMDXComponent, useMDXComponent } from 'next-contentlayer2/hooks'
import NextImage from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { compileMDX } from "next-mdx-remote/rsc";
import './page.scss'
import { Dipsyland } from '@/components/v2/Dipsyland'
// import { Markdown } from '@/components/v2/Markdown'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you

export async function generateStaticParams() {
  return allPosts.map((post) => ({
      slug: encodeURI(post._raw.flattenedPath),
    }))
}

const findPost = (slug: string) => {
  const escaped = decodeURI(slug)
  const post = allPosts.find((post) => post._raw.flattenedPath === escaped)
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

// Define your custom MDX components.
const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  Image: (props) => <NextImage className="rounded-lg" {...props} />,
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

  const titleRegex = new RegExp(`${post.title}`, 'gm')
  const MDXContent = useMDXComponent(markdown.replace(titleRegex, ''), {})

  return (
    <>
      <Dipsyland />
      <div className='post card'>
        <div className='container-el'>
          <div className='my-work m-auto'>
            <h1>{post.title}</h1>
            <time className="my-4 block text-sm text-zinc-400" dateTime={post.date}>
              {post.date && format(parseISO(post.date), 'LLLL d, yyyy')}
            </time>
            <article className="prose dark:prose-invert max-w-[70ch]">
              <MDXContent components={mdxComponents} />
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostLayout
