<template>
  <div ref="xiaoman">
    {{ text }}
  </div>
  <button @click="change">change div</button>
</template>
  
<script setup lang='ts'>
import { ref, nextTick } from 'vue';

const text = ref('小满开飞机')
const xiaoman = ref<HTMLElement>()

const change = async () => {
  text.value = '小满不开飞机'
  console.log(xiaoman.value?.innerText) //小满开飞机
  await nextTick();
  console.log(xiaoman.value?.innerText) //小满不开飞机
}


</script>


<style  scoped></style>