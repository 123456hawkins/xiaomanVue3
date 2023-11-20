<template>
  <div class="Reg">注册页
    <!--query接受参数 -->
    <!-- <div>品牌{{ route.query.name }}</div>
    <div>价格{{ route.query.price }}</div> -->
    <!-- params接受参数 -->
    <div>品牌{{ paramsdata?.name }}</div>
    <div>价格{{ paramsdata?.price }}</div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { data } from './list.json'
// 注意是useRoute不是useRouter
import { useRoute } from 'vue-router'
import router from '@/router';
const route = useRoute()
const paramsdata = data.find(v => v.id === Number(route.params.id))

</script>
<style scoped lang='scss'>
.Reg {
  background: red;
  height: 400px;
  width: 400px;
}
</style>