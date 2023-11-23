<template>
  <div class="page">index页面
    <div class="box"></div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
</script>
<style scoped lang='scss'>
.page {
  width: 100%;
  height: 100%;
  .box{
    background: yellow;
    height: 2090px;
    width: 300px;
  }
}
</style>