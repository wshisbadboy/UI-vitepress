import { createApp } from 'vue'
import MessageList from './MessageList.vue'

let instance = null

function getInstance() {
  if (instance) return instance

  const container = document.createElement('div')
  document.body.appendChild(container)
  const app = createApp(MessageList)
  instance = app.mount(container)

  return instance
}

function show(options) {
  const opts = typeof options === 'string'
    ? { message: options, type: 'info' }
    : options
  return getInstance().add(opts)
}

const Message = (options) => show(options)

Message.info = (message, duration) => show({ message, type: 'info', duration })
Message.success = (message, duration) => show({ message, type: 'success', duration })
Message.warning = (message, duration) => show({ message, type: 'warning', duration })
Message.error = (message, duration) => show({ message, type: 'error', duration })

Message.closeAll = () => {
  if (instance) instance.clear()
}

export default Message
