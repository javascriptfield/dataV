<script setup>
import * as echarts from "echarts";
import { onMounted, nextTick } from "vue";

onMounted(() => {
  const bankLoanAmountBarChart = echarts.init(
    document.getElementById("bankLoanAmountBarChart")
  );
  window.addEventListener("resize", () => {
    bankLoanAmountBarChart.resize();
  });
  nextTick(() => {
    bankLoanAmountBarChart.setOption({
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
          center: ["50%", "55%"],
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
  <div class="image-border relative flex flex-col items-center justify-center">
    <span class="graph-title truncate absolute top-0 font-bold"
      >银行贷款笔数占比</span
    >
    <div id="bankLoanAmountBarChart" style="width: 100%; height: 100%"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../style/function.scss";
.image-border {
  width: 457px;
  height: pxToVh(321);
}
</style>
