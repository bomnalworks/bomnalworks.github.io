import { createContentLoader } from 'vitepress'

export interface Post {
  title: string
  url: string
  date: string
  summary: string
  series?: string
}

declare const data: Post[]
export { data }

export default createContentLoader('blog/*.md', {
  transform(raw): Post[] {
    return raw
      .filter((p) => p.frontmatter.date && !p.url.endsWith('/blog/'))
      .map((p) => ({
        title: p.frontmatter.title,
        url: p.url,
        date: new Date(p.frontmatter.date).toISOString().slice(0, 10),
        summary: p.frontmatter.description ?? '',
        series: p.frontmatter.series
      }))
      .sort((a, b) => (a.date < b.date ? 1 : -1))
  }
})
