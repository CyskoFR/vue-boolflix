import Vue from 'vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import vClickOutside from 'v-click-outside'

Vue.use(vClickOutside)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
