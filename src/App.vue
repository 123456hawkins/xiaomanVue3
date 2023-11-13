<template>
  <div>Reactive:{{ man }}</div>
  <hr>
  <div>toRef:{{ like2 }}</div>
  <hr>
  <div>toRefs:{{ name }}--{{ sex == 'male' ? '男' : '女' }}--{{ like }} </div>
  <button @click="change">改变</button>
</template>

<script setup lang='ts'>
import { toRef, reactive, toRefs, toRaw } from 'vue'
// toRef只适用于响应式对象的值,非响应式对象没有任何作用
const man = reactive({ name: 'hawkins', sex: 'male', like: 'basketball' })
// 第一个参数填对象,第二个参数填属性名
const like2 = toRef(man, 'like')

// 自己实现toRefs
const toRefsMyself = <T extends object>(object: T) => {
  const map: any = {}
  for (let key in object) {
    map[key] = toRef(object, key)
  }
  return map
}

// let { name, sex, like } = toRefsMyself(man)
let { name, sex, like } = toRefs(man)
const change = () => {
  like2.value = 'hehhehe'
  console.log(toRaw(man));

}
</script>
<style scoped lang='scss'></style>