<script setup>
const getImageUrl = (name) => {
  return new URL(`../../assets/images/${name}`, import.meta.url).href;
};
const props = defineProps({
  chartSrc: {
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
</script>
<template>
  <div class="image-border relative flex items-center">
    <div
      class="logo"
      :style="{
        background: `url(${getImageUrl(props.chartSrc)}) no-repeat center`,
        'background-size': '100% 100%',
      }"
    ></div>
    <div class="flex flex-col">
      <span class="graph-title truncate text-left">{{ props.chartName }}</span>
      <span class="graph-value truncate text-left">{{ props.chartValue }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../style/function.scss";
.image-border {
  width: 337px;
  height: pxToVh(152);
  background: url("../src/assets/images/border1.png") no-repeat center;
  background-size: 100% 100%;
  margin: 0 20px 20px 20px;
}
.logo {
  width: 84px;
  height: pxToVh(84);
  margin: 0 20px;
}
.graph-title {
  color: #7cf7cd;
  font-size: pxToVh(16);
  width: 122px;
}
.graph-value {
  color: #7cf7cd;
  font-size: pxToVh(28);
  width: 138px;
}
</style>
