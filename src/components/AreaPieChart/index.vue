<script setup>
import * as echarts from "echarts";
import { onMounted, nextTick } from "vue";

onMounted(() => {
  const areaPieChart = echarts.init(document.getElementById("areaPieChart"));
  window.addEventListener("resize", () => {
    areaPieChart.resize();
  });
  nextTick(() => {
    areaPieChart.setOption({
      legend: {
        orient: "vertical",
        left: "6%",
        top: "center",
        itemGap: 12,
        data: [
          "140m²以上",
          "120-140m²",
          "90-120m²",
          "70-90m²",
          "50-70m²",
          "50m²以下",
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
          data: [
            {
              value: 135,
              name: "140m²以上",
              itemStyle: { color: "#BD7CF7" },
            },
            {
              value: 735,
              name: "120-140m²",
              itemStyle: { color: "#7C9DF7" },
            },
            {
              value: 580,
              name: "90-120m²",
              itemStyle: { color: "#7BD9F6" },
            },
            {
              value: 484,
              name: "70-90m²",
              itemStyle: { color: "#F77BC7" },
            },
            {
              value: 300,
              name: "50-70m²",
              itemStyle: { color: "#F7AE7C" },
            },
            {
              value: 200,
              name: "50m²以下",
              itemStyle: { color: "#F5CF7A" },
            },
          ],
        },
      ],
    });
  });
});
</script>
<template>
  <div id="areaPieChart" style="width: 100%; height: 100%"></div>
</template>
