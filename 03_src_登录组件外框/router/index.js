import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'

Vue.use(VueRouter)

const routes = [
   // 路由重定向，访问/ ->自动跳转至/login 页面
   { path: '/', redirect: '/login' },
   { path: '/login', component: Login }
 
]

const router = new VueRouter({
  routes
})

export default router
