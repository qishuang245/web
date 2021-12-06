import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Welcome from '@/components/Welcome'
import HelloWorld from '@/components/HelloWorld'
import YanFa from '@/components/user/YanFa'
import GongSi from '@/components/user/GongSi'
import Test from '@/components/user/Test'
import YanFa2 from '@/components/user/YanFa2'
import YanFa4 from '@/components/user/YanFa4'
import Chief from '@/components/user/Chief'
import Administration from '@/components/user/Administration'
import Financial from '@/components/user/Financial'
import UserOrganiz from '@/components/user/UserOrganiz'
import Sample from '@/components/StaffHomePage/Sample'

Vue.use(Router)

const routes = [
   // 路由重定向，访问/ ->自动跳转至/login 页面
   { path: '/', redirect: '/login' },
   { path: '/login', component: Login },
   { 
     path: '/home', 
     component: Home , 
     redirect: '/welcome',
     children : [  { path : '/welcome', component: Welcome},
     { path: '/gongsi', component:  GongSi }, 
     { path: '/yanfa', component: YanFa },
     { path: '/test', component:  Test },
   { path: '/yanfa2', component: YanFa2 },
   { path: '/yanfa4', component: YanFa4 },
   { path: '/chief', component: Chief },
   { path: '/administration', component:Administration},
   { path: '/financial', component: Financial },
   { path: '/userorganiz', component: UserOrganiz },
   { path: '/sample', component:  Sample },
   
    ]
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
   { path: '/sample', component:  Sample },

 
]

const router = new Router({
  //mode: 'history',
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
