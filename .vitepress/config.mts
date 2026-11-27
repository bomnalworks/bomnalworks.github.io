import { defineConfig } from 'vitepress'
import { readdirSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

// 예약 발행: blog/*.md 의 date 가 오늘(한국 시간)보다 뒤면 빌드에서 뺀다.
// 매일 아침 예약 빌드가 돌면서 날짜가 된 글이 자동으로 공개된다. (.github/workflows/deploy.yml 의 schedule)
// draft: true 인 글은 날짜와 상관없이 뺀다.
const blogDir = fileURLToPath(new URL('../blog/', import.meta.url))
const todayKst = new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 10)
const scheduled = readdirSync(blogDir)
  .filter((f) => f.endsWith('.md') && f !== 'index.md')
  .filter((f) => {
    const head = readFileSync(blogDir + f, 'utf-8').split(/^---\s*$/m)[1] ?? ''
    const date = head.match(/^date:\s*['"]?(\d{4}-\d{2}-\d{2})/m)?.[1]
    const draft = /^draft:\s*true\s*$/m.test(head)
    return draft || !date || date > todayKst
  })
  .map((f) => `blog/${f}`)

const PLAY_URL = 'https://play.bomnalworks.com/'   // 패밀리 사이트 (메뉴와 푸터)

// 애드센스 승인을 받으면 아래 두 값을 채운다. 비어 있으면 광고 자리는 화면에 아무것도 그리지 않는다.
const ADSENSE_CLIENT = ''   // 예: 'ca-pub-0000000000000000'
const ADSENSE_SLOT = ''     // 글 하단 광고 단위 ID

export default defineConfig({
  lang: 'ko-KR',
  title: '봄날웍스',
  titleTemplate: ':title | 봄날웍스',
  description: '작게 만들고, 숫자 그대로 적습니다. 작은 사업체의 업무 시스템과 0원 홈페이지를 만들고, 그 과정을 전자책과 블로그에 남깁니다.',
  cleanUrls: true,
  lastUpdated: false,
  srcExclude: ['README.md', ...scheduled],
  sitemap: { hostname: 'https://bomnalworks.com' },
  head: [
    // 브랜드 색·로고: bomnal/brand/BRAND.md (로고 원본 brand/logo/, 공유 이미지 brand/src/og.html)
    ['meta', { name: 'theme-color', content: '#f7f4ed', media: '(prefers-color-scheme: light)' }],
    ['meta', { name: 'theme-color', content: '#1e1a16', media: '(prefers-color-scheme: dark)' }],
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { property: 'og:image', content: 'https://bomnalworks.com/og.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'og:site_name', content: '봄날웍스' }],
    ['meta', { property: 'og:locale', content: 'ko_KR' }],
    ...(ADSENSE_CLIENT
      ? [['script', { async: '', crossorigin: 'anonymous', src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}` }] as [string, Record<string, string>]]
      : [])
  ],
  themeConfig: {
    siteTitle: '봄날웍스',
    logo: { light: '/logo/symbol.svg', dark: '/logo/symbol-ivory.svg', alt: '' },
    // 손 · 책 · 놀이 (BRAND.md 1장 브랜드 구조) + 블로그(기록)
    nav: [
      { text: '손', link: '/work', activeMatch: '^/work' },
      { text: '책', link: '/books', activeMatch: '^/books' },
      { text: '놀이', link: PLAY_URL },
      { text: '기록', link: '/blog/', activeMatch: '^/blog/' }
    ],
    outline: { label: '이 글의 순서', level: [2, 3] },
    docFooter: { prev: '이전 글', next: '다음 글' },
    darkModeSwitchLabel: '화면 밝기',
    returnToTopLabel: '맨 위로',
    sidebarMenuLabel: '메뉴',
    footer: {
      message: `작게 만들고, 숫자 그대로 적습니다.<br>봄날의곰 (Bomnal Works) · 사업자등록번호 264-01-02496 · contact@bomnalworks.com<br>놀이 · <a href="${PLAY_URL}">봄날 운세 오락실</a>`,
      copyright: '© 2026 Bomnal Works'
    },
    // 테마 컴포넌트가 읽는 값
    // @ts-ignore
    adsense: { client: ADSENSE_CLIENT, slot: ADSENSE_SLOT }
  }
})
