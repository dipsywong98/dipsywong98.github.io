import { readdirSync, readFileSync, renameSync } from "fs";
import {allPosts} from '.contentlayer/generated'

const main = async () => {
  allPosts.map(post => {
    const path = post._raw.sourceFilePath
    // renameSync()
  })
}
