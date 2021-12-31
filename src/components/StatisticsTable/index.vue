<script setup></script>
<template>
  <table class="first-table">
    <tr>
      <th>成交套数（套）</th>
      <th>环比</th>
      <th>同比</th>
    </tr>
    <tr>
      <td>1220</td>
      <td>63.85%</td>
      <td>20.34%</td>
    </tr>
  </table>
  <table>
    <tr>
      <th>成交面积（万m²）</th>
      <th>环比</th>
      <th>同比</th>
    </tr>
    <tr>
      <td>15.13</td>
      <td>60.15%</td>
      <td>15.98%</td>
    </tr>
  </table>
  <table>
    <tr>
      <th>成交均价（元/m²）</th>
      <th>环比</th>
      <th>同比</th>
    </tr>
    <tr>
      <td>7982.13</td>
      <td>60.54%</td>
      <td>8.56%</td>
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
