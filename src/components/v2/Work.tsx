import React, { forwardRef, useState } from 'react'
import { Tag } from './Tag'
import { type IWork } from '../../lib/getWorks'
import './Work.scss'
import { motion } from 'framer-motion'
import { LiveLink } from './LiveLink'

interface Props {
  work: IWork
  category: string
  onTagClick: (tag: string) => void
}

const WorkComponent: React.FC<Props> = forwardRef(function WorkComponent ({ work, onTagClick, category }: Props, ref: React.ForwardedRef<HTMLDivElement>) {
  const showMore = 'story' in work && 'more' in work

  return (
    <motion.div className="rect shadow-hover" id={work.title} layoutId={work.title}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        >
        <div className="work-ripple-outside">
          <motion.h5 className="title">
          <motion.a className="title prevent-ripple-full-screen" href={`/posts/${work.title}`}>{work.title}</motion.a>
          </motion.h5>
          <motion.small className="prevent-ripple-full-screen" onClick={() => { onTagClick(work.time) }}>
            <i>{work.time}</i>
          </motion.small>
          <div className="brief">
            <span>{(work.brief ?? '') + ' '}</span>
            {showMore ? <a className="title" href={`/posts/${work.title}`}>more</a> : null}
          </div>
          <div className="tags prevent-ripple-full-screen">
            {work.tags?.map((tag) => (
              <Tag
                  tag={tag}
                  onClick={() => { onTagClick(tag) }}
                  key={tag}
                />
            ))}
          </div>
        </div>
      {work.liveLink !== undefined && <LiveLink href={work.liveLink} />}

    </motion.div>
  )
})

export default WorkComponent
