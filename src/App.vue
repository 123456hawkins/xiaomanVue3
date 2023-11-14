<template>
  <div></div>
  <tree></tree>
</template>

<script setup lang='ts'>
import tree from './components/tree.vue';
type TreeList = {
  name: string;
  icon?: string;
  children: TreeList[] | []
}

</script>
<style scoped lang='scss'></style>