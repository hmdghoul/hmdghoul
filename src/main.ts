import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

const app = createApp(App)
app.mount('#app')

// Enable smooth theme transitions after first paint
requestAnimationFrame(() => {
  document.body.classList.add('theme-ready')
})
