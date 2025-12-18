<!-- components/ContentArea.vue -->
<template>
  <div class="right" ref="scrollContainer">
    <div class="contentBox">
      <section
        v-for="section in sections"
        :key="section.id"
        :id="section.id"
        class="section"
      >
        {{ section.content }}
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const scrollContainer = ref<HTMLElement | null>(null)

defineExpose({
  scrollContainer
})

defineProps<{
  sections: { id: string; content: string }[]
}>()
</script>

<style scoped>
.right {
  flex: 2;
  height: 100%;
  overflow: hidden;
  color: #ffffff;
}
.contentBox {
  height: 100%;
}
.section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  scroll-snap-align: start;
}
</style>