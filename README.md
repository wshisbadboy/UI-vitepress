# UI-vitepress

My UI Lib 组件库的 VitePress 文档站点，提供组件的交互式演示与 API 文档。

## 技术栈

- [VitePress](https://vitepress.dev/) — 基于 Vite 的静态站点生成器
- [Vue 3](https://vuejs.org/) — 组件库底层框架
- [ui-lib](../ui-lib) — 同仓库内的 Vue 3 组件库

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
│   │       └── CollapseDemo.vue
│   ├── index.md                # 首页
│   ├── guide/                  # 指南
│   │   ├── index.md            # 快速上手
│   │   └── installation.md     # 安装指南
│   └── components/             # 组件文档
│       ├── index.md            # 组件总览
│       ├── button.md           # Button 按钮
│       └── collapse.md         # Collapse 折叠面板
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

## 已文档化的组件

| 组件 | 说明 |
|------|------|
| Button 按钮 | 支持 primary / secondary / outline / text 四种变体，三种尺寸，禁用与加载状态 |
| Collapse 折叠面板 | 支持多面板展开、手风琴模式、禁用状态、自定义标题 |

每个组件文档都包含可交互的实时演示和完整的 API 表格。
