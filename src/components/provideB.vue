<template>
  <div class="pageContainer">孙子组件
    <div class="bget">B值</div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, inject } from 'vue'
import type { Ref } from 'vue'

const colorVal = inject<Ref<string>>('color')
</script>
<style scoped lang='scss'>
.pageContainer {
  height: 70%;
  background-color: yellow;
  border: 1px solid black;
  .bget {
    height: 10px;
    width: 10px;
    background: v-bind(colorVal);
  }
}
</style>