import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css';
console.log('import.meta.env.MODE: ', import.meta.env.MODE);
// import { setupProdMockServer } from './mockProdServer';
// if (import.meta.env.MODE === 'development') {
//   setupProdMockServer()
// }
createApp(App).mount('#app')
