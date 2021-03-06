// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import {sync} from 'vuex-router-sync'
import store from '../src/store/store'
import Swal from 'vue-sweetalert2'
import Panel from '../src/components/global/Panel'

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(Swal)
Vue.component('panel', Panel)

sync(store, router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
