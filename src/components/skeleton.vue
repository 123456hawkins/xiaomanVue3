<template>
  <div class="pageCotainer">
    <div class="sync">
      <div class="sync-content">
        <div><img></div>
      </div>
      <div class="sync-pop">
        <div></div>
        <div>&nbsp;</div>
      </div>
      <div class="sync-footer"></div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, defineAsyncComponent } from 'vue'
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