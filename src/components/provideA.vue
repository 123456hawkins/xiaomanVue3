<template>
  <div class="pageContainer">儿子组件<provideB></provideB>
    <div class="aget">A值</div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, inject } from 'vue'
import provideB from './provideB.vue';
import type { Ref } from 'vue'
const colorVal = inject<Ref<string>>('color')
</script>
<style scoped lang='scss'>
.pageContainer {
  height: 70%;
  background-color: green;
  border: 1px solid black;

  .aget {
    height: 10px;
    width: 10px;
    background: v-bind(colorVal);
  }
}
</style>