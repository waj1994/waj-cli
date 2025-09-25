<script setup lang="ts">
import { getDemo } from '@/api/modules/demo'

async function getData() {
  try {
    const res = await getDemo()
    console.log(res)
  } catch {}
}
getData()
</script>

<template>
  <div>home</div>
  <svg-icon
    name="logo"
    class="text-red-100"
  />
</template>

<style lang="less" scoped></style>
