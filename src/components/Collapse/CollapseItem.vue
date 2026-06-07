<template>
  <div
    :class="['my-collapse-item', { 'is-active': isActive, 'is-disabled': disabled }]"
  >
    <button
      class="my-collapse-item__header"
      :disabled="disabled"
      @click="toggle"
    >
      <span class="my-collapse-item__title">
        <slot name="title">{{ title }}</slot>
      </span>
      <span class="my-collapse-item__arrow">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </span>
    </button>
    <div class="my-collapse-item__wrap" :style="{ height: wrapHeight }">
      <div class="my-collapse-item__content" ref="contentRef">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyCollapseItem',
}
</script>

<script setup>
import { ref, inject, computed, onMounted, onBeforeUnmount, nextTick, watch } from 'vue'

const collapse = inject('collapse', null)

const props = defineProps({
  title: { type: String, default: '' },
  name: { type: [String, Number], required: true },
  disabled: { type: Boolean, default: false },
})

const contentRef = ref(null)
const wrapHeight = ref('0')
let resizeObserver = null

const isActive = computed(() => {
  if (!collapse) return false
  return collapse.activeNames.value.includes(props.name)
})

function measureHeight() {
  return contentRef.value ? contentRef.value.scrollHeight : 0
}

function toggle() {
  if (props.disabled || !collapse) return
  collapse.onItemToggle(props.name)
}

async function expand() {
  wrapHeight.value = 'auto'
  await nextTick()
  const h = measureHeight()

  wrapHeight.value = '0'
  // force reflow
  // eslint-disable-next-line no-unused-expressions
  contentRef.value?.scrollHeight

  requestAnimationFrame(() => {
    wrapHeight.value = h + 'px'
  })
}

function collapse_() {
  const current = measureHeight()
  wrapHeight.value = current + 'px'
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      wrapHeight.value = '0'
    })
  })
}

watch(isActive, (val) => {
  if (val) {
    expand()
  } else {
    collapse_()
  }
})

onMounted(() => {
  if (isActive.value) {
    wrapHeight.value = 'auto'
  }
  if (contentRef.value) {
    resizeObserver = new ResizeObserver(() => {
      if (isActive.value && wrapHeight.value !== 'auto') {
        const h = measureHeight()
        if (h > 0) wrapHeight.value = h + 'px'
      }
    })
    resizeObserver.observe(contentRef.value)
  }
})

onBeforeUnmount(() => {
  if (resizeObserver) resizeObserver.disconnect()
})
</script>

<style>
.my-collapse-item {
  border-bottom: 1px solid var(--my-border);
}
.my-collapse-item:last-child {
  border-bottom: none;
}

.my-collapse-item__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 16px;
  border: none;
  background: var(--my-bg);
  font-size: 14px;
  font-weight: 500;
  color: var(--my-text);
  cursor: pointer;
  transition: background-color 0.15s;
  line-height: 1.4;
  text-align: left;
  font-family: inherit;
}
.my-collapse-item__header:hover:not(:disabled) {
  background-color: var(--my-bg-soft);
}
.my-collapse-item__header:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.my-collapse-item__title {
  flex: 1;
}

.my-collapse-item__arrow {
  display: inline-flex;
  flex-shrink: 0;
  margin-left: 8px;
  color: var(--my-text-muted);
  transition: transform 0.3s;
}
.my-collapse-item.is-active .my-collapse-item__arrow {
  transform: rotate(180deg);
}

.my-collapse-item__wrap {
  overflow: hidden;
  transition: height 0.3s ease;
  background: var(--my-bg);
  will-change: height;
}

.my-collapse-item__content {
  padding: 0 16px 16px;
  font-size: 14px;
  color: var(--my-text-soft);
  line-height: 1.6;
}
</style>
