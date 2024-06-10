import { IWork, getWorks } from "@/lib/getWorks"
import { fsync, writeFileSync, writeFile } from "fs"
import jsYaml from "js-yaml"

const saveJson = (fileName: string, json) => {
  writeFileSync(fileName, JSON.stringify(json))
}

const writeFileAsync = async (fileName, str) => {
  return new Promise(resolve => writeFile(fileName, str, resolve))
}

const concurrently = async <T>(fns: Array<() => Promise<T>>, limit: number): Promise<Array<T>> => {
  const results = []

  const popAndRun = async () => {
    const fn = fns.pop()
    if (fn) {
      const result = await fn()
      results.push(result)
      await popAndRun()
    }
  }

  await Promise.all(Array(limit).fill(0).map(popAndRun))

  return results
}

const downloadWork = async (folder: string, work: IWork) => {
  if (work.story) {
    const meta = jsYaml.dump(work)
    console.log(`downloading ${work.title}`)
    const res = await fetch(work.story.replace(/^\/\//, 'https://'))
    const text = await res.text()
    const reprocessedText = 
    `---
${meta}
---
${text.replace(/^---[\s\S]*?---/m, '')}
    `
    await writeFileAsync(`posts/${work.title}.mdx`, reprocessedText)
  }
}

export const syncContent = async (contentDir: string) => {
  const syncRun = async () => {
    const { allWorks, meta } = getWorks('works')
    const { allWorks: allBlog, meta: blogMeta } = getWorks('blog')

    // writeFileSync('toc/works.yaml', jsYaml.dump(allWorks))
    // writeFileSync('toc/blogs.yaml', jsYaml.dump(allBlog))

    await concurrently(allWorks.map(work => async () => {
      await downloadWork('works', work)
    }), 4)

    await concurrently(allBlog.map(work => async () => {
      await downloadWork('blog', work)
    }), 4)
  }

  await syncRun()
}

const pauseMs = async (ms) => {
  await new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

const main = async () => {
  await syncContent('posts')
  // await concurrently(Array(100).fill('').map((_, k) => async () => {
  //   const wait = Math.random() * 5000 + 1000
  //   console.log(`${k} waiting ${wait}`)
  //   await pauseMs(wait)
  //   console.log(`${k} waited ${wait}`)
  // }), 10)
}

main()
