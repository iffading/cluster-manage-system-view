import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Index from '../components/home/Appindex.vue'
import Home from '../components/Home'

Vue.use(VueRouter)

const routes = [
  {
    // 重定向路由，监听‘/’,重定向至‘/login’
    path: '/', redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    redirect: '/index',
    component: Home,
    children: [
      {
        path: '/index',
        name: 'Index',
        component: Index,
        meta: {
          requireAuth: true
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
