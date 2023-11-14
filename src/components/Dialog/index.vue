<template>
  <div>
    <header class="header">
      <!-- 作用域插槽 -->
      <div>
        <slot name="header"></slot>
        <div v-for="(item, index) in peopleList " :key="index">
          <!-- 传值给父组件 -->
          <slot :person="item"></slot>
        </div>
      </div>
    </header>
    <main class="main">
      <!-- 匿名插槽 -->
      <slot></slot>
    </main>
    <footer class="footer">
      <!-- 动态插槽 -->
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script setup lang='ts'>
import { reactive } from 'vue'
type Peo = {
  name: string
  age: number
}
let peopleList = reactive<Peo[]>([
  {
    name: 'hawkins',
    age: 22
  },
  {
    name: 'hawkins3',
    age: 2224
  },
  {
    name: 'hawkins4',
    age: 2228
  },
  {
    name: 'hawkins5',
    age: 224
  },
])
</script>
<style scoped lang='scss'></style>