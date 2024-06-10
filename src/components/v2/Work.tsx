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
  const [loading, setLoading] = useState(false)
  const [story, setStory] = useState('')

  const onRippleAnimate = (): void => {
    const title = `${work.title} | ${category} - Dipsyland`
    document.title = title
    // window.history.pushState('', title, `#${encodeURIComponent(work.title)}`)
    if ('story' in work) {
      setLoading(true)
      const storyUrl = work.story
      if (typeof storyUrl === 'string') {
        fetch(storyUrl)
          .then(async res => await res.text())
          .then(text => {
            setStory(text.replace(/^---(\n.*?)*?---/gm, ''))
          })
          .catch(() => {
            setStory(`unable to fetch content from ${storyUrl}`)
          })
          .finally(() => {
            setLoading(false)
          })
      } else {
        // TODO - static load of mdx
        // fetch(`/${category}/${work.title}.md`)
        //   .then(async res => await res.text())
        //   .then(text => story = text)
        //   .finally(() => loading = false)
      }
    }
  }

  const onClose = (): void => {
    const title = 'Dipsyland'
    document.title = title
    // window.history.pushState('', title, '/')
  }

  return (
    <motion.div className="rect shadow-hover" id={work.id} layoutId={work.id}
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
