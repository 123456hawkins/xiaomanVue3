<template>
  <div class="content">
    <button @click="flag = !flag">switch</button>
    <!-- 要加animate__animated前缀 -->
    <transition @before-enter="onBeforeEnter" @enter="onEnter" @after-enter="onAfterEnter"
      @enter-cancelled="onEnterCancelled" @before-leave="onBeforeLeave" @leave="onLeave" @after-leave="onAfterLeave"
      @leave-cancelled="onLeaveCancelled" :duration="3000" name="fade">
      <div v-if="flag" class="box"></div>
    </transition>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
// 导入animate库
import 'animate.css'
import gsap from 'gsap'
let flag = ref<boolean>(true)

const onBeforeEnter = (el: Element) => {
  console.log('插入之前', el);
  gsap.set(el, {
    width: 0,
    height: 0
  })

}
const onEnter = (el: Element, done: gsap.Callback) => {
  console.log('插入到dom的下一帧', el);
  gsap.to(el, {
    width: 200,
    height: 200,
    onComplete: done
  })
}
const onAfterEnter = (el: Element) => {
  console.log('插入到dom完成后', el);
}
const onEnterCancelled = (el: Element) => {
  console.log('插入到dom取消', el);
}
const onBeforeLeave = (el: Element) => {
  console.log('离开dom之前', el);
}
const onLeave = (el: Element, done: gsap.Callback) => {
  console.log('离开dom的下一帧', el);
  gsap.to(el, {
    width: 0,
    height: 0,
    onComplete: done
  })
}
const onAfterLeave = (el: Element) => {
  console.log('离开dom完成后', el);
}
const onLeaveCancelled = (el: Element) => {
  console.log('离开dom取消', el);

}
</script>

<style scoped lang='scss'>
// 动画要放在元素属性下面,不然读不到
.box {
  height: 200px;
  width: 200px;
  background-color: red;
}

// .fade-enter-active {
//   transition: all 1.5s ease;
// }

.fade-enter-from {
  height: 0;
  width: 0;
}

.fade-enter-to {
  height: 100px;
  width: 100px;
}

// .fade-leave-active {
//   transition: all 1.5s ease;
// }

.fade-leave-from {
  height: 100px;
  width: 100px;
}

.fade-leave-to {
  height: 0;
  width: 0;
}


.content {
  height: 600px;
  width: 600px;
  background-color: green;
}
</style>
