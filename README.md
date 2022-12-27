# Nuxt Cache Keys
Nuxt module, that provides a system to set cache-keys for later use in e.g. a full-page cache like Varnish or Fastly.

## Installation
- NPM: `npm install nuxt-cache-keys`
- pnpm: `pnpm install nuxt-cache-keys`
- Yarn: `yarn add nuxt-cache-keys`

## Usage

### Add the module
Add the module in your `nuxt.config.ts`:
```js
{
    modules: [
      'nuxt-cache-keys'
    ],
      
    cachingHeaders: {
        cacheKeyHeader: 'xkeys',
        cacheKeySeparator: ',' // optional, default is a space
    }
}
```

### Use the composable

```js
export default {
    setup(props) {
      const { addCacheKey } = useCacheKeys()
      // add cache tag as string
      addCacheKey('my-cache-tag')
      // add multiple cache tags as array
      addCacheKey(['my-cache-tag', 'my-other-cache-tag'])
    }
}
```
The module/plugin will then aggregate and deduplicate all cache keys on the page and attach them to the HTTP response 
as a header.
Example HTTP-Response headers:
```
xkeys: my-cache-tag my-other-cache-tag
```
or
```
surrogate-key: my-cache-tag my-other-cache-tag
```

## Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.
