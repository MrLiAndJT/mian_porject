import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { setUpElementUI } from '@/plugins/index'

import '@/style/resetBrowser.scss'

const initApp = async () => {
  const app = createApp(App)

  app.use(createPinia())
  app.use(router)
  setUpElementUI(app)
  app.mount('#app')
}

initApp()
