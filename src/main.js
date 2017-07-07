// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './routers'
import App from './App'
import './styles/common.css'
import './styles/scrollbar.css'
import iscroll from './js/iscroll'
import VueAwesomeSwiper from 'vue-awesome-swiper'
//import Scroller from 'vue-scroller'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)
//Vue.use(Scroller)

const router = new VueRouter({
  mode: 'history',
  routes: routers
})

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  // template: '<App/>',
  // components: { App }
  el: '#app',
  router,
  render: x => x(App)
})

