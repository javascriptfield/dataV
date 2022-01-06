<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import CustomCard from "../components/CustomCard/index.vue";
import SuperviseAreaBarChart from "../components/SuperviseAreaBarChart/index.vue";
import SuperviseMoneyBarChart from "../components/SuperviseMoneyBarChart/index.vue";
import BankLoanAmountBarChart from "../components/BankLoanAmountBarChart/index.vue";
const gridList = [
  {
    name: "监管项目(个)",
    value: "32",
    src: "监管项目.png",
  },
  {
    name: "监管总面积(m²)",
    value: "422213.12",
    src: "监管总面积.png",
  },
  {
    name: "监管总额度(万元)",
    value: "592192.91",
    src: "监管总额度.png",
  },
  {
    name: "监管总金额(万元)",
    value: "512188.10",
    src: "监管总金额.png",
  },
  {
    name: "总入账资金(万元)",
    value: "888828.12",
    src: "总入账资金.png",
  },
  {
    name: "总拨付资金(万元)",
    value: "432177.78",
    src: "总拨付资金.png",
  },
  {
    name: "合同入账比例",
    value: "67.12%",
    src: "合同入账比例.png",
  },
  {
    name: "贷款入账比例",
    value: "88.12%",
    src: "贷款入账比例.png",
  },
];
</script>

<template>
  <div class="w-full h-full text-center">
    <div class="header-container flex flex-col items-center justify-center">
      <span class="header-text font-bold truncate">商品房交易可视化平台</span>
    </div>
    <div class="flex">
      <div class="grid grid-cols-2">
        <CustomCard
          v-for="(item, index) in gridList"
          :key="index"
          :chartName="item.name"
          :chartValue="item.value"
          :chartSrc="item.src"
        />
      </div>
      <div class="grid grid-cols-1">
        <SuperviseAreaBarChart />
        <SuperviseMoneyBarChart />
      </div>
      <div class="grid grid-cols-1">
        <BankLoanAmountBarChart />
      </div>
    </div>
  </div>
</template>
