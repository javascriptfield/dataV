<script setup>
import GaugeChart from "../GaugeChart/index.vue";
import { onMounted, ref } from "vue";
import axios from "axios";
let storage = ref(0);
let amount = ref(0);
let interval = ref(0);
const getData = () => {
  axios.post("/largeScreen/transactionStatistics/salesAndStock").then((res) => {
    if (res.data.code == 10000) {
      const { cycle, salesCurrentMonth, stockCurrentMonth } = res.data.result;
      storage.value = stockCurrentMonth;
      amount.value = salesCurrentMonth;
      interval.value = cycle;
    }
  });
};
onMounted(() => {
  getData();
});
</script>
<template>
  <div class="gauge-container">
    <GaugeChart
      chartId="storage"
      chartName="当前库存(套)"
      :chartValue="storage"
    />
    <GaugeChart
      chartId="amount"
      chartName="当前销量(套)"
      :chartValue="amount"
    />
    <GaugeChart
      chartId="interval"
      chartName="去库存周期(月)"
      :chartValue="interval"
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
