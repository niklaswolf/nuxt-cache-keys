<script setup>
import { useCacheKeys } from '#imports'

const { addCacheKey } = useCacheKeys()
addCacheKey('hello')
addCacheKey('my-other-cache-tag') // should be deduplicated
</script>
<template>
  <h1>Hello World</h1>
</template>
