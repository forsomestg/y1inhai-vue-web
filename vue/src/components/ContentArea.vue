<template>
  <div class="right" ref="scrollContainer">
    <div class="contentBox">
      <SectionContent
        v-for="id in sectionIds"
        :key="id"
        :section-id="id"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SectionContent from '@/components/SectionContent.vue'

defineProps<{
  sectionIds: string[]
}>()

const scrollContainer = ref<HTMLElement | null>(null)

defineExpose({
  scrollContainer
})
</script>

<style scoped>
.right {
  flex: 2;
  height: 100%;
  overflow: hidden;
  color: #000000;
}

.contentBox {
  height: 100%;
}
</style> 