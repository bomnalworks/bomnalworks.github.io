import { defineConfig } from 'vitepress'

// 애드센스 승인을 받으면 아래 두 값을 채운다. 비어 있으면 광고 자리는 화면에 아무것도 그리지 않는다.
const ADSENSE_CLIENT = ''   // 예: 'ca-pub-0000000000000000'
const ADSENSE_SLOT = ''     // 글 하단 광고 단위 ID

export default defineConfig({
  lang: 'ko-KR',
  title: '봄날웍스',
  titleTemplate: ':title | 봄날웍스',
  description: '작은 사업체의 업무 시스템과 자동화를 만듭니다. 만드는 과정은 블로그에 그대로 적습니다.',
  cleanUrls: true,
  lastUpdated: false,
  srcExclude: ['README.md'],
  sitemap: { hostname: 'https://bomnalworks.com' },
  head: [
    ['meta', { name: 'theme-color', content: '#b5573a' }],
    ['meta', { property: 'og:site_name', content: '봄날웍스' }],
    ['meta', { property: 'og:locale', content: 'ko_KR' }],
    ...(ADSENSE_CLIENT
      ? [['script', { async: '', crossorigin: 'anonymous', src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}` }] as [string, Record<string, string>]]
      : [])
  ],
  themeConfig: {
    siteTitle: '봄날웍스',
    nav: [
      { text: '하는 일', link: '/#what' },
      { text: '블로그', link: '/blog/' },
      { text: '문의', link: '/#contact' }
    ],
    outline: { label: '이 글의 순서', level: [2, 3] },
    docFooter: { prev: '이전 글', next: '다음 글' },
    darkModeSwitchLabel: '화면 밝기',
    returnToTopLabel: '맨 위로',
    sidebarMenuLabel: '메뉴',
    footer: {
      message: '봄날의곰 (Bomnal Works) · 사업자등록번호 264-01-02496 · contact@bomnalworks.com',
      copyright: '© 2026 Bomnal Works'
    },
    // 테마 컴포넌트가 읽는 값
    // @ts-ignore
    adsense: { client: ADSENSE_CLIENT, slot: ADSENSE_SLOT }
  }
})
