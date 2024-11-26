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

// Create Vuetify instance
const vuetify = createVuetify({
  components, // Add Vuetify components
  directives, // Add Vuetify directives
})

const app = createApp(App)

// Use Pinia, Router, and Vuetify plugins
app.use(createPinia())
app.use(router)
app.use(MotionPlugin)
app.use(vuetify) // Register Vuetify plugin

// Mount the app
app.mount('#app')
