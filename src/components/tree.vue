<template>
  <div></div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
type TreeList = {
  name: string;
  icon?: string;
  children?: TreeList[] | []
}
const data = reactive<TreeList[]>([
  {
    name: '1',
    icon: 'sfawefa',
    children: [
      {
        name: '1-1',
        icon: 'sfawefa'
      }
    ]
  },
  {
    name: '2',
    icon: 'sfawefa',
    children: [
      {
        name: '2-1',
        icon: 'sfawefa'
      }
    ]
  },
  {
    name: '3',
    icon: 'sfawefa',
    children: [
      {
        name: '3-1',
        icon: 'sfawefa',
        children: [{
          name: '3-1-1',
          icon: 'sfawefa',
        }]
      }
    ]
  }
])

</script>
<style scoped lang='scss'></style>