<script setup>
import * as echarts from "echarts";
import { onMounted, nextTick } from "vue";
onMounted(() => {
  const salesStatisticsChart = echarts.init(
    document.getElementById("salesStatisticsChart")
  );
  window.addEventListener("resize", () => {
    salesStatisticsChart.resize();
  });
  nextTick(() => {
    salesStatisticsChart.setOption({
      grid: {
        top: "30%",
        bottom: "16%",
        right: "6%",
        left: "12%",
      },
      xAxis: [
        {
          data: [
            "姑苏区",
            "相乘区",
            "虎丘区",
            "吴中区",
            "吴江区",
            "昆山市",
            "太仓市",
            "常熟市",
            "张家港市",
          ].map((e) => {
            return {
              value: e,
              textStyle: {
                color: "#8497AA",
              },
            };
          }),
          axisLabel: {
            interval: 0,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
              color: "#445D79",
            },
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          min: 0,
          max: 1000,
          interval: 200,
          nameTextStyle: {
            color: "#8497AA",
          },
          axisLabel: {
            color: "#8497AA",
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
              color: "#445D79",
            },
          },
        },
      ],
      series: [
        {
          type: "bar",
          data: [20, 49, 70, 232, 256, 767, 1356, 1622, 326],
          itemStyle: {
            normal: {
              color: "#BD7CF7",
              label: {
                show: true,
                position: "top",
                textStyle: {
                  color: "#8497AA",
                  fontSize: 12,
                },
              },
            },
          },
        },
      ],
    });
  });
});
</script>
<template>
  <div id="salesStatisticsChart" style="width: 100%; height: 100%"></div>
</template>
