<template>
  <div class="pageContainer">
    <h2>我是父组件</h2>
    <h2>isShow:{{ isShow }}</h2>
    <div>text:{{ text }}</div>
    <button @click="isShow = !isShow">开关</button>
    <!-- 可以接受多个v-model ,还有自定义修饰符textVal.isBT，自带的修饰符有trim，number，lazy-->
    <VModel v-model="isShow" v-model:textVal.isTrue="text"></VModel>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import VModel from './components/VModel.vue'
const isShow = ref<boolean>(true)
const text = ref<string>('Hawkins23124发文')
</script>
<style scoped lang='scss'>
.pageContainer {
  box-sizing: border-box;
  border: 1px solid black;
  padding: 10px;
}
</style>