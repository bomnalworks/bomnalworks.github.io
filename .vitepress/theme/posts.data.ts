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

// 예약 발행: 날짜가 오늘(한국 시간)보다 뒤이거나 draft 인 글은 목록에서 뺀다. (config.mts 와 같은 기준)
const todayKst = new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 10)

export default createContentLoader('blog/*.md', {
  transform(raw): Post[] {
    return raw
      .filter((p) => p.frontmatter.date && !p.url.endsWith('/blog/'))
      .filter((p) => !p.frontmatter.draft)
      .filter((p) => new Date(p.frontmatter.date).toISOString().slice(0, 10) <= todayKst)
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
