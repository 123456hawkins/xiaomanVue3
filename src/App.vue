<template>
  <div>
    <h2>Piania:{{ Test.current }}--{{ Test.name }}</h2>
    <button @click="add">点我佳佳</button>
    <button @click="change">批量修改</button>
    <div>解构赋值：{{ current }}-{{ name }}</div>
    <hr>
    <div>:{{ Test.user }}</div>
    <button @click="changeUser">测试actions</button>
    <button @click="testAsync">测试异步</button>

    <div>测试getters:{{ Test.temName }}</div>

    <hr>
    <button @click="testReset">测试reset</button>
    <hr>
    <div>store Base:{{ Test2.basecurrent }}--{{ Test2.basename }}</div>
    <button @click="Test2.basecurrent--">修改storeBsse</button>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { useTestStore, useStore } from './stores'
import { storeToRefs } from 'pinia';
const Test = useTestStore()
const Test2 = useStore()
// 解构赋值不具有响应性
// const { current, name } = Test
// 如果要响应性就包storeToRefs
const { current, name } = storeToRefs(Test)


const add = () => {
  // pinia的值可以直接拿来操作，vuex不可以
  Test.current++
}
const change = () => {
  // 第二种修改方式，批量修改
  // Test.$patch({
  //   current: 999,
  //   name: 'hawkins1231'
  // })

  // 第三种修改方式，工厂函数修改,推荐使用
  // Test.$patch((state)=>{
  //   state.current=9999999
  //   state.name='awefataweawer'
  // })

  // 第四种方式：必须修改整个对象,不推荐
  // Test.$state = {
  //   current: 12352,
  //   name: 'rsgergsrt999'
  // }

  // 第五种：使用actions修改
  Test.setCurrent(789)
}
const changeUser = () => {
  Test.setUser()
}
const testAsync = () => {
  Test.setUser2()
}
const testReset = () => {
  // 重置默认值
  Test.$reset()
}

// 修改属性就监听
Test.$subscribe((args, state) => {
  console.log('=====》', args);

  console.log('=====》', state);
})
// 调用actions就监听
Test.$onAction((args) => {
  console.log('######', args);
  args.after(() => {
    console.log('action之后');

  })

})
</script>
<style scoped lang='scss'></style>