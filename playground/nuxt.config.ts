export default defineNuxtConfig({
  modules: [
    '../src/module'
  ],
  cachingHeaders: {
    cacheKeyHeader: 'xkeys'
  }
})
