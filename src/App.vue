<template>
  <div>
    <A>
      <div class="a">私人定制div</div>
    </A>
    <div class="Dcss">动态css</div>
    <button @click="changecss">切换动态css属性</button>
  </div>
</template>

<script setup lang="ts">
import A from "@/components/slotA.vue"
import { ref } from 'vue'
let color = ref({ color: 'pink' })
const changecss = () => {
  color.value = { color: 'green' }
}
</script>


<style scoped>
.Dcss {
  color: v-bind('color.color');
}
</style>