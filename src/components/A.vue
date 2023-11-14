<template>
  <div>
    <h1>我是A组件</h1>

  </div>
</template>

<script setup lang='ts'>
import { onMounted, onBeforeMount, onUnmounted, onBeforeUnmount } from 'vue'
onMounted(() => {
  console.log('A组件挂载后');

})
onBeforeMount(() => {
  console.log('A组件挂载前');
})
onBeforeUnmount(() => {
  console.log('A组件卸载前');
})
onUnmounted(() => {
  console.log('A组件卸载后');
})
</script>
<style scoped lang='scss'></style>