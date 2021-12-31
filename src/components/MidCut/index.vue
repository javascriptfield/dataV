<script setup>
import { ref } from "vue";
</script>

<template>
  <div id="div1">
    <div class="trapezoidMaxLine">
      <div class="trapezoidMinLine"></div>
      <span class="unitName">用户访问量</span>
    </div>
  </div>
</template>

<style scoped>
#div1 {
  position: relative;
  width: 30%;
  margin: 50px;
  border: 1px solid #194579;
  height: 200px;
  border-top: 0;
  min-width: 230px;
}
.trapezoidMaxLine {
  position: absolute;
  z-index: 4;
  width: 100%;
}
.trapezoidMaxLine:before {
  content: "";
  position: absolute;
  z-index: -1;
  width: calc(25% - 6px);
  border-top: 1px solid #194579;
}
.trapezoidMaxLine:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  width: calc(25% - 6px);
  border-top: 1px solid #194579;
}
.trapezoidMinLine {
  position: absolute;
  z-index: 4;
  height: 20px;
  width: 50%;
  top: 1px;
  left: 50%;
  transform: translateX(-50%);
}
.trapezoidMinLine:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  border: 1px solid #194579;
  border-top: 0 solid #194579;
  transform: perspective(10px) rotateX(-3deg);
}
.unitName {
  position: absolute;
  color: #fff;
  left: 50%;
  transform: translateX(-50%);
  top: -20px;
  font-size: 18px;
}
</style>
