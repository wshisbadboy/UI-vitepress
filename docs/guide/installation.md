# 安装

## 包管理器

```bash
# npm
npm install my-ui-lib

# yarn
yarn add my-ui-lib

# pnpm
pnpm add my-ui-lib
```

## 对等依赖

My UI Lib 需要 Vue 3 作为对等依赖：

```json
{
  "dependencies": {
    "vue": "^3.5.0"
  }
}
```

## 全局注册

```js
import { createApp } from 'vue'
import MyUILib from 'my-ui-lib'
import 'my-ui-lib/dist/my-ui-lib.css'
import App from './App.vue'

const app = createApp(App)
app.use(MyUILib)
app.mount('#app')
```

## 自动导入（推荐）

使用 [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components) 可以实现组件按需自动导入。

```js
// vite.config.js
import Components from 'unplugin-vue-components/vite'
import { MyResolver } from './resolvers'

export default {
  plugins: [
    Components({
      resolvers: [MyResolver()],
    }),
  ],
}
```
