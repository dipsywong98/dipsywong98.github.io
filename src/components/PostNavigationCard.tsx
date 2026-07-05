import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import type { Post } from 'contentlayer/generated'

interface PostNavigationCardProps {
  href: string
  label: string
  post: Post
  align?: 'left' | 'right'
}

export function PostNavigationCard({ href, label, post, align = 'left' }: PostNavigationCardProps) {
  return (
    <Link
      href={href}
      className={`rounded border border-zinc-200 p-4 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-600 dark:hover:bg-zinc-900 ${align === 'right' ? 'text-right md:text-left' : ''}`}
    >
      <div className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">{label}</div>
      <div className="mt-2 font-semibold text-zinc-900 dark:text-zinc-100">{post.title}</div>
      {post.brief && (
        <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{post.brief}</div>
      )}
      <div className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
        {post.date && format(parseISO(post.date), 'LLLL d, yyyy')}
      </div>
    </Link>
  )
}
