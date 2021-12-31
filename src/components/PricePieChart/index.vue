<script setup>
import * as echarts from "echarts";
import { onMounted, nextTick } from "vue";

onMounted(() => {
  const pricePieChart = echarts.init(document.getElementById("pricePieChart"));
  window.addEventListener("resize", () => {
    pricePieChart.resize();
  });
  nextTick(() => {
    pricePieChart.setOption({
      legend: {
        orient: "vertical",
        left: "6%",
        top: "center",
        itemGap: 12,
        data: [
          "10000元/m²以下",
          "10000-15000元/m²",
          "15000-20000元/m²",
          "2000-25000元/m²",
          "25000-30000元/m²",
          "30000元/m²以上",
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
              name: "10000元/m²以下",
              itemStyle: { color: "#BD7CF7" },
            },
            {
              value: 735,
              name: "10000-15000元/m²",
              itemStyle: { color: "#7C9DF7" },
            },
            {
              value: 580,
              name: "15000-20000元/m²",
              itemStyle: { color: "#7BD9F6" },
            },
            {
              value: 484,
              name: "2000-25000元/m²",
              itemStyle: { color: "#F77BC7" },
            },
            {
              value: 300,
              name: "25000-30000元/m²",
              itemStyle: { color: "#F7AE7C" },
            },
            {
              value: 200,
              name: "30000元/m²以上",
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
  <div id="pricePieChart" style="width: 100%; height: 100%"></div>
</template>
