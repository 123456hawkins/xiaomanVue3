<template>
  <div>
    hawkins+接受参数{{ obj }}
  </div>
</template>

<script setup lang='ts'>
import { defineProps, ref, reactive } from 'vue'
defineProps<{ obj: any }>()
</script>
<style scoped lang='scss'></style>