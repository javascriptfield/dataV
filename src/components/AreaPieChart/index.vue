<script setup>
import * as echarts from "echarts";
import { onMounted, ref } from "vue";
import axios from "axios";
let areaPieChart = ref(null);
const series = ref([
  {
    value: 0,
    name: "144m²以上",
    key: "segQuantity1",
    itemStyle: { color: "#BD7CF7" },
  },
  {
    value: 0,
    name: "120-144m²",
    key: "segQuantity1",
    itemStyle: { color: "#7BD9F6" },
  },
  {
    value: 0,
    name: "90-120m²",
    key: "segQuantity3",
    itemStyle: { color: "#F77BC7" },
  },
  {
    value: 0,
    name: "60-90m²",
    key: "segQuantity2",
    itemStyle: { color: "#F7AE7C" },
  },
  {
    value: 0,
    name: "60m²以下",
    key: "segQuantity1",
    itemStyle: { color: "#F5CF7A" },
  },
]);
const getData = () => {
  axios
    .post("/largeScreen/transactionStatistics/saleVolumeAreaSegment")
    .then((res) => {
      if (res.data.code == 10000) {
        for (const key in res.data.result) {
          if (Object.hasOwnProperty.call(res.data.result, key)) {
            const element = res.data.result[key];
            series.value.forEach((e) => {
              if (e.key == key) {
                e.value = element;
              }
            });
          }
        }
        setOption();
      }
    });
};
const setOption = () => {
  areaPieChart.value.setOption({
    legend: {
      orient: "vertical",
      left: "6%",
      top: "center",
      itemGap: 12,
      data: ["144m²以上", "120-144m²", "90-120m²", "60-90m²", "60m²以下"],
      textStyle: {
        fontSize: 12,
        color: "#fff",
      },
    },
    grid: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "78%"],
        center: ["64%", "55%"],
        avoidLabelOverlap: false,
        minAngle: 35,
        label: {
          show: true,
          position: "inner",
          color: "#fff",
          formatter: function name(data) {
            return data.percent + "%";
          },
        },
        data: series.value,
      },
    ],
  });
};
onMounted(() => {
  areaPieChart.value = echarts.init(document.getElementById("areaPieChart"));
  getData();
  window.addEventListener("resize", () => {
    areaPieChart.value.resize();
  });
});
</script>
<template>
  <div id="areaPieChart" style="width: 100%; height: 100%"></div>
</template>
