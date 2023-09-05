import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router' // assuming your router/index.js file is in the same directory as main.js
import vuetify from './plugins/vuetify' // assuming you have a separate file for Vuetify configuration

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
