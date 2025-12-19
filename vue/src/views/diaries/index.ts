import diary20251218 from './20251218'

const diaries = [diary20251218]

// 按日期倒序，取最新
export const getLatestDiary = () => {
  return diaries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]
}