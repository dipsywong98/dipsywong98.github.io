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

export async function generateStaticParams() {
  const { allWorks } = getWorks('works')
  const { allWorks: allBlog } = getWorks('blog')
  return [
    ...allPosts.map((post) => ({
      slug: post._raw.flattenedPath,
    })),
    ...allWorks.map(work => work.title),
    ...allBlog.map(work => work.title)
  ]
}

const findPost = (slug: string) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === slug)
    ?? ( getWorks('works')).allWorks.find(work => work.title === slug)
    ?? ( getWorks('blog')).allWorks.find(work => work.title === slug)
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

const fetchPostContent = async (post: IWork | Post) => {
  if ('body' in post) {
    return post.body.raw
  }
  if ('story' in post) {
    const res = await fetch(post.story.replace('//', 'https://'))
    const text = await res.text()
    const markdown = text.replace(/^---(\n.*?)*?---/gm, '')
    return markdown
  }
  return undefined
}

const getContent = async (fileContent: string) => {
  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: {
      parseFrontmatter: true,
    },
    components: mdxComponents,
  });
  return {content}
}

const PostLayout = async ({ params }: { params: { slug: string } }) => {
  const post = await findPost(params.slug)

  if (!post) {
    notFound()
  }

  const markdown = await fetchPostContent(post)

  if (!markdown) {
    notFound()
  }

  // const MDXContent = useMDXComponent(markdown, {})
  // const MDXContent = getMDXComponent(markdown, {})
  const {content} = await getContent(markdown)

  return (
    <div>
      <h1>{post.title}</h1>
      <time className="my-4 block text-sm text-zinc-400" dateTime={post.date}>
        {post.date && format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <article className="prose dark:prose-invert">
        {content}
        {/* <MDXContent components={mdxComponents} /> */}
      </article>
    </div>
  )
}

export default PostLayout
