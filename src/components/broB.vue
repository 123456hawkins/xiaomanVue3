<template>
  <div>兄弟B
    <div>传来的组件{{ flag }}</div>
    <div>通过bus传过来:{{ Flag2 }}</div>
  </div>
</template>

<script setup lang='ts'>
import Bus from '../Bus'
import { ref, reactive } from 'vue'
type Props = {
  flag: boolean
}
let Flag2 = ref(false)
Bus.on('on-click2', (flag: boolean) => {
  Flag2.value = flag
})
defineProps<Props>()
</script>
<style scoped lang='scss'></style>