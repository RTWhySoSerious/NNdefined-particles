import 'font-awesome/css/font-awesome.min.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './stores/index'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
