<script setup>
import { computed } from 'vue'
import { SelectRoot, useForwardPropsEmits } from 'radix-vue'
import { useDocumentDirection } from '../../../composables/useDocumentDirection'

const props = defineProps({
  open: { type: Boolean, required: false },
  defaultOpen: { type: Boolean, required: false },
  defaultValue: { type: [String, Number], required: false },
  modelValue: { type: [String, Number], required: false },
  dir: { type: String, required: false },
  name: { type: String, required: false },
  autocomplete: { type: String, required: false },
  disabled: { type: Boolean, required: false },
  required: { type: Boolean, required: false }
})
const emits = defineEmits(['update:modelValue', 'update:open'])

const documentDirection = useDocumentDirection()
const resolvedDir = computed(() => props.dir ?? documentDirection.value)
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <SelectRoot v-bind="forwarded" :dir="resolvedDir">
    <slot />
  </SelectRoot>
</template>
