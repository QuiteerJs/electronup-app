import { createApp } from 'vue'
import './styles/style.css'
import { EventKeys, IpcWindowOptions } from '@quiteer/electron-ipc/web'
import App from './App.vue'

createApp(App).mount('#app')

console.log(import.meta.env)

// 窗口最大化
window.$ipc.send(EventKeys.WindowOptionsKey, IpcWindowOptions.MAXIMIZE)

setTimeout(() => {
  // 取消最大化
  window.$ipc.send(EventKeys.WindowOptionsKey, IpcWindowOptions.UNMAXIMIZE)
}, 1000)
