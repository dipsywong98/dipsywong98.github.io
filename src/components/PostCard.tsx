import React, { forwardRef } from 'react'
import { Tag } from './v2/Tag'
import './v2/Work.scss'
import { motion } from 'framer-motion'
import { LiveLink } from './v2/LiveLink'
import { format, parseISO } from 'date-fns'
import { Post } from 'contentlayer/generated'
import { RxGithubLogo } from "react-icons/rx";

interface Props {
  post: Post
  onTagClick: (tag: string) => void
  dateFormat: string
}

const PostCard: React.FC<Props> = forwardRef(function WorkComponent({ post, onTagClick, dateFormat  }: Props, ref: React.ForwardedRef<HTMLDivElement>) {
  return (
    <CardRoot layoutId={post.title}>
      <div className="work-ripple-outside">
        <motion.h5 className="title flex items-center space-x-2">
          <motion.a className="title" href={post.url}>{post.title}</motion.a>
          {post.githubLink && <motion.a className="text-primary-background hover:text-muted-foreground hover:border-b-1" href={post.githubLink}><RxGithubLogo /></motion.a>}
        </motion.h5>
        {<motion.small>
          <time>
            <i>{post.date && format(parseISO(post.date), dateFormat)}</i>
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
