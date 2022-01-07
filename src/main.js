import { createApp } from "vue";
import App from "./App.vue";
import "virtual:windi.css";
import { setupProdMockServer } from "../mock/_mockProdServer";
if (["mock", "development", "github"].includes(import.meta.env.MODE)) {
  setupProdMockServer();
}
createApp(App).mount("#app");
