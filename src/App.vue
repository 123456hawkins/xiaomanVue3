<template>
  <div>main页面</div>
  <!-- 跳转按钮 -->
  <!-- 方式一 -->
  <!-- <RouterLink to="/">Login</RouterLink>
  <RouterLink to="/reg">reg</RouterLink> -->

  <!-- 方式二 -->
  <!-- 加上replace关键字不会保留历史记录，就是前后按键没有用 -->
  <!-- <RouterLink replace :to="{ name: 'login' }">Login</RouterLink>
  <RouterLink replace :to="{ name: 'Reg' }">reg</RouterLink> -->

  <!-- 方式三 -->
  <!-- <button @click="toPage('/')">跳转主页</button>
  <button @click="toPage('/reg')">跳转注册</button> -->

  <!-- 调用前进后退 -->
  <!-- <button @click="next()">next</button>
  <button @click="prev()">prev</button>
  <hr> -->

  <router-view></router-view>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const toPage = (url: string) => {
  router.push(url)
  // router.replace不会留下历史记录，前后按键没有用
  // router.replace(url)
}
const next = () => {
  router.go(1)
}
const prev = () => {
  router.go(-1)
}
</script>
<style scoped lang='scss'></style>