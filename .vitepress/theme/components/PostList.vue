<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { data as posts } from '../posts.data'

const props = defineProps<{ limit?: number }>()
const list = computed(() => (props.limit ? posts.slice(0, props.limit) : posts))
</script>

<template>
  <ul class="post-list">
    <li v-for="p in list" :key="p.url">
      <a :href="withBase(p.url)">
        <span class="post-meta">{{ p.date }}<template v-if="p.series"> · {{ p.series }}</template></span>
        <strong class="post-title">{{ p.title }}</strong>
        <span v-if="p.summary" class="post-summary">{{ p.summary }}</span>
      </a>
    </li>
    <li v-if="!list.length" class="post-empty">아직 글이 없습니다.</li>
  </ul>
</template>
