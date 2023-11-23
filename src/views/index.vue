<template>
  <div class="page">index页面
    <!-- <div class="box"></div> -->
    <router-link to="/demo1">demo1</router-link>
    <router-link to="/demo2">demo2</router-link>
    <router-link to="/demo3">demo3</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
</script>
<style scoped lang='scss'>
.page {
  width: 100%;
  height: 100%;

  .box {
    background: yellow;
    height: 2090px;
    width: 300px;
  }
}
</style>