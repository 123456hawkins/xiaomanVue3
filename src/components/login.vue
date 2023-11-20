<template>
  <div class="Login">
    <h2>登录页</h2>
    <table>
      <thead>
        <tr>
          <th>品牌</th>
          <th>价格</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="item.id" v-for="item in data">
          <th>{{ item.name }}</th>
          <th>{{ item.price }}</th>
          <th><button @click="toDetial(item)">跳转详情页</button></th>
        </tr>
      </tbody>
      <tfoot></tfoot>
    </table>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { data } from './list.json'
type Item = {
  name: string;
  price: number;
  id: number;
}
const router = useRouter()

const toDetial = (item: Item) => {
  router.push({
    // 第一种传参
    // path: '/reg',
    // query: item

    // 第二种传参,params只能配合name使用,参数不会显示到url
    name: 'reg',
    params: { id: item.id }
  })
}

</script>
<style scoped lang='scss'>
.Login {
  background: green;
  height: 400px;
  width: 400px;
}
</style>