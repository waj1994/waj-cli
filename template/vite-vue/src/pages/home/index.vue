<!-- 首页 -->
<template>
  <div>
    首页
    {{ title }}
    <router-link
      to="/help"
      class="test"
    >
      跳转到 帮助
    </router-link>
    <div>{{ countStore.doubleCount }}</div>
    <a-button @click="countStore.increment"> increment </a-button>
    <a-button @click="countStore.decrement">decrement</a-button>
    <svg-icon
      name="material"
      class="text-20px"
    />
  </div>
</template>

<script setup lang="ts">
import { useCount } from '@/store/useCount'

const countStore = useCount()
const title = ref('啥东西')
</script>
