import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
export default defineConfig((command) => {
  return {
    plugins: [vue(), WindiCSS()],
    base:
      command.mode == "github"
        ? "https://javascriptfield.github.io/dataV/"
        : "",
    build: {
      outDir: command.mode == "github" ? "docs" : "",
    },
    server: {
      host: "0.0.0.0",
      proxy: {
        "/ZsExternalInterface": {
          target: "http://192.168.1.140:9619",
          changeOrigin: true,
        },
      },
    },
    css: {
      postcss: {
        plugins: [
          require("postcss-px-to-viewport")({
            unitToConvert: "px",
            viewportWidth: 1920,
            propList: ["*", "!height", "!font-size"],
            viewportUnit: "vw",
            fontViewportUnit: "vw",
          }),
        ],
      },
      preprocessorOptions: {
        scss: {
          additionalData: ["@import './src/style/index.scss';"],
        },
      },
    },
  };
});
