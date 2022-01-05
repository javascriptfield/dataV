<script setup>
import * as echarts from "echarts";
import { onMounted, nextTick } from "vue";
onMounted(() => {
  const trendChart = echarts.init(document.getElementById("trendChart"));
  window.addEventListener("resize", () => {
    trendChart.resize();
  });
  nextTick(() => {
    trendChart.setOption({
      grid: {
        top: "30%",
        bottom: "16%",
        right: "16%",
        left: "12%",
      },
      legend: {
        data: ["新增可售量", "销售量", "单价"],
        y: "14%",
        x: "center",
        itemHeight: 16,
        textStyle: {
          color: "#FFF",
          fontSize: 12,
        },
      },
      xAxis: [
        {
          data: Array.from(new Array(13).keys())
            .slice(1)
            .map((e) => {
              return {
                value: e + "月",
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
          name: "销量（套）",
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
        {
          type: "value",
          name: "均价（元/m²）",
          min: 0,
          max: 50000,
          interval: 10000,
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
          name: "新增可售量",
          type: "bar",
          data: [20, 49, 70, 232, 256, 767, 1356, 1622, 326, 200, 64, 33],
          itemStyle: {
            color: "#7999D4",
          },
        },
        {
          name: "销售量",
          type: "bar",
          data: [26, 59, 90, 264, 287, 707, 1756, 1822, 487, 188, 60, 23],
          itemStyle: {
            color: "#E89898",
          },
        },
        {
          name: "单价",
          type: "line",
          yAxisIndex: 1,
          data: [
            10000, 20000, 30000, 40000, 32000, 36000, 22000, 23000, 32000,
            47000, 25000, 32000,
          ],
          itemStyle: {
            color: "#7BD9F6",
            lineStyle: {
              color: "#7BD9F6",
            },
          },
        },
      ],
    });
  });
});
</script>
<template>
  <div id="trendChart" style="width: 100%; height: 100%"></div>
</template>
