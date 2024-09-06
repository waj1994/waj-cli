<!-- 帮助 -->
<template>
  <div>
    帮助
    <div>{{ countStore.doubleCount }}</div>
    <router-link to="/">跳转到 首页</router-link>
  </div>
</template>

<script setup lang="ts">
import { useCount } from '@/store/useCount'
import { onMounted } from 'vue'

const countStore = useCount()

onMounted(() => {
  console.log('页面加载完成')
})
</script>
