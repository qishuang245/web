import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import HomePage from '@/components/HomePage'
import HomePage1 from '@/components/HomePage1'
import HomePage2 from '@/components/HomePage2'
import Welcome from '@/components/Welcome'
import HelloWorld from '@/components/HelloWorld'
import YanFa from '@/components/user/YanFa'
import GongSi from '@/components/user/GongSi'
import Test from '@/components/user/Test'
import YanFa2 from '@/components/user/YanFa2'
import YanFa3 from '@/components/user/YanFa3'
import YanFa4 from '@/components/user/YanFa4'
import Chief from '@/components/user/Chief'
import Administration from '@/components/user/Administration'
import Financial from '@/components/user/Financial'
import UserOrganiz from '@/components/user/UserOrganiz'
import Sample from '@/components/StaffHomePage/Sample'
import Product from '@/components/user/Product'
import Solution from '@/components/user/Solution'
import Market from '@/components/user/Market'
import Support from '@/components/user/Support'
import Market2 from '@/components/user/Market2'
import Sales from '@/components/user/Sales'
import SHP_CTO from '@/components/StaffHomePage/SHP_CTO'
import SHP_COO from '@/components/StaffHomePage/SHP_COO'
import SHP_COO1 from '@/components/StaffHomePage/SHP_COO1'
import News_1 from '@/components/news/News_1'

//import hs3 from '@/assets/hs3'

Vue.use(Router)

const routes = [
   // 路由重定向，访问/ ->自动跳转至/login 页面
   { path: '/', redirect: '/login' },
   { path: '/login', component: Login },
   //在这里写无嵌套边
   //{path: '/homepage', component: HomePage} , 
  
  
  //进入组织图主页，有边框菜单嵌套
   { 
     path: '/home', 
     component: Home , 
     redirect: '/homepage2',
     children : [  { path : '/homepage2', component: HomePage2},
     { path: '/gongsi', component:  GongSi }, 
     { path: '/yanfa', component: YanFa },
     { path: '/test', component:  Test },
   { path: '/yanfa2', component: YanFa2 },
   { path: '/yanfa3', component: YanFa3 },
   { path: '/yanfa4', component: YanFa4 },
   { path: '/chief', component: Chief },
   { path: '/administration', component:Administration},
   { path: '/financial', component: Financial },
   { path: '/userorganiz', component: UserOrganiz },
   { path: '/sample', component:  Sample },
   { path: '/product', component: Product },
   { path: '/solution', component: Solution },
   { path: '/market', component: Market},
   { path: '/support', component: Support},
   { path: '/market2', component: Market2},
   { path: '/sales', component: Sales},
   { path: '/shp_cto', component:  SHP_CTO},
   { path: '/shp_coo', component:  SHP_COO},
   { path: '/shp_coo1', component:  SHP_COO1},
   {path: '/homepage', component: HomePage} , 
   {path: '/homepage2', component: HomePage2} , 
  

   
    ]
    },
   { path: '/ helloworld', component:  HelloWorld },
   {path: '/homepage1', component: HomePage1} , 
   {path: '/homepage2', component: HomePage2} , 
   {path: '/news_1', component: News_1} , 
 //  { path: '/yanfa', component: YanFa },
 //  { path: '/gongsi', component:  GongSi },
//  { path: '/test', component:  Test },
//   { path: '/yanfa2', component: YanFa2 },
//   { path: '/yanfa3', component: YanFa3 },
//   { path: '/yanfa4', component: YanFa4 },
//   { path: '/chief', component: Chief },
//   { path: '/administration', component:Administration},
//   { path: '/financial', component: Financial },
//   { path: '/sample', component:  Sample },
//   { path: '/product', component: Product },
//   { path: '/solution', component: Solution },
//   { path: '/market', component: Market},
//   { path: '/sales', component: Sales},
//   { path: '/shp_cto', component:  SHP_CTO},
//   { path: '/homepage', component:  HomePage},


 
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
