<template>
  <div class="diary-list">
    <h1>我的日记</h1>
    <ul>
      <li v-for="id in diaryIds" :key="id">
        <router-link :to="`/diary/${id}`">
          {{ formatTitle(id) }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  diaryIds: string[]
}>()

const formatTitle = (fileName: string): string => {
  const match = fileName.match(/Diary(\d{4})(\d{2})(\d{2})/)
  if (match) return `${match[1]}-${match[2]}-${match[3]}`
  return fileName
}
</script>