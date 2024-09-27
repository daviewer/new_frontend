import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import routers from './routers'

loadFonts()

createApp(App).use(vuetify).use(routers).mount('#app')
