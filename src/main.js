import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import './assets/style/scss/base.scss'
import './assets/style/css/normalize.css'
import 'swiper/css/swiper.css'

import './assets/iconfont/iconfont.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.config.productionTip = false

// 全局引用组件
import Card from './components/Card.vue'
Vue.component('m-card', Card)

import ListCard from './components/ListCard.vue'
Vue.component('m-list-card', ListCard)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
