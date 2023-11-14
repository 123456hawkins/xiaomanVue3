<template>
  <div>
    <Dialog>
      <!-- 具名插槽 -->
      <!-- #header是v-slot:header的简写 -->
      <template #header>
        <div>1</div>
      </template>

      <!-- 作用域插槽 -->
      <template #default="{ person }">
        <div v-if="person">{{ person.name }}--{{ person.age }}</div>
      </template>


      <!-- <template v-slot>
        来自父组件的匿名插槽
      </template> -->

      <!-- 动态插槽 -->
      <template #[name]>来自父组件的动态插槽</template>
    </Dialog>
  </div>
</template>

<script setup lang='ts'>
import Dialog from './components/Dialog/index.vue'
import { ref } from 'vue'
let name = ref('footer')
</script>
<style scoped lang='scss'></style>