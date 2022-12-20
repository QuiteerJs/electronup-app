import { createApp } from 'vue'
import './styles/style.css'
import { EventKeys, IpcWindowOptions } from '@quiteer/electron-ipc/web'
import naive from 'naive-ui'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia()).use(naive).mount('#app')

console.log(import.meta.env)

// 窗口最大化
window.$ipc.send(EventKeys.WindowOptionsKey, IpcWindowOptions.MAXIMIZE)
setTimeout(() => {
  // 取消最大化
  window.$ipc.send(EventKeys.WindowOptionsKey, IpcWindowOptions.UNMAXIMIZE)
}, 1000)

