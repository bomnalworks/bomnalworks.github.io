<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useData } from 'vitepress'

// 광고는 블로그 글 본문 아래 한 곳에만 둔다. 홈과 목록에는 두지 않는다.
const { theme, page } = useData()
const ad = computed(() => (theme.value as any).adsense ?? {})
const show = computed(
  () => !!ad.value.client && !!ad.value.slot && page.value.relativePath.startsWith('blog/') && page.value.relativePath !== 'blog/index.md'
)

onMounted(() => {
  if (!show.value) return
  try {
    ;((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})
  } catch {}
})
</script>

<template>
  <aside v-if="show" class="ad-slot" aria-label="광고">
    <span class="ad-label">광고</span>
    <ins
      class="adsbygoogle"
      style="display:block"
      :data-ad-client="ad.client"
      :data-ad-slot="ad.slot"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  </aside>
</template>
