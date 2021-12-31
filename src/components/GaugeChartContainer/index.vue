<script setup>
import GaugeChart from "../GaugeChart/index.vue";
</script>
<template>
  <div class="gauge-container">
    <GaugeChart chartId="storage" chartName="当前库存(套)" chartValue="42213" />
    <GaugeChart chartId="amount" chartName="当前销量(套)" chartValue="4220" />
    <GaugeChart
      chartId="interval"
      chartName="去库存周期(月)"
      chartValue="4.2"
    />
  </div>
</template>

<style scoped>
.gauge-container {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
