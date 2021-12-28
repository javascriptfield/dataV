<script setup>
import { ref } from "vue";
import Title from "../Title/index.vue";
</script>

<template>
  <div class="corner-cut-container">
    <Title />
    <div class="absolute-background"></div>
    <div class="background border"></div>
  </div>
</template>

<style scoped>
.corner-cut-container {
  width: 480px;
  height: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.absolute-background {
  position: absolute;
  width: 458px;
  height: 458px;
  background: rgba(125, 217, 247, 0.15);
  margin-top: 20px;
  z-index: 0;
  clip-path: polygon(
    32px 0,
    0 32px,
    0 calc(100% - 32px),
    32px 100%,
    calc(100% - 32px) 100%,
    100% calc(100% - 32px),
    100% 32px,
    calc(100% - 32px) 0
  );
}
.background {
  width: 458px;
  height: 458px;
  background: rgba(125, 217, 247, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -20px;
  z-index: 1;
} /* 下文元素都使用了此样式 */
.border {
  clip-path: polygon(
    32px 0,
    0 32px,
    0 calc(100% - 32px),
    32px 100%,
    33px calc(100% - 1px),
    1px calc(100% - 33px),
    1px 33px,
    33px 1px,
    calc(100% - 33px) 1px,
    calc(100% - 1px) 33px,
    calc(100% - 1px) calc(100% - 33px),
    calc(100% - 33px) calc(100% - 1px),
    33px calc(100% - 1px),
    33px 100%,
    calc(100% - 32px) 100%,
    100% calc(100% - 32px),
    100% 32px,
    calc(100% - 32px) 0
  );
}
</style>
