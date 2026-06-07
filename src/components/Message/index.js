import Message from './message.js'
import MessageComponent from './Message.vue'

MessageComponent.install = (app) => {
  app.component(MessageComponent.name, MessageComponent)
}

// 将命令式方法挂到组件上，方便 import { Message } from '...' 使用
MessageComponent.success = Message.success
MessageComponent.error = Message.error
MessageComponent.warning = Message.warning
MessageComponent.info = Message.info
MessageComponent.closeAll = Message.closeAll

export { MessageComponent as Message }
export default MessageComponent
