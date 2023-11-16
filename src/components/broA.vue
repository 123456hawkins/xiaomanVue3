<template>
  <div>兄弟A
    <button @click="emitB">派发一个事件给B</button>
    <button @click="emitB2">通过bus派发一个事件给B</button>
    <button @click="emitB3">通过mit派发一个事件给B</button>
  </div>
</template>

<script setup lang='ts'>
import Bus from '../Bus'
import { ref, reactive } from 'vue'
import { getCurrentInstance } from 'vue'
let flag = ref<boolean>(true)
const emit = defineEmits(['on-click'])
const emitB = () => {
  flag.value = !flag.value
  emit('on-click', flag)
}

const instance=getCurrentInstance()
const emitB3 = () => {
  instance?.proxy?.$Bus.emit('on-hawkins','mitt')
}

let flag2 = ref<boolean>(true)
const emitB2 = () => {
  flag2.value = !flag2.value
  // 使用自带的bus发送信息
  Bus.emit('on-click2', flag2)
}
</script>
<style scoped lang='scss'></style>