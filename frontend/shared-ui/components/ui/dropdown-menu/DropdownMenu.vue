<script setup>
import { computed } from 'vue'
import { DropdownMenuRoot, useForwardPropsEmits } from 'radix-vue'
import { useDocumentDirection } from '../../../composables/useDocumentDirection'

const props = defineProps({
  defaultOpen: { type: Boolean, required: false },
  open: { type: Boolean, required: false },
  dir: { type: String, required: false },
  modal: { type: Boolean, required: false }
})
const emits = defineEmits(['update:open'])

const documentDirection = useDocumentDirection()
const resolvedDir = computed(() => props.dir ?? documentDirection.value)
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DropdownMenuRoot v-bind="forwarded" :dir="resolvedDir">
    <slot />
  </DropdownMenuRoot>
</template>
