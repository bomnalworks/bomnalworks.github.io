import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import PostList from './components/PostList.vue'
import AdSlot from './components/AdSlot.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, { 'doc-after': () => h(AdSlot) }),
  enhanceApp({ app }) {
    app.component('PostList', PostList)
  }
} satisfies Theme
