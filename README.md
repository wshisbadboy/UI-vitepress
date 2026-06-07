# UI-vitepress

[![npm version](https://img.shields.io/npm/v/wshisbadboy-ui-lib?color=3b82f6)](https://www.npmjs.com/package/wshisbadboy-ui-lib)
[![license](https://img.shields.io/npm/l/wshisbadboy-ui-lib)](./LICENSE)

My UI Lib 组件库的 VitePress 文档站点。组件库已发布为 npm 包 [`wshisbadboy-ui-lib`](https://www.npmjs.com/package/wshisbadboy-ui-lib)，文档站点部署在 [GitHub Pages](https://wshisbadboy.github.io/UI-vitepress/)。

## 安装

```bash
npm install wshisbadboy-ui-lib
# 或
pnpm add wshisbadboy-ui-lib
# 或
yarn add wshisbadboy-ui-lib
```

## 快速上手

```js
import { createApp } from 'vue'
import UI from 'wshisbadboy-ui-lib'
import 'wshisbadboy-ui-lib/dist/wshisbadboy-ui-lib.css'

const app = createApp(App)
app.use(UI)
```

```html
<template>
  <MyButton variant="primary">点击我</MyButton>
  <MyAlert type="success" title="成功" description="操作已完成" />
  <MyCollapse>
    <MyCollapseItem title="标题" name="1">内容</MyCollapseItem>
  </MyCollapse>
</template>
```

也可按需引入：

```js
import { Button, Alert, Message } from 'wshisbadboy-ui-lib'
import 'wshisbadboy-ui-lib/dist/wshisbadboy-ui-lib.css'

// 命令式调用 Message
Message.success('操作成功')
```

## 组件列表

| 组件 | 说明 |
|------|------|
| Button 按钮 | 支持 primary / secondary / outline / text 四种变体，三种尺寸，禁用与加载状态 |
| Alert 提示 | 支持 info / success / warning / error 四种类型，可关闭，支持自定义标题和插槽 |
| Message 消息提示 | 命令式 API 的全局消息通知，支持纯文本和 VNode 渲染，自动消失 |
| Collapse 折叠面板 | 支持多面板展开、手风琴模式、禁用状态、自定义标题 |

## 文档

在线文档：[wshisbadboy.github.io/UI-vitepress](https://wshisbadboy.github.io/UI-vitepress/)

每个组件文档都包含可交互的实时演示和完整的 API 表格。

## 技术栈

- [VitePress](https://vitepress.dev/) — 基于 Vite 的静态站点生成器
- [Vue 3](https://vuejs.org/) — 组件库底层框架
- [Vite](https://vitejs.dev/) — 构建工具

## 目录结构

```
UI-vitepress/
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts          # VitePress 站点配置
│   │   ├── theme/              # 自定义主题
│   │   │   ├── index.ts        # 主题入口，注册全局组件
│   │   │   ├── DemoBlock.vue   # 演示块容器组件
│   │   │   └── custom.css      # CSS 变量映射
│   │   └── components/         # 各组件 Demo 示例
│   │       ├── ButtonDemo.vue
│   │       ├── AlertDemo.vue
│   │       ├── MessageDemo.vue
│   │       └── CollapseDemo.vue
│   ├── index.md                # 首页
│   ├── guide/                  # 指南
│   │   ├── index.md            # 快速上手
│   │   └── installation.md     # 安装指南
│   └── components/             # 组件文档
│       ├── index.md            # 组件总览
│       ├── button.md           # Button 按钮
│       ├── alert.md            # Alert 提示
│       ├── message.md          # Message 消息提示
│       └── collapse.md         # Collapse 折叠面板
├── src/                        # ui-lib 组件源码（自包含）
│   ├── index.js
│   └── components/
│       ├── Button/
│       ├── Alert/
│       ├── Message/
│       └── Collapse/
├── .github/workflows/
│   └── deploy.yml              # GitHub Pages 自动部署
├── package.json
└── README.md
```

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```
