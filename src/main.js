import Vue from 'vue'
import App from './App.vue'
import store from './store'

import 'normalize.css'
// import '@/assets/css/main.css'
import '@/assets/sass/main.scss'
import '@/assets/sass/media.scss'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
