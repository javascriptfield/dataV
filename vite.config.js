import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { viteMockServe } from 'vite-plugin-mock'
import { configMockPlugin } from './src/mock/config';
export default ((command) => {
  console.log('command: ', command);
  let prodMock = false
  return {
    plugins: [vue(), WindiCSS(), viteMockServe({
      // default
      mockPath: 'mock',
      localEnabled: command === 'serve',
      prodEnabled: command !== 'serve' && prodMock,
      injectCode: `
            import { setupProdMockServer } from './mockProdServer';
            setupProdMockServer();
          `,
    }), configMockPlugin()],
    server: {
      host: '0.0.0.0',
      proxy: {
        '/ZsExternalInterface': {
          target: 'http://192.168.1.140:9619',
          changeOrigin: true,
        },
      }
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
      },
      preprocessorOptions: {
        scss: {
          additionalData: ["@import './src/style/index.scss';"]
        }
      }
    }
  }

})
