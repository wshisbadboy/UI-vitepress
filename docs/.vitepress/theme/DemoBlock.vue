<template>
  <div class="demo-block">
    <div class="demo-block__source">
      <slot />
    </div>
    <div v-if="$slots.code" class="demo-block__meta">
      <div class="demo-block__bar">
        <button class="demo-block__toggle" @click="showCode = !showCode">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
          </svg>
          {{ showCode ? '隐藏代码' : '查看代码' }}
        </button>
      </div>
      <div v-show="showCode" class="demo-block__code">
        <slot name="code" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const showCode = ref(false)
</script>

<style>
.demo-block {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin-bottom: 28px;
  overflow: hidden;
  background: var(--vp-c-bg);
}

.demo-block__source {
  padding: 28px;
}

.demo-block__meta {
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.demo-block__bar {
  display: flex;
  align-items: center;
  padding: 10px 20px;
}

.demo-block__toggle {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  border: none;
  background: transparent;
  font-size: 13px;
  font-family: inherit;
  color: var(--vp-c-text-2);
  cursor: pointer;
  padding: 4px 10px;
  border-radius: 5px;
  transition: color 0.15s, background-color 0.15s;
}
.demo-block__toggle:hover {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}

.demo-block__code {
  overflow: hidden;
}

.demo-block__code pre {
  background: var(--vp-code-block-bg) !important;
  color: var(--vp-code-block-color, #e2e8f0);
  padding: 18px 20px;
  margin: 0;
  border-radius: 0;
  font-size: 13px;
  font-family: Menlo, Monaco, 'Courier New', monospace;
  line-height: 1.7;
  white-space: pre-wrap;
  word-break: break-word;
  overflow-x: auto;
}

.demo-block__code code {
  white-space: pre-wrap;
  word-break: break-word;
  font-family: inherit;
  background: transparent !important;
  padding: 0 !important;
}
</style>
