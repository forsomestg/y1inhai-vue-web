<!-- views/HomeView.vue -->
<template>
  <div class="container">
    <SideNav class="left" :sections="sections" :active-section="activeSection" @navigate="scrollToSection" />
    <ContentArea class="right" ref="contentAreaRef" :sections="sections" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import SideNav from '@/components/SideNav.vue'
import ContentArea from '@/components/ContentArea.vue'

const contentAreaRef = ref<InstanceType<typeof ContentArea> | null>(null)
const activeSection = ref<string>('home')

const sections = [
  { id: 'home', name: '首页', content: '首页内容' },
  { id: 'diary', name: '日记', content: '日记内容' },
  { id: 'calendar', name: '日历', content: '日历内容' },
  { id: 'about', name: '关于', content: '关于内容' }
]

let isScrolling = false

const scrollToSection = async (id: string) => {
  await nextTick()
  const container = contentAreaRef.value?.scrollContainer
  if (!container) return

  const index = sections.findIndex(s => s.id === id)
  if (index !== -1) {
    container.scrollTop = index * window.innerHeight
    activeSection.value = id
  }
}

const handleWheel = (e: WheelEvent) => {
  if (isScrolling) return
  isScrolling = true

  const currentIndex = sections.findIndex(s => s.id === activeSection.value)
  let nextIndex = currentIndex

  if (e.deltaY > 0 && currentIndex < sections.length - 1) {
    nextIndex++
  } else if (e.deltaY < 0 && currentIndex > 0) {
    nextIndex--
  }

  if (nextIndex !== currentIndex) {
    const nextSection = sections[nextIndex]
    if (nextSection) {
      scrollToSection(nextSection.id)
    }
  }

  setTimeout(() => {
    isScrolling = false
  }, 240)
}

onMounted(() => {
  const container = contentAreaRef.value?.scrollContainer
  if (container) {
    container.addEventListener('wheel', handleWheel, { passive: false })
  }
})

onUnmounted(() => {
  const container = contentAreaRef.value?.scrollContainer
  if (container) {
    container.removeEventListener('wheel', handleWheel)
  }
})
</script>

<style scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  margin: 0;
  padding: 0;
  overflow: hidden;
  z-index: 10;
  background-color: #222222;
}

.left {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.right {
  flex: 2;
  height: 100%;
  overflow: hidden;
}
</style>