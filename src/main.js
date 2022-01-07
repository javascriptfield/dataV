import { createApp } from "vue";
import App from "./App.vue";
import "virtual:windi.css";
import { setupProdMockServer } from "../mock/_mockProdServer";
setupProdMockServer();
// if (import.meta.env.MODE === "development") {
// }
createApp(App).mount("#app");
