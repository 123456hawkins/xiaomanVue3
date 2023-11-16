<template>
  <div>
    <broA @on-click="getFlag"></broA>
    <broB :flag="Flag"></broB>
    <Hawkins @on-click="getInfo" :name="'hawkinsa2342342'"></Hawkins>
  </div>
</template>

<script setup lang='ts'>
import Hawkins from './App'
import { ref, reactive } from 'vue'
import broA from './components/broA.vue';
import broB from './components/broB.vue';
let Flag = ref(false)
const getFlag = (params: boolean) => {
  Flag.value = params
}
const getInfo = (item) => {
  console.log('APPVUE收到', item);

}
</script>
<style scoped lang='scss'></style>