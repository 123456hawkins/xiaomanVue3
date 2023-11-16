<template>
  <div><img id="img" src="./assets/images/c1.jpg"></div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import useBase64 from './hooks'
useBase64({ el: '#img' }).then(res => {
  console.log(res.Baseurl);

})
</script>
<style scoped lang='scss'></style>