import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Login from '@/components/pages/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*', //避免不存在頁面的空白
      redirect: '/login',
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {requiresAuth: true}
    },
    {
      path: '/login',
      name: 'Login',
      component: ()=>import('@/components/pages/Login'),
    }
  ]
})
