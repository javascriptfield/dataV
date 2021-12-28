<script setup>
import { ref } from "vue";
</script>

<template>
  <div class="title-background">
    <span class="title-text">托管业务总金额统计</span>
  </div>
</template>

<style scoped>
.title-background {
  width: 276px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  background-color: rgba(125, 217, 247, 1);
  clip-path: polygon(
    10px 0,
    calc(100% - 10px) 0,
    100% 20px,
    calc(100% - 10px) 100%,
    10px 100%,
    0 20px
  );
}
.title-text {
  width: 80%;
  z-index: 9999;
  color: #01173c;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
