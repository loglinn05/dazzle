import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-light-pink/theme.css'
import 'primeicons/primeicons.css'
import Ripple from 'primevue/ripple'
import ToastService from 'primevue/toastservice'

import Vue3TouchEvents from 'vue3-touch-events'

import components from './components/global'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

app.use(PrimeVue, { ripple: true })
app.use(ToastService)
app.use(Vue3TouchEvents)
app.directive('ripple', Ripple)

components.forEach((component) => {
  app.component(component.name, component.component)
})

app.use(router)

app.mount('#app')
