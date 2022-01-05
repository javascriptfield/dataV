<script setup>
import * as echarts from "echarts";
import { onMounted, ref, watch } from "vue";
let gaugeChart = ref(null);
const props = defineProps({
  chartId: {
    type: String,
    required: true,
  },
  chartName: {
    type: String,
    required: true,
  },
  chartValue: {
    type: [String, Number],
    required: true,
  },
});
const setOption = () => {
  gaugeChart.value.setOption({
    series: [
      {
        type: "gauge",
        startAngle: 90,
        endAngle: -270,
        radius: "70%",
        max: props.chartValue,
        pointer: {
          show: false,
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: false,
          clip: false,
          itemStyle: {
            color: "#7BD9F6",
          },
        },
        axisLine: {
          lineStyle: {
            width: 10,
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        data: [
          {
            value: props.chartValue,
            name: props.chartName,
            title: {
              offsetCenter: ["0%", "140%"],
            },
            detail: {
              valueAnimation: true,
              offsetCenter: ["0%", "0%"],
            },
          },
        ],
        title: {
          fontSize: 14,
          color: "#28AEC3",
        },
        detail: {
          fontSize: 18,
          width: "100%",
          color: "#7BD9F6",
        },
      },
    ],
  });
};
watch(
  () => props.chartValue,
  () => {
    setOption();
  }
);
onMounted(() => {
  gaugeChart.value = echarts.init(document.getElementById(props.chartId));
  window.addEventListener("resize", () => {
    gaugeChart.value.resize();
  });
});
</script>
<template>
  <div :id="chartId" style="width: 100%; height: 100%"></div>
</template>
