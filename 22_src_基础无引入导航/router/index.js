import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Welcome from '@/components/Welcome'
import HelloWorld from '@/components/HelloWorld'
import YanFa from '@/components/YanFa'
import GongSi from '@/components/GongSi'
import Test from '@/components/Test'
import YanFa2 from '@/components/YanFa2'
import YanFa4 from '@/components/YanFa4'
import Chief from '@/components/Chief'
import Administration from '@/components/Administration'
import Financial from '@/components/Financial'


Vue.use(Router)

const routes = [
   // 路由重定向，访问/ ->自动跳转至/login 页面
   { path: '/', redirect: '/login' },
   { path: '/login', component: Login },
   { 
     path: '/home', 
     component: Home , 
     redirect: '/welcome',
     children : [  { path : '/welcome', component: Welcome} ]
    },
   { path: '/ helloworld', component:  HelloWorld },
   { path: '/yanfa', component: YanFa },
   { path: '/gongsi', component:  GongSi },
   { path: '/test', component:  Test },
   { path: '/yanfa2', component: YanFa2 },
   { path: '/yanfa4', component: YanFa4 },
   { path: '/chief', component: Chief },
   { path: '/administration', component:Administration},
   { path: '/financial', component: Financial },

 
]

const router = new Router({
  routes
})

//挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将访问哪一个路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数,表示放行
  //   next() 放行     next('/login') 强制跳转
  //如果访问登录页直接放行
  if (to.path === '/login') return next()
  // 获取token
  const token = window.sessionStorage.getItem('token')
  if (!token) return next('/login')
  next()
})

export default router
