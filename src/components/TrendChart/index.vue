<script setup>
import * as echarts from "echarts";
import { onMounted } from "vue";
import axios from "axios";
let trendChart = null;
const newSaleAbleQuantityList = [];
const salesVolumesList = [];
const monthlyPriceList = [];
const getData = () => {
  axios.post(`${import.meta.env.VITE_API_PREFIX}/monthlyPrice`).then((res) => {
    if (res.data.code == 10000) {
      res.data.result.slice(0, 12).forEach((element) => {
        newSaleAbleQuantityList.push(element.newSaleAbleQuantity);
        salesVolumesList.push(element.salesVolumes);
        monthlyPriceList.push(element.monthlyPrice);
      });
      setOption();
    }
  });
};
const setOption = () => {
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
        data: newSaleAbleQuantityList,
        itemStyle: {
          color: "#7999D4",
        },
      },
      {
        name: "销售量",
        type: "bar",
        data: salesVolumesList,
        itemStyle: {
          color: "#E89898",
        },
      },
      {
        name: "单价",
        type: "line",
        yAxisIndex: 1,
        data: monthlyPriceList,
        itemStyle: {
          color: "#7BD9F6",
          lineStyle: {
            color: "#7BD9F6",
          },
        },
      },
    ],
  });
};
onMounted(() => {
  trendChart = echarts.init(document.getElementById("trendChart"));
  window.addEventListener("resize", () => {
    trendChart.resize();
  });
  getData();
});
</script>
<template>
  <div id="trendChart" style="width: 100%; height: 100%"></div>
</template>
