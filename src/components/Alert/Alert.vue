<template>
  <div
    v-if="visible"
    :class="['my-alert', `my-alert--${type}`]"
    role="alert"
  >
    <span v-if="showIcon" class="my-alert__icon">
      <slot name="icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path v-if="type === 'success'" d="M22 11.08V12a10 10 0 11-5.93-9.14" />
          <polyline v-if="type === 'success'" points="22 4 12 14.01 9 11.01" />
          <path v-if="type === 'warning'" d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
          <line v-if="type === 'warning'" x1="12" y1="9" x2="12" y2="13" />
          <line v-if="type === 'warning'" x1="12" y1="17" x2="12.01" y2="17" />
          <circle v-if="type === 'error'" cx="12" cy="12" r="10" />
          <line v-if="type === 'error'" x1="15" y1="9" x2="9" y2="15" />
          <line v-if="type === 'error'" x1="9" y1="9" x2="15" y2="15" />
          <circle v-if="type === 'info'" cx="12" cy="12" r="10" />
          <line v-if="type === 'info'" x1="12" y1="16" x2="12" y2="12" />
          <line v-if="type === 'info'" x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </slot>
    </span>
    <div class="my-alert__body">
      <span v-if="title || $slots.title" class="my-alert__title">
        <slot name="title">{{ title }}</slot>
      </span>
      <p v-if="$slots.default || description" class="my-alert__desc">
        <slot>{{ description }}</slot>
      </p>
    </div>
    <button v-if="closable" class="my-alert__close" @click="close" aria-label="关闭">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'MyAlert',
}
</script>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'info',
    validator: (v) => ['info', 'success', 'warning', 'error'].includes(v),
  },
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  closable: { type: Boolean, default: true },
  showIcon: { type: Boolean, default: true },
})

const emit = defineEmits(['close'])

const visible = ref(true)

function close() {
  visible.value = false
  emit('close')
}
</script>

<style>
.my-alert {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.6;
  position: relative;
  border: 1px solid transparent;
}

/* ---- info ---- */
.my-alert--info {
  background-color: #eff6ff;
  border-color: #93c5fd;
  color: #1e40af;
}
.my-alert--info .my-alert__desc {
  color: #3b5998;
}

/* ---- success ---- */
.my-alert--success {
  background-color: #f0fdf4;
  border-color: #86efac;
  color: #166534;
}
.my-alert--success .my-alert__desc {
  color: #3a7d44;
}

/* ---- warning ---- */
.my-alert--warning {
  background-color: #fffbeb;
  border-color: #fcd34d;
  color: #92400e;
}
.my-alert--warning .my-alert__desc {
  color: #a16207;
}

/* ---- error ---- */
.my-alert--error {
  background-color: #fef2f2;
  border-color: #fca5a5;
  color: #991b1b;
}
.my-alert--error .my-alert__desc {
  color: #b91c1c;
}

.my-alert__icon {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  padding-top: 1px;
}

.my-alert__body {
  flex: 1;
  min-width: 0;
}

.my-alert__title {
  display: block;
  font-weight: 600;
  margin-bottom: 2px;
}

.my-alert__desc {
  margin: 0;
  font-size: 13px;
}

.my-alert__close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border: none;
  background: transparent;
  color: inherit;
  opacity: 0.6;
  cursor: pointer;
  border-radius: 4px;
  transition: opacity 0.15s, background-color 0.15s;
  padding: 0;
  margin-top: 1px;
}
.my-alert__close:hover {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.06);
}
</style>
