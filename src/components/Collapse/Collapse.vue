<template>
  <div class="my-collapse">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'MyCollapse',
}
</script>

<script setup>
import { provide, ref, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
  accordion: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])
const activeNames = ref([...props.modelValue])

watch(
  () => props.modelValue,
  (val) => {
    activeNames.value = [...val]
  },
)

provide('collapse', {
  activeNames,
  accordion: props.accordion,
  onItemToggle(name) {
    const idx = activeNames.value.indexOf(name)
    if (idx > -1) {
      activeNames.value.splice(idx, 1)
    } else {
      if (props.accordion) {
        activeNames.value = [name]
      } else {
        activeNames.value.push(name)
      }
    }
    emit('update:modelValue', [...activeNames.value])
  },
})
</script>

<style>
.my-collapse {
  border: 1px solid var(--my-border);
  border-radius: 6px;
  overflow: hidden;
}
</style>
