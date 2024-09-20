<!-- svg图标组件 -->
<script setup lang="ts">
const props = defineProps<{
  name: string
  color?: string
}>()
</script>

<template>
  <svg
    h-1em
    w-1em
    overflow-hidden
    fill-current
    align-middle
    v-bind="$attrs"
    :style="{ color }"
  >
    <use :xlink:href="`#icon-${props.name}`" />
  </svg>
</template>
