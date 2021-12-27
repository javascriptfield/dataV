<script setup>
import { ref } from "vue";
</script>

<template>
  <div class="bg rect"></div>
</template>

<style scoped>
.bg {
  width: 458px;
  height: 458px;
  background: rgba(125, 217, 247, 1);
} /* 下文元素都使用了此样式 */
.rect {
  clip-path: polygon(
    10px 0,
    0 10px,
    0 100%,
    1px 100%,
    1px 11px,
    11px 1px,
    calc(100% - 1px) 1px,
    calc(100% - 1px) calc(100% - 11px),
    calc(100% - 11px) calc(100% - 1px),
    1px calc(100% - 1px),
    1px 100%,
    calc(100% - 10px) 100%,
    100% calc(100% - 10px),
    100% 0
  );
}

.title {
  width: 276px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  background-color: rgba(125, 217, 247, 1);
  color: #01173c;
  font-weight: bold;
  font-size: 18px;
  clip-path: polygon(
    10px 0,
    calc(100% - 10px) 0,
    100% 20px,
    calc(100% - 10px) 100%,
    10px 100%,
    0 20px
  );
}
</style>
