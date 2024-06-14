'use client'
import React, { useMemo, useState } from 'react'
import Work from './Work'
// import ChipInput from './ChipInput'
// import getWorks from '../lib/getWorks'
// import updateScroll from '../lib/updateScroll'
// import Tag from './Tag'
import { Markdown } from './Markdown'
import './Works.scss'
import './Work.scss'
import type { IMeta, IWork } from '../../lib/getWorks'
import { ChipInput } from './ChipInput'
import { AnimatePresence, motion } from 'framer-motion'
import { sanitizePath } from '@/lib/sanitizePath'

interface Props {
  category: string

  defaultFilters: string[]

  allWorks: IWork[]

  meta: IMeta
}

const isAnchorElement = (something: unknown): something is HTMLAnchorElement => (
  typeof something === 'object' &&
   something !== null &&
    'tagName' in something &&
     something?.tagName === 'A')

export function Works ({ allWorks, category, defaultFilters, meta }: Props): React.ReactNode {
  const [filters, setFilters] = useState(defaultFilters)
  const works = useMemo(() => {
    if (filters.length === 0) {
      return allWorks
    } else {
      return allWorks.filter(({ tags = [], time, title }) => {
        const template = tags
          .concat([time, title])
          .filter((b) => b)
          .map((s) => s.toLowerCase())
        return (
          filters.filter((f) => template.includes(f.toLowerCase()))
            .length === filters.length
        )
      })
    }
  }, [allWorks, filters])
  const Category = useMemo(() => category[0].toUpperCase() + category.substring(1), [])
  const allTags = useMemo(() => {
    return allWorks
      .map(({ title, time, tags = [] }) => tags.concat(time, title))
      .flat()
      .filter((t) => typeof t !== 'undefined')
      .sort()
      .filter((t, k, s) => t !== '' && s.indexOf(t) === k)
  }, [allWorks])

  const onTagClick = (tag: string, reset = false): void => {
    if (reset) {
      setFilters([])
    }
    if (tag !== '' && !filters.includes(tag)) {
      setFilters([...filters, tag])
      // this.$refs.top.scrollIntoView()
    }
  }

  const onDescriptionClick: React.MouseEventHandler = ({ target }) => {
    if (isAnchorElement(target)) {
      const tag = target.innerText
      if (tag !== 'all') {
        onTagClick(tag, true)
      } else {
        onTagClick('', true)
      }
    }
  }

  const tagGraph = works.reduce<Record<string, Set<string>>>((graph, work) => {
    return work.tags?.reduce((graph, tag) => ({
      ...graph,
      [tag]: new Set(Array.from(graph[tag] ?? []).concat(work.tags ?? []).concat([work.title])),
      [work.title]: new Set(Array.from(graph[tag] ?? []).concat(work.tags ?? []).concat([work.title]))
    }), graph) ?? graph
  }, {})

  return (
    <div className="works card">
      <div className="container-el">
        <div className="my-work">
          <h1>My { Category }</h1>
          <div className="description" onClick={onDescriptionClick}>
            <Markdown>{meta.description}</Markdown>
          </div>
          <div className="filter">
            <div className="label">Filter:</div>
            <ChipInput availables={allTags} value={filters} onChange={setFilters} tagGraph={tagGraph}></ChipInput>
          </div>
          <div className="works">
            <AnimatePresence>
              {works.map((work) => <Work work={work} onTagClick={onTagClick} category={category} key={sanitizePath(work.title)}></Work>)}
            </AnimatePresence>
            <div className="placeholder"></div>
            <div className="placeholder"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
