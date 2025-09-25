<script setup lang="ts">
interface Props {
  name: string
  prefix?: string
  color?: string
  size?: string
}

const props = withDefaults(defineProps<Props>(), {
  prefix: 'icon',
  size: '24px'
})
defineEmits<{
  click: []
}>()

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<template>
  <svg
    aria-hidden="true"
    class="svg-icon"
    :width="size"
    :height="size"
    @click="$emit('click')"
  >
    <use
      :xlink:href="symbolId"
      fill="currentColor"
    />
  </svg>
</template>
