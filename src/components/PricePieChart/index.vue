<script setup>
import * as echarts from "echarts";
import { onMounted } from "vue";
import axios from "axios";
let pricePieChart = null;
const series = [
  {
    value: 0,
    name: "6000元/m²以下",
    key: "proQuantity1",
    itemStyle: { color: "#BD7CF7" },
  },
  {
    value: 0,
    name: "6000-8000元/m²",
    key: "proQuantity2",
    itemStyle: { color: "#7C9DF7" },
  },
  {
    value: 0,
    name: "8000-10000元/m²",
    key: "proQuantity3",
    itemStyle: { color: "#7BD9F6" },
  },
  {
    value: 0,
    name: "10000-14000元/m²",
    key: "proQuantity4",
    itemStyle: { color: "#F77BC7" },
  },
  {
    value: 0,
    name: "14000-20000元/m²",
    key: "proQuantity5",
    itemStyle: { color: "#F7AE7C" },
  },
  {
    value: 0,
    name: "20000元/m²以上",
    key: "proQuantity6",
    itemStyle: { color: "#F5CF7A" },
  },
];
const getData = () => {
  axios
    .post(`${import.meta.env.VITE_API_PREFIX}/salesVolumeProportion`)
    .then((res) => {
      if (res.data.code == 10000) {
        for (const key in res.data.result) {
          if (Object.hasOwnProperty.call(res.data.result, key)) {
            const element = res.data.result[key];
            series.forEach((e) => {
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
const setOption = () => [
  pricePieChart.setOption({
    legend: {
      orient: "vertical",
      left: "6%",
      top: "center",
      itemGap: 12,
      data: [
        "6000元/m²以下",
        "6000-8000元/m²",
        "8000-10000元/m²",
        "10000-14000元/m²",
        "14000-20000元/m²",
        "20000元/m²以上",
      ],
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
        data: series,
      },
    ],
  }),
];
onMounted(() => {
  pricePieChart = echarts.init(document.getElementById("pricePieChart"));
  getData();
  window.addEventListener("resize", () => {
    pricePieChart.resize();
  });
});
</script>
<template>
  <div id="pricePieChart" style="width: 100%; height: 100%"></div>
</template>
