<script setup>
import * as echarts from "echarts";
import { onMounted, nextTick } from "vue";
onMounted(() => {
  const superviseMoneyBarChart = echarts.init(
    document.getElementById("superviseMoneyBarChart")
  );
  window.addEventListener("resize", () => {
    superviseMoneyBarChart.resize();
  });
  nextTick(() => {
    superviseMoneyBarChart.setOption({
      grid: {
        top: "30%",
        bottom: "16%",
        right: "6%",
        left: "12%",
      },
      legend: {
        data: ["监管资金出账", "监管资金入账"],
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
          max: 100,
          interval: 25,
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
          name: "监管资金出账",
          data: [26, 59, 90, 24, 27, 77, 56, 22, 87, 18, 60, 23],
          itemStyle: {
            normal: {
              color: "#7BD9F6",
            },
          },
        },
        {
          type: "bar",
          name: "监管资金入账",
          data: [26, 59, 90, 24, 27, 77, 17, 22, 48, 18, 60, 23],
          itemStyle: {
            normal: {
              color: "#F7AE7C",
            },
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
      >每月监管资金出入账</span
    >
    <div id="superviseMoneyBarChart" style="width: 100%; height: 100%"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../style/function.scss";
.image-border {
  width: 693px;
  height: pxToVh(320);
}
</style>
