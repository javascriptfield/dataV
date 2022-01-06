<script setup>
import * as echarts from "echarts";
import { onMounted } from "vue";
import axios from "axios";
let salesStatisticsChart = null;
const regionSalesList = [];
const getData = () => {
  axios.post(`${import.meta.env.VITE_API_PREFIX}/regionSales`).then((res) => {
    if (res.data.code == 10000) {
      res.data.result.slice(0, 9).forEach((element) => {
        regionSalesList.push(element.regionSales);
      });
      setOption();
    }
  });
};
const setOption = () => {
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
        data: regionSalesList,
        itemStyle: {
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
    ],
  });
};
onMounted(() => {
  salesStatisticsChart = echarts.init(
    document.getElementById("salesStatisticsChart")
  );
  getData();
  window.addEventListener("resize", () => {
    salesStatisticsChart.resize();
  });
});
</script>
<template>
  <div id="salesStatisticsChart" style="width: 100%; height: 100%"></div>
</template>
