import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Notifications from 'vue-notification';

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuex)
Vue.use(Notifications)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
