import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), WindiCSS()],
  server: {
    host: '0.0.0.0',
  },
  css: {
    postcss: {
      plugins: [
        require('postcss-px-to-viewport')({
          unitToConvert: 'px',
          viewportWidth: 1920,
          propList: ['*', "!height", "!font-size"],
          viewportUnit: 'vw',
          fontViewportUnit: 'vw',
        })

      ]
    }
  }
})
