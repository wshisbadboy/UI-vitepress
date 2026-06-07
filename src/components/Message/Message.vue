<template>
  <transition name="my-message-fade" @after-leave="$emit('destroy')">
    <div
      v-if="visible"
      :class="['my-message', `my-message--${type}`]"
      role="alert"
    >
      <span class="my-message__icon">
        <svg v-if="type === 'success'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        <svg v-else-if="type === 'warning'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
        <svg v-else-if="type === 'error'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
        <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </span>
      <span v-if="isStringMessage" class="my-message__text">{{ message }}</span>
      <component :is="message" v-else class="my-message__text" />
      <button v-if="showClose" class="my-message__close" @click="close" aria-label="关闭">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'MyMessage',
}
</script>

<script setup>
import { ref, onMounted, computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'info',
  },
  message: { type: [String, Function], default: '' },
  duration: { type: Number, default: 3000 },
  showClose: { type: Boolean, default: false },
})

const emit = defineEmits(['destroy'])

const visible = ref(true)
let timer = null

const isStringMessage = computed(() => typeof props.message === 'string')

function close() {
  visible.value = false
  if (timer) clearTimeout(timer)
  emit('destroy')
}

function startTimer() {
  if (props.duration > 0) {
    timer = setTimeout(() => {
      visible.value = false
    }, props.duration)
  }
}

onMounted(() => {
  startTimer()
})
</script>

<style>
.my-message {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.5;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  background: #fff;
  border: 1px solid var(--my-border, #e5e7eb);
  color: var(--my-text, #1f2937);
  min-width: 200px;
  max-width: 420px;
  margin-bottom: 8px;
}

.my-message--info    { border-left: 3px solid #3b82f6; }
.my-message--success { border-left: 3px solid #22c55e; }
.my-message--warning { border-left: 3px solid #f59e0b; }
.my-message--error   { border-left: 3px solid #ef4444; }

.my-message__icon {
  display: inline-flex;
  flex-shrink: 0;
  color: var(--my-text-muted, #9ca3af);
}
.my-message--info .my-message__icon    { color: #3b82f6; }
.my-message--success .my-message__icon { color: #22c55e; }
.my-message--warning .my-message__icon { color: #f59e0b; }
.my-message--error .my-message__icon   { color: #ef4444; }

.my-message__text {
  flex: 1;
  word-break: break-word;
}

.my-message__close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  border: none;
  background: transparent;
  color: inherit;
  opacity: 0.5;
  cursor: pointer;
  border-radius: 4px;
  padding: 0;
}
.my-message__close:hover {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.06);
}

.my-message-fade-enter-active {
  transition: all 0.25s ease;
}
.my-message-fade-leave-active {
  transition: all 0.2s ease;
}
.my-message-fade-enter-from {
  opacity: 0;
  transform: translateY(-12px);
}
.my-message-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
