<template>
  <div>

    <table border="true">
      <thead>
        <div><input v-model="searchProp"><button @click="search">点击搜索</button></div>
        <tr>
          <th>商品名称</th>
          <th>商品数量</th>
          <th>商品价格</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in searchData" :key="index">
        <td>{{ item.name }}</td>
        <td>{{ item.amount }}</td>
        <td><button @click="item.amount++">+</button>{{ item.price }}<button @click="item.amount--">-</button></td>
        <td><button @click="del(index)">删除</button></td>
      </tbody>
      <tfoot>
        <div style="margin-left: auto;margin-right:0 ;">商品总价:{{ allPrice }}</div>
      </tfoot>
    </table>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, computed } from 'vue'
interface Data {
  name: string
  amount: number
  price: number
}
let data = reactive<Data[]>([{ name: 'dress', amount: 10, price: 100 }, { name: 'dress', amount: 100, price: 10 }, { name: 'dress', amount: 10, price: 100 }, { name: 'dress', amount: 100, price: 100 },])

let del = (index: number) => data.splice(index, 1)

let searchProp = ref('')

let searchData = computed(() => {
  return data.filter((item: Data) => {
    return item.name.includes(searchProp.value)
  })
})


let allPrice = computed(() => {
  return data.reduce((accumulator, obj) => {
    return accumulator + obj.amount * obj.price
  }, 0)
})

</script>
<style scoped lang='scss'></style>