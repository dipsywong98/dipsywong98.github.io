export const sanitizePath = (path: string) => path.replace(/\W+/g, '-').replace(/-$/, '')
