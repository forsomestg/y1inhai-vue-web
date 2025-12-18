// src/router/diaryRoutes.ts
import type { RouteRecordRaw } from 'vue-router'
import type { DefineComponent } from 'vue'

// 注意：这里用真实路径，不要依赖 @ 别名在 key 中
const diaryModules: Record<string, { default: DefineComponent }> = 
  import.meta.glob('../views/diary/*.vue', { eager: true })

// 从真实 key 中提取 id 和组件
const diaryDetailRoutes: RouteRecordRaw[] = []

Object.entries(diaryModules).forEach(([fullPath, module]) => {
  // fullPath 示例: "src/views/diary/Diary20251218.vue"
  const match = fullPath.match(/([^/]+)\.vue$/)
  if (match) {
    const id = match[1]
    diaryDetailRoutes.push({
      path: `/diary/${id}`,
      component: module.default
    })
  }
})

// 提取所有 id 用于列表页
const diaryIds = diaryDetailRoutes.map(route => route.path.split('/').pop()!)

const diaryListRoute: RouteRecordRaw = {
  path: '/diary',
  component: () => import('@/views/DiaryView.vue'),
  props: { diaryIds }
}

export const diaryRoutes = [diaryListRoute, ...diaryDetailRoutes]