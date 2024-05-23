import jsyaml from 'js-yaml'

export interface IWork {
  id: string
  meta?: false
  title: string
  titleLink?: string
  liveLink?: string
  brief?: string
  time: string
  tags?: string[]
}

export interface IMeta {
  meta: true
  description: string
}

export const getWorks = async (category: string): Promise<{ allWorks: IWork[], meta: IMeta }> => {
  const url = `http://localhost:3000/${category}.yml`
  // switch (category) {
  //   case 'works':
  //     url = 'https://hackmd.io/Nyb5TGn9T72GIu-IHeJdZQ/download'
  //     break
  //   case 'blog':
  //     url = 'https://hackmd.io/sRaU_QDUQymyE43tRbgmig/download'
  //     break
  // }
  return await fetch(url, {
    method: 'GET',
    cache: 'no-cache'
  })
    .then(async res => await res.text())
    .then(text => jsyaml.load(text) as Array<IMeta | IWork>)
    .then((v) => {
      const allWorks = v.filter(({ meta }) => meta !== true).map((work) => ({ ...work, id: encodeURIComponent((work as IWork).title) })) as IWork[]
      const meta = v.find(({ meta }) => meta) as IMeta
      // allWorks.forEach(({ title }) => {
      //   if (encodeURIComponent(title) === this.hash) {
      //     this.filters = [title]
      //   }
      // })
      return {
        allWorks,
        meta
      }
    })
  // .then(() => {
  //   this.$nextTick(() => {
  //     updateScroll()
  //   })
  // })
}
