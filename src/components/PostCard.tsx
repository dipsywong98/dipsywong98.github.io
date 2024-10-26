import React, { forwardRef, useState } from 'react'
import { Tag } from './v2/Tag'
import { type IWork } from '../lib/getWorks'
import './v2/Work.scss'
import { motion } from 'framer-motion'
import { LiveLink } from './v2/LiveLink'
import { sanitizePath } from '@/lib/sanitizePath'
import { format, parseISO } from 'date-fns'
import { Post } from 'contentlayer/generated'

interface Props {
  post: Post
  onTagClick: (tag: string) => void
}

const PostCard: React.FC<Props> = forwardRef(function WorkComponent({ post, onTagClick, }: Props, ref: React.ForwardedRef<HTMLDivElement>) {
  return (
    <CardRoot layoutId={post.title}>
      <div className="work-ripple-outside">
        <motion.h5 className="title">
          <motion.a className="title" href={post.url}>{post.title}</motion.a>
        </motion.h5>
        {/* <motion.small onClick={() => { onTagClick(post.time) }}>
          <time>
            <i>{post.time}</i>
          </time>
        </motion.small> */}
        {<motion.small>
          <time>
            <i>{post.date && format(parseISO(post.date), 'yyyy LLLL')}</i>
          </time>
        </motion.small>}
        <div className="brief">
          <span>{(post.brief ?? '') + ' '}</span>
        </div>
        <div className="tags">
          {post.tags?.map((tag) => (
            <Tag
              tag={tag}
              onClick={() => { onTagClick(tag) }}
              key={tag}
            />
          ))}
        </div>
      </div>
      {post.liveLink !== undefined && <LiveLink href={post.liveLink} />}

    </CardRoot>
  )
})

const CardRoot = ({ layoutId, children }) => (
  <motion.article className="rect shadow-hover" layoutId={layoutId}
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.article>
)

export default PostCard
