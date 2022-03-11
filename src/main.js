import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//解决移动端点击事件延迟300ms
import fastClick from 'fastclick'
//引入轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/style/reset.css'
import './assets/style/border.css'
import './assets/style/iconfont.css'
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
