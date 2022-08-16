import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login'
import home from '../components/home'
Vue.use(VueRouter)

const routes = [
  // 当用户访问/（首页）时，重定向到'/login',
  { path:'/',redirect:'/login'},
  { path:'/login',component:login},
  { path:'/home',component:home}
]

const router = new VueRouter({
  routes
})
//使用路由守卫
router.beforeEach((to,from,next)=>{
  if(to.path==='/login') return next()
  const token=window.sessionStorage.getItem('token')
  if(token) return next()
  next('/login')
})
export default router
