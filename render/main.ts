import './styles/style.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import Loading from './loading/index.vue'

createApp(Loading).mount('#app-loading')

console.log(import.meta.env)

setTimeout(() => {
  const app = createApp(App)
  app.use(createPinia()).mount('#app')
}, 600)

