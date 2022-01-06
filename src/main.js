import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css';
import { setupProdMockServer } from './mockProdServer';
console.log('import.meta.env.MODE: ', import.meta.env.MODE);
if (import.meta.env.MODE === 'development') {
  setupProdMockServer()
}
createApp(App).mount('#app')
