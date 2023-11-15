<template>
  <div>
    <input step="20" v-model="num.current" type="number">
    <div>
      {{ num.tweenedNumber }}
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, watch } from 'vue'
import gsap from 'gsap'
const num = reactive({
  current: 0,
  tweenedNumber: 0
})

watch(() => num.current, (newVal, oldVal) => {
  gsap.to(num, {
    duration: 10,
    tweenedNumber: newVal
  })
})
</script>
<style scoped lang='scss'></style>