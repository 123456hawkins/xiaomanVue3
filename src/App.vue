<template>
  <!-- 展示异步组件必须使用suspense关键字 -->
  <Suspense>
    <!-- 加载完成 -->
    <template #default>
      <syncVue></syncVue>
    </template>
    <!-- 等待加载的骨架图 -->
    <template #fallback>
      <skeleton></skeleton>
    </template>
  </Suspense>
</template>

<script setup lang='ts'>
import { ref, reactive, defineAsyncComponent } from 'vue'
import skeleton from './components/skeleton.vue';
// 引入异步组件
// 代码分包,凡是通过import导入的组件都能分包
const syncVue = defineAsyncComponent(() => import('@/components/sync.vue'))

</script>
<style scoped lang='scss'></style>