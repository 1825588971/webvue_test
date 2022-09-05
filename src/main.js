import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import router from './router'
Vue.config.productionTip = false
Vue.use(VueRouter)
// new Vue({
//   render: h => h(App),
// }).$mount('#app')
new Vue({
  el:'#app',
  render: h => h(App),
  store,
  router: router,
  beforeCreate() {
    Vue.prototype.$bus = this
 }
})