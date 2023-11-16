<template>
  <div>兄弟B
    <div>传来的组件{{ flag }}</div>
    <div>通过bus传过来:{{ Flag2 }}</div>
    <div>通过mitt传过来:{{ Flag3 }}</div>
  </div>
</template>

<script setup lang='ts'>
import Bus from '../Bus'
import { ref, reactive } from 'vue'
import { getCurrentInstance } from 'vue'
type Props = {
  flag: boolean
}
let Flag2 = ref(false)
Bus.on('on-click2', (flag: boolean) => {
  Flag2.value = flag
})
defineProps<Props>()

let Flag3 = ref<string>('')
const instance = getCurrentInstance()
instance?.proxy?.$Bus.on('on-hawkins', (str) => {
  Flag3.value = (str as string)
})
</script>
<style scoped lang='scss'></style>