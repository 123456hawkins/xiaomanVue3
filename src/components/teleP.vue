<template>
  <div class="child">我是子级</div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
</script>
<style scoped lang='scss'>
.child {
  position: fixed;
  background-color: red;
  z-index: 999;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  transform: translate(-50%, -50%);
}
</style>