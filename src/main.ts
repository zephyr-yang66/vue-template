import Vue from 'vue'
import App from './App.vue'
import {Menu} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import router from './router'
import store from './store'
// import axios from './utils/http'
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios, axios)
// Vue.prototype.$http = axios
Vue.use(Menu)

Vue.config.productionTip = false
// console.log(axios)
// Vue.use(G2)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
