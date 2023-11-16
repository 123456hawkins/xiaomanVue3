<template>
  <div>{{ $hawkins }}</div>
  <div>{{ $filters.format('awefaw') }}</div>
</template>

<script setup lang='ts'>
import { ref, reactive, getCurrentInstance } from 'vue'
// js想使用到全局函数要调用getCurrentInstance
const app = getCurrentInstance()
console.log(app?.proxy?.$filters.format('javascript'));
console.log(app?.proxy?.$hawkins);
</script>
<style scoped lang='scss'></style>