<template>
  <div>
    Nuxt module playground!
    <HelloWorld/>
  </div>
</template>

<script setup>
const { addCacheKey } = useCacheKeys()
addCacheKey(['my-cache-tag', 'my-other-cache-tag'])
</script>
