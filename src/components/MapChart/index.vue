<script setup>
import * as echarts from "echarts";
import { onMounted } from "vue";
import { suzhouJson } from "../../assets/json/suzhou.js";
echarts.registerMap("suzhou", suzhouJson);
const seriesData = suzhouJson.features.map((e) => {
  return {
    name: e.properties.name,
    value: e.properties.id,
  };
});
onMounted(() => {
  const mapChart = echarts.init(document.getElementById("mapChart"));
  window.addEventListener("resize", () => {
    mapChart.resize();
  });
  mapChart.setOption({
    series: [
      {
        type: "map",
        map: "suzhou",
        data: seriesData,
        label: {
          show: true,
          color: "#F5CF7A",
        },
        itemStyle: {
          areaColor: "rgba(40,147,195,0.2)",
          borderColor: "#28AEC3",
          borderWidth: 2,
        },
      },
    ],
  });
});
</script>
<template>
  <div id="mapChart" :style="{ height: '100%', width: '100%' }"></div>
</template>
