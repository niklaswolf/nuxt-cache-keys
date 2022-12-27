import { useNuxtApp } from '#app'

export const useCacheKeys = () => {
  const nuxtApp = useNuxtApp()

  const addCacheKey = (keys: string|string[]) => {
    nuxtApp.$cacheApi.addCacheKeys(keys)
  }

  return { addCacheKey }
}
