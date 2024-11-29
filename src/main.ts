import './assets/main.css' // If you have custom styles
import 'vuetify/styles' // Vuetify's default styles

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import VueLazyload from 'vue-lazyload'
// Create Vuetify instance
const vuetify = createVuetify({
  components, // Add Vuetify components
  directives, // Add Vuetify directives
})

const app = createApp(App)
app.use(VueLazyload)
app.use(createPinia())
app.use(router)
app.use(MotionPlugin)
app.use(vuetify)

app.mount('#app')
