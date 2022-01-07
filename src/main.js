import { createApp } from "vue";
import App from "./App.vue";
import "virtual:windi.css";
import { setupProdMockServer } from "../mock/_mockProdServer";
if (import.meta.env.MODE === "development") {
  setupProdMockServer();
}
createApp(App).mount("#app");
