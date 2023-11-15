<template>
  <div class="pageConatiner">我是父级
    <Teleport to="body">
      <teleP></teleP>
    </Teleport>
    <div class="footer" id="footer"></div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import teleP from './components/teleP.vue';
</script>
<style scoped lang='scss'>
* {
  padding: 0;
  margin: 0;
}

.pageConatiner {
  height: 50vh;
  width: 80vh;
  background-color: greenyellow;

  .footer {
    height: 50%;
    border: 1px solid black;
  }
}
</style>