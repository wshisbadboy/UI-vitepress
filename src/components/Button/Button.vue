<template>
  <button
    :class="[
      'my-btn',
      `my-btn--${variant}`,
      `my-btn--${size}`,
      {
        'my-btn--loading': loading,
        'my-btn--icon-only': isIconOnly,
      },
    ]"
    :disabled="disabled || loading"
    :type="nativeType"
    @click="handleClick"
  >
    <span v-if="loading" class="my-btn__loader"></span>
    <span v-if="icon && !loading" class="my-btn__icon">
      <slot name="icon">{{ icon }}</slot>
    </span>
    <span v-if="hasDefaultSlot && !isIconOnly" class="my-btn__text">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'MyButton',
}
</script>

<script setup>
import { useSlots, computed } from 'vue'

defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary', 'outline', 'text'].includes(v),
  },
  size: {
    type: String,
    default: 'medium',
    validator: (v) => ['small', 'medium', 'large'].includes(v),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  nativeType: {
    type: String,
    default: 'button',
  },
  icon: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['click'])
const slots = useSlots()
const hasDefaultSlot = computed(() => !!slots.default)
const isIconOnly = computed(() => !hasDefaultSlot.value)

function handleClick(e) {
  emit('click', e)
}
</script>

<style>
.my-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-family: inherit;
  font-weight: 500;
  border: 1px solid transparent;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.15s, border-color 0.15s, opacity 0.15s;
  line-height: 1;
  white-space: nowrap;
  user-select: none;
}

.my-btn--small { padding: 6px 12px; font-size: 13px; min-height: 30px; }
.my-btn--medium { padding: 8px 18px; font-size: 14px; min-height: 36px; }
.my-btn--large { padding: 10px 24px; font-size: 16px; min-height: 42px; }

.my-btn--small.my-btn--icon-only { padding: 6px; width: 30px; }
.my-btn--medium.my-btn--icon-only { padding: 8px; width: 36px; }
.my-btn--large.my-btn--icon-only { padding: 10px; width: 42px; }

/* ---- primary ---- */
.my-btn--primary {
  background-color: var(--my-primary);
  color: #fff;
  border-color: var(--my-primary);
}
.my-btn--primary:hover:not(:disabled) {
  background-color: var(--my-primary-hover);
  border-color: var(--my-primary-hover);
}
.my-btn--primary:active:not(:disabled) {
  background-color: var(--my-primary-active);
}

/* ---- secondary ---- */
.my-btn--secondary {
  background-color: var(--my-btn-secondary-bg);
  color: var(--my-text);
  border-color: var(--my-btn-secondary-border);
}
.my-btn--secondary:hover:not(:disabled) {
  background-color: var(--my-btn-secondary-hover);
}
.my-btn--secondary:active:not(:disabled) {
  background-color: var(--my-btn-secondary-active);
}

/* ---- outline ---- */
.my-btn--outline {
  background-color: transparent;
  color: var(--my-primary);
  border-color: var(--my-primary);
}
.my-btn--outline:hover:not(:disabled) {
  background-color: var(--my-primary-light);
}
.my-btn--outline:active:not(:disabled) {
  background-color: var(--my-primary-lighter);
}

/* ---- text ---- */
.my-btn--text {
  background-color: transparent;
  color: var(--my-primary);
  border-color: transparent;
}
.my-btn--text:hover:not(:disabled) {
  background-color: var(--my-btn-text-hover);
}
.my-btn--text:active:not(:disabled) {
  background-color: var(--my-btn-text-active);
}

/* ---- states ---- */
.my-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* ---- loader ---- */
.my-btn__loader {
  width: 14px;
  height: 14px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: my-btn-spin 0.6s linear infinite;
  flex-shrink: 0;
}

@keyframes my-btn-spin {
  to { transform: rotate(360deg); }
}

.my-btn__icon {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
}

.my-btn__text {
  display: inline-flex;
  align-items: center;
}
</style>
