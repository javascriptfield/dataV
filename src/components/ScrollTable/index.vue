<script setup></script>
<template>
  <div class="table">
    <tr>
      <th>成交套数（套）</th>
      <th>环比</th>
      <th>同比</th>
    </tr>
    <tr v-for="(item, index) in 100" :key="index">
      <td>1220</td>
      <td>63.85%</td>
      <td>20.34%</td>
    </tr>
  </div>
</template>

<style scoped>
.table {
  text-align: center;
  height: 200px;
  width: 500px;
  border-color: #274463;
  border-spacing: 2px;
  color: #7bd9f6;
  padding-top: 10px;
  overflow: hidden;
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
