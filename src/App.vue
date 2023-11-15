<template>
  <el-button type="primary" @click="flag = !flag">切换组件</el-button>
  <!-- 只缓存A组件的 -->
  <!-- keeplive只能有一个子节点 -->
  <KeepAlive>
    <A v-if="flag"></A>
    <B v-else></B>
  </KeepAlive>
</template>

<script setup lang='ts'>
import { ref, onActivated, onDeactivated, onMounted, onUnmounted } from 'vue'
import A from './example/A.vue';
import B from './example/B.vue';
let flag = ref<boolean>(true)

// 这两个生命周期只有开启keepalive才能使用
onMounted(() => {
  console.log('初始化');

})
onUnmounted(() => {
  console.log('卸载');

})
onActivated(() => {
  console.log('keepalive初始化');

})
onDeactivated(() => {
  console.log('keepalive卸载');

})
</script>
<style scoped lang='scss'></style>