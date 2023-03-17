import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const cache = {
    keys: new Set<string>()
  }

  const addCacheKeys = (keys: string | string[]) => {
    const keysToAdd = !Array.isArray(keys) ? [keys] : keys
    keysToAdd.forEach(key => cache.keys.add(key))
  }

  const getCacheKeys = (): string[] => Array.from(cache.keys.values())

  const cacheApi = { addCacheKeys, getCacheKeys }

  nuxtApp.hook('app:rendered', (renderContext) => {
    if (renderContext.ssrContext) {
      const { cacheKeyHeader, cacheKeySeparator } = renderContext.ssrContext.runtimeConfig.app.cacheKeys
      if (!cacheKeyHeader) {
        console.warn('No cacheKeyHeader provided in configuration, skipping setting the header')
        return
      }
      if (!renderContext.ssrContext.event.node.res.headersSent) {
        renderContext.ssrContext.event.node.res.setHeader(cacheKeyHeader, getCacheKeys().join(cacheKeySeparator))
      }
    }
  })

  return {
    provide: {
      cacheApi
    }
  }
})
