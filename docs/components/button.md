# Button 按钮

支持多种样式变体、尺寸和状态的按钮组件。

## 基础用法

使用 variant 属性定义按钮样式类型。

<ButtonDemo />

## 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| variant | `'primary' \| 'secondary' \| 'outline' \| 'text'` | `'primary'` | 按钮变体 |
| size | `'small' \| 'medium' \| 'large'` | `'medium'` | 按钮尺寸 |
| disabled | `boolean` | `false` | 是否禁用 |
| loading | `boolean` | `false` | 是否显示加载状态 |
| nativeType | `string` | `'button'` | 原生 button 的 type 属性 |
| icon | `string` | `''` | 图标内容 |

## 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| click | `(event: MouseEvent)` | 按钮点击时触发 |

## 插槽

| 插槽名 | 说明 |
|--------|------|
| default | 按钮内容 |
| icon | 自定义图标内容 |
