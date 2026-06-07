<template>
  <div class="my-message-container">
    <MyMessage
      v-for="(item, i) in messages"
      :key="item.id"
      :type="item.type"
      :message="item.message"
      :duration="item.duration"
      :show-close="item.showClose"
      @destroy="remove(item.id)"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MyMessage from './Message.vue'

const messages = ref([])
let seed = 0

function add(options) {
  const id = ++seed
  const msg = {
    id,
    type: options.type || 'info',
    message: options.message || '',
    duration: options.duration ?? 3000,
    showClose: options.showClose ?? false,
  }
  messages.value.push(msg)
  if (msg.duration > 0) {
    setTimeout(() => remove(id), msg.duration + 300)
  }
  return id
}

function remove(id) {
  const idx = messages.value.findIndex((m) => m.id === id)
  if (idx > -1) messages.value.splice(idx, 1)
}

function clear() {
  messages.value = []
}

defineExpose({ add, remove, clear })
</script>

<style>
.my-message-container {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
}
</style>
