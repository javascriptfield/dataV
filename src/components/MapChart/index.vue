<script setup>
import * as echarts from "echarts";
import { onMounted, ref } from "vue";
import { suzhouJson } from "../../assets/json/suzhou.js";
import axios from "axios";
echarts.registerMap("suzhou", suzhouJson);
let mapChart = null;
const seriesData = suzhouJson.features.map((e) => {
  return {
    name: e.properties.name,
    value: 0,
  };
});
const getData = () => {
  axios
    .post("/ZsExternalInterface/largeScreen/transactionStatistics/regionPrice")
    .then((res) => {
      if (res.data.code == 10000) {
        res.data.result.slice(0, 9).forEach((element, index) => {
          seriesData[index].value = element.regionPrice;
        });
        setOption();
      }
    });
};
const setOption = () => {
  mapChart.setOption({
    series: [
      {
        type: "map",
        map: "suzhou",
        data: seriesData,
        label: {
          show: true,
          color: "#F5CF7A",
          fontSize: 10,
          formatter: function (params) {
            return params.name + "\n\n" + `${params.value}元/m²`;
          },
        },
        itemStyle: {
          areaColor: "rgba(40,147,195,0.2)",
          borderColor: "#28AEC3",
          borderWidth: 2,
        },
      },
    ],
  });
};
onMounted(() => {
  mapChart = echarts.init(document.getElementById("mapChart"));
  window.addEventListener("resize", () => {
    mapChart.resize();
  });
  getData();
});
</script>
<template>
  <div id="mapChart" :style="{ height: '100%', width: '100%' }"></div>
</template>
