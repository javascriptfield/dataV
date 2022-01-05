<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
let tableData = ref({
  lastMonthSales: 0,
  lastMonthSalesArea: 0,
  lastMonthSalesMonthOnMonth: 0,
  lastMonthSalesPrice: 0,
  lastMonthSalesYerrOnYear: 0,
  priceMonthOnMonth: 0,
  priceYerrOnYear: 0,
  salesMonthOnMonth: 0,
  salesYerrOnYear: 0,
});
const getData = () => {
  axios
    .post("largeScreen/transactionStatistics/lastMonthStatistics")
    .then((res) => {
      if (res.data.code == 10000) {
        tableData.value = res.data.result;
      }
    });
};
onMounted(() => {
  getData();
});
</script>
<template>
  <table class="first-table">
    <tr>
      <th>成交套数（套）</th>
      <th>环比</th>
      <th>同比</th>
    </tr>
    <tr>
      <td>{{ tableData.lastMonthSalesYerrOnYear }}</td>
      <td>{{ tableData.salesMonthOnMonth }}%</td>
      <td>{{ tableData.salesYerrOnYear }}%</td>
    </tr>
  </table>
  <table>
    <tr>
      <th>成交面积（万m²）</th>
      <th>环比</th>
      <th>同比</th>
    </tr>
    <tr>
      <td>{{ tableData.lastMonthSalesArea }}</td>
      <td>{{ tableData.lastMonthSalesMonthOnMonth }}%</td>
      <td>{{ tableData.lastMonthSalesYerrOnYear }}%</td>
    </tr>
  </table>
  <table>
    <tr>
      <th>成交均价（元/m²）</th>
      <th>环比</th>
      <th>同比</th>
    </tr>
    <tr>
      <td>{{ tableData.lastMonthSalesPrice }}</td>
      <td>{{ tableData.priceMonthOnMonth }}%</td>
      <td>{{ tableData.priceYerrOnYear }}%</td>
    </tr>
  </table>
</template>

<style scoped>
table {
  text-align: center;
  height: 26%;
  width: 500px;
  border-color: #274463;
  border-spacing: 2px;
  color: #7bd9f6;
  padding-top: 10px;
}
.first-table {
  margin-top: 26px;
}
th {
  font-size: 13px;
  background-color: #345170;
  width: 30%;
}
td {
  font-size: 12px;
  background-color: #1f4063;
}
</style>
