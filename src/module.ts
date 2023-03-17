import { defineNuxtModule, addPlugin, createResolver, addImportsDir } from '@nuxt/kit'
import { defu } from 'defu'

export interface ModuleOptions {
  cacheKeyHeader?: string|null,
  cacheKeySeparator?: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt3-cache-keys',
    configKey: 'cachingHeaders',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  defaults: {
    cacheKeyHeader: null,
    cacheKeySeparator: ' '
  },
  setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    nuxt.options.runtimeConfig.app.cacheKeys = defu(nuxt.options.runtimeConfig.app.cacheKeys, options)

    addPlugin(resolve('runtime/plugin'))
    addImportsDir(resolve('runtime/composables'))
  }
})
