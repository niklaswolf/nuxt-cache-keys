import { defineNuxtConfig } from 'nuxt/config'
import CacheKeys from '..'

export default defineNuxtConfig({
  modules: [
    CacheKeys
  ],
  cachingHeaders: {
    cacheKeyHeader: 'xkeys'
  }
})
