import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import { mdxConfig } from './mdx.config.mjs'

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md*`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
    },
    time: {
      type: 'string',
      description: 'The date of the post',
    },
    description: {
      type: 'string',
      description: 'The description of the post',
    },
    titleLink: {
      type: 'string',
    },
    liveLink: {
      type: 'string'
    },
    brief: {
      type: 'string'
    },
    tags: {
      type: 'list',
      of: {
        type: 'string'
      }
    },
    story: {
      type: 'string'
    },
    id: {
      type: 'string'
    },
    more: {
      type: 'boolean'
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: mdxConfig,
})
