<template>
  <div class="pageContainer">父组件<provideA></provideA>

  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, inject, provide, readonly } from 'vue'
import provideA from './components/provideA.vue';
const colorVal = ref<string>('yellow')
// 添加readonly关键字子组件无法修改
provide('color', readonly(colorVal))
</script>
<style scoped lang='scss'>
.pageContainer {
  width: 300px;
  height: 200px;
  background-color: red;
  border: 1px solid black;
}
</style>