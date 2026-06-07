# 快速上手

My UI Lib 是一个轻量级的 Vue 3 组件库。

## 安装

```bash
npm install my-ui-lib
```

## 使用方式

### 全量引入

```js
import { createApp } from 'vue'
import MyUILib from 'my-ui-lib'
import 'my-ui-lib/dist/my-ui-lib.css'

const app = createApp(App)
app.use(MyUILib)
```

### 按需引入

```js
import { Button, Collapse, CollapseItem } from 'my-ui-lib'
import 'my-ui-lib/dist/my-ui-lib.css'
```
