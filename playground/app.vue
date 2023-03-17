<template>
  <div>
    Nuxt module playground!
    <HelloWorld />
  </div>
</template>

<script setup lang="ts">
import { useCacheKeys } from '#imports'

const { addCacheKey } = useCacheKeys()
addCacheKey(['my-cache-tag', 'my-other-cache-tag'])
</script>
