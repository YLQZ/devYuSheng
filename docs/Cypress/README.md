# Cypress 赛普拉斯自动化测试

## vue 3.0 的问题 

babel.config.js

```js
module.exports = api => {
  if (api.cache.using(() => process.env.CYPRESS_ENV)) {
    return {}
  }
  return {
    presets: [
      '@vue/app'
    ]
  }
}
```