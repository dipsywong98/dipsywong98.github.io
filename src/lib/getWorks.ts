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
  // const path = `${__dirname}/${category}.yaml`
  // const yaml = readFileSync(path, {encoding: 'utf-8'})
  // const v = jsYaml.load(yaml) as Array<IMeta | IWork>
  const v = switcher[category]
  const allWorks = v.filter(({ meta }) => meta !== true).map((work) => ({ ...work, id: encodeURIComponent((work as IWork).title) })) as IWork[]
  const meta = v.find(({ meta }) => meta) as IMeta
  const collection = {
    allWorks,
    meta
  }
  cached[category] = collection
  return collection

  // const url = `http://localhost:3000/${category}.yml`
  // let url
  // switch (category) {
  //   case 'works':
  //     url = 'https://hackmd.io/Nyb5TGn9T72GIu-IHeJdZQ/download'
  //     break
  //   case 'blog':
  //     url = 'https://hackmd.io/sRaU_QDUQymyE43tRbgmig/download'
  //     break
  // }
  // return await fetch(url, {
  //   method: 'GET',
  //   cache: 'no-cache'
  // })
  //   .then(async res => await res.text())
  //   .then(text => jsyaml.load(text) as Array<IMeta | IWork>)
  //   .then((v) => {
  //     const allWorks = v.filter(({ meta }) => meta !== true).map((work) => ({ ...work, id: encodeURIComponent((work as IWork).title) })) as IWork[]
  //     const meta = v.find(({ meta }) => meta) as IMeta
  //     // allWorks.forEach(({ title }) => {
  //     //   if (encodeURIComponent(title) === this.hash) {
  //     //     this.filters = [title]
  //     //   }
  //     // })
  //     const collection = {
  //       allWorks,
  //       meta
  //     }
  //     cached[category] = collection
  //     return collection
  //   })
  // .then(() => {
  //   this.$nextTick(() => {
  //     updateScroll()
  //   })
  // })
}
