# Alert 提示

用于页面中展示重要的提示信息，支持多种类型和可关闭。

<AlertDemo />

## 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| type | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` | 提示类型 |
| title | `string` | `''` | 标题 |
| description | `string` | `''` | 描述内容 |
| closable | `boolean` | `true` | 是否显示关闭按钮 |
| showIcon | `boolean` | `true` | 是否显示图标 |

## 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| close | -- | 关闭按钮点击时触发 |

## 插槽

| 插槽名 | 说明 |
|--------|------|
| default | 描述区域 |
| title | 标题区域 |
| icon | 自定义图标 |
