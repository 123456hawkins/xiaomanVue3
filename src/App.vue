<template>
  <div>
    <hawkins-btn :obj=JSON.stringify(obj)>

    </hawkins-btn>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted, defineCustomElement } from 'vue'
import customVueCeVue from './components/custom-vue.ce.vue'
const Btn = defineCustomElement(customVueCeVue)
let obj = {
  name: 'hawkins',
  age: 22
}
window.customElements.define('hawkins-btn', Btn)
onMounted(() => {
  console.log(import.meta.env);

})
fetch('/api')
</script>
<style scoped lang='scss'></style>