import { defineConfig } from 'vitepress'
import { resolve } from 'path'

export default defineConfig({
  title: 'My UI Lib',
  description: '一个 Vue 3 组件库文档',
  base: '/UI-vitepress/',
  vite: {
    resolve: {
    alias: {
      'ui-lib': resolve(__dirname, '../../src'),
    },
    },
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '快速上手', link: '/guide/' },
            { text: '安装', link: '/guide/installation' },
          ],
        },
      ],
      '/components/': [
        {
          text: '组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Alert 提示', link: '/components/alert' },
            { text: 'Message 消息提示', link: '/components/message' },
            { text: 'Collapse 折叠面板', link: '/components/collapse' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wshisbadboy/UI-vitepress' },
    ],
    outline: {
      label: '页面导航',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
  },
})
