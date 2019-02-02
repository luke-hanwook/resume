import Vue from 'vue'
import 'es6-promise/auto'
import App from './App.vue'
import store from './store'
import Meta from 'vue-meta'

import 'normalize.css'
import '@/assets/sass/main.scss'
import '@/assets/sass/media.scss'

Vue.use(Meta)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
