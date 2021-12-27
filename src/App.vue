<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import CornerCut from "./components/CornerCut/index.vue";
import MidCut from "./components/MidCut/index.vue";
</script>

<template>
  <div class="container">
    <MidCut />
    <CornerCut />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #01173c;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  padding: 20px;
}
body {
  margin: 0;
}
</style>
