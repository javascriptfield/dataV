<script setup>
import * as echarts from "echarts";
import { onMounted, nextTick } from "vue";
onMounted(() => {
  const superviseAreaBarChart = echarts.init(
    document.getElementById("superviseAreaBarChart")
  );
  window.addEventListener("resize", () => {
    superviseAreaBarChart.resize();
  });
  nextTick(() => {
    superviseAreaBarChart.setOption({
      grid: {
        top: "30%",
        bottom: "16%",
        right: "6%",
        left: "12%",
      },
      legend: {
        data: ["新增监管面积", "解除监管面积"],
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
          type: "bar",
          name: "新增监管面积",
          data: [
            10000, 20000, 30000, 40000, 32000, 36000, 22000, 23000, 32000,
            47000, 25000, 32000,
          ],
          itemStyle: {
            color: "#7C9DF7",
          },
        },
        {
          type: "bar",
          name: "解除监管面积",
          data: [
            10000, 20000, 30000, 40000, 32000, 36000, 22000, 23000, 32000,
            47000, 25000, 32000,
          ],
          itemStyle: {
            color: "#F77BC7",
          },
        },
      ],
    });
  });
});
</script>
<template>
  <div class="image-border relative flex flex-col items-center justify-center">
    <span class="graph-title truncate absolute top-0 font-bold"
      >新增和解除监管面积</span
    >
    <div id="superviseAreaBarChart" style="width: 100%; height: 100%"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../style/function.scss";
.image-border {
  width: 693px;
  height: pxToVh(320);
}
</style>
