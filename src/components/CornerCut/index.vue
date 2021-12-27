<script setup>
import { ref } from "vue";
</script>

<template>
  <div class="corner-container">
    <div class="title">托管业务总金额统计</div>
    <div class="corner-cut">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.corner-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 480px;
}
.corner-cut {
  width: 480px;
  height: 458px;
  margin-top: -20px;
  display: flex;
  justify-content: center;
  clip-path: polygon(
    32px 0,
    calc(100% - 32px) 0,
    100% 32px,
    100% calc(100% - 32px),
    calc(100% - 32px) 100%,
    32px 100%,
    0 calc(100% - 32px),
    0 32px
  );
  background: linear-gradient(
        -45deg,
        rgba(125, 217, 247, 1) 23px,
        rgba(125, 217, 247, 0.15) 0
      )
      bottom right,
    linear-gradient(
        45deg,
        rgba(125, 217, 247, 1) 23px,
        rgba(125, 217, 247, 0.15) 0
      )
      bottom left,
    linear-gradient(
        135deg,
        rgba(125, 217, 247, 1) 22px,
        rgba(125, 217, 247, 0.15) 0
      )
      top left,
    linear-gradient(
        -135deg,
        rgba(125, 217, 247, 1) 22px,
        rgba(125, 217, 247, 0.15) 0
      )
      top right;
  background-size: 50% 50%;
  background-repeat: no-repeat;
  border: solid 1px rgba(125, 217, 247, 1);
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
