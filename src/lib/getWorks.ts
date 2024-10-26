// import jsyaml from 'js-yaml'
// import { readFileSync } from 'fs'
// import jsYaml from 'js-yaml'
import works from './works.yaml'
import blog from './blogs.yaml'

const switcher = {works, blog}

export interface IWork {
  meta?: false
  title: string
  titleLink?: string
  liveLink?: string
  brief?: string
  time?: string
  date?: string
  tags?: string[]
  story?: string
  url?: string
}

export interface IMeta {
  meta: true
  description: string
}

interface WorkCollection {
  allWorks: IWork[]
  meta: IMeta
}

const cached = {} satisfies Record<string, WorkCollection>

export const getWorks = (category: string): WorkCollection => {
  if (category in cached) {
    return cached[category]
  }
  const v = switcher[category]
  const allWorks = v.filter(({ meta }) => meta !== true) as IWork[]
  const meta = v.find(({ meta }) => meta) as IMeta
  const collection = {
    allWorks,
    meta
  }
  cached[category] = collection
  return collection
}
