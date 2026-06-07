# Message 消息提示

从顶部弹出的全局消息通知，通过命令式 API 调用，支持纯文本和 VNode 渲染。

<MessageDemo />

## 方法

通过 `Message` 对象调用静态方法：

```js
import { Message } from 'wshisbadboy-ui-lib'
```

| 方法 | 说明 | 参数 |
|------|------|------|
| `Message.info(message, duration?)` | 信息提示 | `message: string \| () => VNode`, `duration?: number` |
| `Message.success(message, duration?)` | 成功提示 | `message: string \| () => VNode`, `duration?: number` |
| `Message.warning(message, duration?)` | 警告提示 | `message: string \| () => VNode`, `duration?: number` |
| `Message.error(message, duration?)` | 错误提示 | `message: string \| () => VNode`, `duration?: number` |
| `Message(options)` | 通用方法 | `{ type, message, duration? }` |
| `Message.closeAll()` | 关闭所有消息 | -- |

**参数说明**：`duration` 单位为毫秒，默认 3000ms。设为 0 则不会自动关闭。

## VNode 支持

`message` 参数支持传入返回 VNode 的渲染函数，用于富文本展示：

```js
import { h } from 'vue'
import { Message } from 'wshisbadboy-ui-lib'

Message.info(() => h('span', [
  '已删除 ',
  h('strong', { style: { color: '#ef4444' } }, '3'),
  ' 个文件'
]))
```
