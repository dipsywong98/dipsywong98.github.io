import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import { mdxConfig } from './mdx.config.mjs'
import { sanitizePath } from './src/lib/sanitizePath'

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
      required: true,
    },
    time: {
      type: 'string',
      description: 'The date of the post',
    },
    description: {
      type: 'string',
      description: 'The description of the post',
    },
    isProject: {
      type: 'boolean',
    },
    githubLink: {
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
    urlAlias: {
      type: 'string',
      resolve: (doc) => `/posts/${sanitizePath(doc._raw.flattenedPath)}`,
    },
    url: {
      type: 'string',
      resolve: (doc) => `/posts/${sanitizePath(doc._raw.flattenedPath.replace(/^\d{4}-\d{2}-\d{2}_/, ''))}`,
    },
  },
}))

export default makeSource({
  contentDirPath: './public/posts',
  documentTypes: [Post],
  mdx: mdxConfig,
})
