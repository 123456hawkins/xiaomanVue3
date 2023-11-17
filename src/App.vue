<template>
  <div>
    <el-input placeholder="测试代码" class="input"></el-input>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
</script>
<style scoped lang='scss'>
.input {
  width: 600px;
// vue3使用:deep(<类名>)的方式
  :deep(.el-input__inner) {
    background-color: green;
  }
}
</style>