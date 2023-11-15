<template>
  <div class="pageCotainer">
    <div class="sync">
      <div class="sync-content">
        <div><img :src="data.url"></div>
      </div>
      <div class="sync-pop">
        <div>{{ data.name }}</div>
        <div>&nbsp;{{ data.age }}</div>
      </div>
      <hr>
      <div class="sync-footer">{{ data.desc }}</div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { axios } from '@/server/axios'
interface Data {
  data: {
    name: string,
    age: number,
    url: string,
    desc: string
  }
}
const { data } = await axios.get<Data>('./data.json')
</script>
<style scoped lang='scss'>
.pageCotainer {
  height: 200px;
  width: 400px;
  border: 1px solid black;

  .sync {
    height: 100%;

    &>div {
      border: 1px solid black;
    }

    .sync-content {
      height: 40%;
    }

    .sync-pop {
      height: 20%;
    }

    .sync-footer {
      height: 40%;
    }
  }
}
</style>