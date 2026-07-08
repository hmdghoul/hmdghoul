import { createApp } from 'vue'
import PrivacyPage from './PrivacyPage.vue'
import '@/assets/main.css'

createApp(PrivacyPage).mount('#privacy-app')

// Enable smooth theme transitions after first paint
requestAnimationFrame(() => {
  document.body.classList.add('theme-ready')
})
