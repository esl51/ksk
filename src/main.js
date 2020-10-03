// Core Js
import 'core-js/stable'
import 'regenerator-runtime/runtime'

// Import Vue
import Vue from 'vue'
import VueMask from 'v-mask'
import VueNoty from 'vuejs-noty'

// Import Vue App, store
import App from './App'

Vue.use(VueMask)
Vue.use(VueNoty, {
  timeout: 3000,
  progressBar: true,
  layout: 'bottomLeft'
})

const vm = new Vue({
  render: h => h(App)
})
vm.$mount('#app')
