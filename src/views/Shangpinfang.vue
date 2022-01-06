<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import CornerCut from "../components/CornerCut/index.vue";
import MidCut from "../components/MidCut/index.vue";
import MapChart from "../components/MapChart/index.vue";
import PricePieChart from "../components/PricePieChart/index.vue";
import AreaPieChart from "../components/AreaPieChart/index.vue";
import GaugeChartContainer from "../components/GaugeChartContainer/index.vue";
import TrendChart from "../components/TrendChart/index.vue";
import SalesStatisticsChart from "../components/SalesStatisticsChart/index.vue";
import StatisticsTable from "../components/StatisticsTable/index.vue";
</script>

<template>
  <div class="w-full h-full text-center">
    <div class="header-container flex flex-col items-center justify-center">
      <span class="header-text font-bold truncate">商品房交易可视化平台</span>
    </div>
    <div class="flex">
      <div>
        <div
          class="image-border relative flex flex-col items-center justify-center"
        >
          <span class="graph-title truncate absolute top-0 font-bold"
            >价格分段销售占比</span
          >
          <PricePieChart />
        </div>
        <div
          class="image-border relative flex flex-col items-center justify-center"
        >
          <span class="graph-title truncate absolute top-0 font-bold"
            >当前销量及库存</span
          >
          <GaugeChartContainer />
        </div>
        <div
          class="image-border relative flex flex-col items-center justify-center"
        >
          <span class="graph-title truncate absolute top-0 font-bold"
            >面积分段销量占比</span
          >
          <AreaPieChart />
        </div>
      </div>
      <div class="map">
        <MapChart />
      </div>
      <div>
        <div
          class="image-border relative flex flex-col items-center justify-center"
        >
          <span class="graph-title truncate absolute top-0 font-bold"
            >全年趋势</span
          >
          <TrendChart />
        </div>
        <div
          class="image-border relative flex flex-col items-center justify-center"
        >
          <span class="graph-title truncate absolute top-0 font-bold"
            >上月销售统计</span
          >
          <StatisticsTable />
        </div>
        <div
          class="image-border relative flex flex-col items-center justify-center"
        >
          <span class="graph-title truncate absolute top-0 font-bold"
            >各区销量统计</span
          >
          <SalesStatisticsChart />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../style/function.scss";
.map {
  width: 760px;
  height: pxToVh(1000);
}
.image-border {
  background: url("../src/assets/images/border.png") no-repeat center;
  background-size: 100% 100%;
  margin: 0 20px 20px 20px;
  width: 541px;
  height: pxToVh(300);
}
.graph-title {
  font-size: pxToVh(18);
}
</style>
