<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import CornerCut from "../components/CornerCut/index.vue";
import MidCut from "../components/MidCut/index.vue";
import MapChart from "../components/MapChart/index.vue";
import PricePieChart from "../components/PricePieChart/index.vue";
import AreaPieChart from "../components/AreaPieChart/index.vue";
const titleHeight = (100 / 1080) * 80 + "vh";
const mapHeight = (100 / 1080) * 1000 + "vh";
const graphHeight = (100 / 1080) * 300 + "vh";
const fontSize = (document.body.clientWidth / 1920) * 18 + "px";
</script>

<template>
  <div class="container">
    <div class="header">商品房交易可视化平台</div>
    <div class="graph-container">
      <div class="left-container">
        <div class="image-border">
          <span class="graph-title">价格分段销售占比</span>
          <PricePieChart />
        </div>
        <div class="image-border">
          <span class="graph-title">当前销量及库存</span>
        </div>
        <div class="image-border">
          <span class="graph-title">面积分段销量占比</span>
          <AreaPieChart />
        </div>
      </div>
      <div class="map">
        <MapChart />
      </div>
      <div class="right-container">
        <div class="image-border">
          <span class="graph-title">全年趋势</span>
        </div>
        <div class="image-border">
          <span class="graph-title">上月销售统计</span>
        </div>
        <div class="image-border">
          <span class="graph-title">各区销量统计</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: v-bind(titleHeight);
  box-shadow: 0 -7px 30px -8px rgba(40, 174, 195, 0.64) inset;
  font-size: calc(v-bind(fontSize) * 2);
  color: #28aec3;
  font-weight: bold;
  margin-bottom: 20px;
}
.graph-container {
  display: flex;
  width: 100%;
}
.map {
  width: 760px;
  height: v-bind(mapHeight);
}
.image-border {
  position: relative;
  width: 541px;
  height: v-bind(graphHeight);
  background: url("../src/assets/images/border.png") no-repeat center;
  background-size: 100% 100%;
  margin: 0 20px 20px 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.graph-title {
  color: #28aec3;
  font-size: v-bind(fontSize);
  font-weight: bold;
  width: 144px;
  position: absolute;
  top: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
}
</style>
