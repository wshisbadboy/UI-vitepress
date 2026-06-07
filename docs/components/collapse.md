# Collapse 折叠面板

可折叠的内容面板组件，支持手风琴模式和双向绑定。

<CollapseDemo />

## 属性

### Collapse

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| modelValue | `Array<string \| number>` | `[]` | 当前展开的面板名称（v-model） |
| accordion | `boolean` | `false` | 是否启用手风琴模式 |

### CollapseItem

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| title | `string` | `''` | 面板标题 |
| name | `string \| number` | **必填** | 面板唯一标识 |
| disabled | `boolean` | `false` | 是否禁用 |

## 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| update:modelValue | `(value: Array<string \| number>)` | 展开面板变化时触发 |

## 插槽

### Collapse

| 插槽名 | 说明 |
|--------|------|
| default | 子面板内容 |

### CollapseItem

| 插槽名 | 说明 |
|--------|------|
| default | 面板内容 |
| title | 自定义标题内容 |
