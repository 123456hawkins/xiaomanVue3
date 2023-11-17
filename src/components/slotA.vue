<template>
  <div>
    我是插槽
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
/* 插槽选择器 */
:slotted(.a) {
  color: red
}
/* 全局选择器 */
:global(div) {
  font-size: 40px;
}
</style>