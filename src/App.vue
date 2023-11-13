<template>
  <header>
    <div>
      <div v-for="(item,index) in arr" :key="index">
        {{ item }}
      </div>
    </div>


  </header>

  <RouterView />
</template>
<script setup lang="ts">

const arr: string[] = ['A', 'B', 'C', 'D']
arr.splice(2, 0, 'DDD')//第一个参数，指定在哪个位置添加/删除项目，使用负值指定从数组末尾开始的位置;第二个参数是要删除的项目数，如为0则不删除;第三个参数是要添加到数组中的项目数
</script>
<style scoped></style>
