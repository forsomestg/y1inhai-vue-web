<template>
  <section :id="sectionId" class="section">
    <div v-if="sectionId === 'diary' && latestDiary" class="diary-content">
      <h1 class="diary-title">{{ latestDiary.title }}</h1>
      <div class="diary-body">{{ latestDiary.content }}</div>
    </div>
    <div v-else>
      {{ content }}
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getLatestDiary } from '@/views/diaries'

const props = defineProps<{ sectionId: string }>()

const contentMap: Record<string, string> = {
  home: '欢迎来到首页',
  diary: '',
  calendar: '查看重要日期',
  about: '关于我们团队'
}

const content = computed(() => {
  return contentMap[props.sectionId] || '内容未找到'
})

const latestDiary = props.sectionId === 'diary' ? getLatestDiary() : null
</script>

<style scoped>
.section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  padding: 8%;
  box-sizing: border-box;
  overflow: hidden;
}

.diary-content {
  width: 100%;
  height: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.diary-title {
  height: 4rem;
  font-size: 3rem;
  font-weight: 600;
  color: #1cb198;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  padding: 1rem;
}

.diary-body {
  flex: 1;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.6;
  color: #000000;
  overflow-y: hidden;
  white-space: pre-wrap;
  box-sizing: border-box;
}
</style>