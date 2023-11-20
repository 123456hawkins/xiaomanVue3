<template>
  <div>
    <h1>我是父路由</h1>
    <div>
      <router-link to="/">login</router-link>
      <router-link to="/reg">reg</router-link>
    </div>
    <RouterView></RouterView>

  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

</script>
<style scoped lang='scss'></style>