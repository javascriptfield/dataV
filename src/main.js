import { createApp } from "vue";
import App from "./App.vue";
import "virtual:windi.css";
import { setupProdMockServer } from "../mock/_mockProdServer";
console.log(import.meta.env.MODE);
if (["mock", "development"].includes(import.meta.env.MODE)) {
  setupProdMockServer();
}
createApp(App).mount("#app");
