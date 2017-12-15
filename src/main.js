import 'font-awesome/css/font-awesome.min.css'
import wilddog from 'wilddog'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './stores/index'

Vue.config.productionTip = false

const config = {
  syncURL: 'https://wd8113259295dwfyda.wilddogio.com',
  authDomain: 'wd8113259295dwfyda.wilddog.com'
}
wilddog.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
