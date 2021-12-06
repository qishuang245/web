import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'


Vue.use(Router)

const routes = [
   // 路由重定向，访问/ ->自动跳转至/login 页面
   { path: '/', redirect: '/login' },
   { path: '/login', component: Login },
   { path: '/home', component: Home }
 
]

const router = new Router({
  routes
})

export default router
