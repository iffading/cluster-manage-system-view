import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import Axios from 'axios'
import './assets/css/global.css'
import store from './store'

Vue.config.productionTip = false
// 设置反向代理，前端请求默认发送到 http://localhost:8443/api
Axios.defaults.baseURL = 'http://localhost:8443/api'
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = Axios

// 在访问每一个路由前调用
router.beforeEach((to, from, next) => {
  // 判断访问的路径是否需要登录
  if (to.meta.requireAuth) {
    // 如果需要，判断 store 里有没有存储 user 的信息，
    // 如果存在，则放行，
    // 否则跳转到登录页面，并存储访问的页面路径以便在登录后跳转到访问页）
    if (store.state.user.username) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
