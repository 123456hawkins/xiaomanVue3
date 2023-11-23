<template>
  <div class="wraps">
    <div class="bar" ref="bar"></div>
  </div>
</template>

<script setup lang='ts'>
import { onMounted } from 'vue';
import { ref, reactive } from 'vue'
let speed = ref<number>(1)
let bar = ref<HTMLElement>()
let timer = ref<number>(0)
const startLoading = () => {
  let dom = bar.value as HTMLElement
  dom.style.display = 'block'
  speed.value = 1
  timer.value = window.requestAnimationFrame(function fn() {
    if (speed.value < 90) {
      speed.value += 1;
      dom.style.width = speed.value + '%'
      timer.value = window.requestAnimationFrame(fn)
    } else {
      speed.value = 1;
      window.cancelAnimationFrame(timer.value)
    }
  })
}

const endLoading = () => {
  let dom = bar.value as HTMLElement;
  setTimeout(() => {
    window.requestAnimationFrame(() => [
      speed.value = 100,
      dom.style.width = speed.value + '%',
    ])
    setTimeout(() => {
      dom.style.display = 'none'
    }, 500);
  }, 1000);


}
const disappear = () => {
  let dom = bar.value as HTMLElement;
  dom.style.display = 'none'
}
onMounted(() => {
  startLoading()
  endLoading()

})

// 暴露内部方法
defineExpose({
  startLoading,
  endLoading,
  disappear
})
</script>
<style scoped lang='scss'>
.wraps {
  position: fixed;
  top: 0;
  width: 100%;
  height: 5px;

  .bar {
    height: inherit;
    width: 0;
    background: rgb(35, 35, 192);
  }
}
</style>