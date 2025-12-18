<!-- src/components/ContentDisplay.vue -->
<template>
  <div class="content-display">
    <div class="header">
      {{ title }}
    </div>
    <div class="body">
      {{ summary }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  summary: string
}>()
</script>

<style scoped>
.content-display {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: box-shadow 0.2s ease;
}

.content-display:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.header {
  padding: 0.75rem 1rem;
  background-color: #f8f9fa;
  font-weight: 600;
  font-size: 0.95rem;
  color: #2c3e50;
  border-bottom: 1px solid #eee;
}

.body {
  padding: 1rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #333;
  min-height: 3rem; /* 防止太短 */
}
</style>