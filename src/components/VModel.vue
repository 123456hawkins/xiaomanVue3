<template>
  <div v-if="modelValue" class="pageContainer">
    <p>modeVlaue:{{ modelValue }}</p>
    <div class="close"><button @click="close">关闭</button></div>
    <h3>我自vmodel子组件</h3>
    <div>内容：<input @input="send" type="text" :value="textVal"></div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
const props = defineProps<{
  modelValue: boolean,
  textVal: string,
  // 自定义修饰符，固定写法
  textValModifiers?: {
    isTrue: boolean
  }
}>()
// 固定写法
const emit = defineEmits(['update:modelValue', 'update:textVal'])
const close = () => {
  emit('update:modelValue', false)
}
const send = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:textVal', props?.textValModifiers?.isTrue ? target.value + '修饰符真的' : target.value)
}
</script>
<style scoped lang='scss'>
.pageContainer {
  box-sizing: border-box;
  border: 1px solid black;
  padding: 10px;
}
</style>