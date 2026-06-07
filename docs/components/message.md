# Message 消息提示

从顶部弹出的全局消息通知，通过命令式 API 调用，自动消失。

<MessageDemo />

## 方法

通过 `Message` 对象调用静态方法：

```js
import { Message } from 'my-ui-lib'
```

| 方法 | 说明 | 参数 |
|------|------|------|
| `Message.info(message, duration?)` | 信息提示 | `message: string`, `duration?: number` |
| `Message.success(message, duration?)` | 成功提示 | `message: string`, `duration?: number` |
| `Message.warning(message, duration?)` | 警告提示 | `message: string`, `duration?: number` |
| `Message.error(message, duration?)` | 错误提示 | `message: string`, `duration?: number` |
| `Message(options)` | 通用方法 | `{ type, message, duration? }` |
| `Message.closeAll()` | 关闭所有消息 | -- |

**参数说明**：`duration` 单位为毫秒，默认 3000ms。设为 0 则不会自动关闭。
