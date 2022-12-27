import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin, createResolver, addImportsDir } from '@nuxt/kit'
import defu from 'defu'

export interface ModuleOptions {
  cacheKeyHeader?: string|null,
  cacheKeySeparator?: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt3-cache-keys',
    configKey: 'cachingHeaders'
  },
  defaults: {
    cacheKeyHeader: null,
    cacheKeySeparator: ' '
  },
  setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))

    nuxt.options.build.transpile.push(runtimeDir)
    nuxt.options.runtimeConfig.app.cacheKeys = defu(nuxt.options.runtimeConfig.app.cacheKeys, options)

    addPlugin(resolve(runtimeDir, 'plugin'))
    addImportsDir(resolve(runtimeDir, 'composables'))
  }
})
