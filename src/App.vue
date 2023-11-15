<template>
  <div>
    <broA @on-click="getFlag"></broA>
    <broB :flag="Flag"></broB>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import broA from './components/broA.vue';
import broB from './components/broB.vue';
let Flag = ref(false)
const getFlag = (params: boolean) => {
  Flag.value = params
}
</script>
<style scoped lang='scss'></style>