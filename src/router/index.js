import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/components/Dashboard'
import Test from '@/components/pages/test'
import Products from '@/components/Products'
// import Login from '@/components/pages/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*', 
      redirect: '/login',
    },
    {
      path: '/',
      name: 'test',
      component: Test
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: '/products',
          name: 'Products',
          component: Products,
          meta: {requiresAuth: true},
        }
      ]
    },
    // {
    //   path: '/index',
    //   name: 'HelloWorld',
    //   component: HelloWorld,
    //   meta: {requiresAuth: true}
    // },
    {
      path: '/login',
      name: 'Login',
      component: ()=>import('@/components/pages/Login'),
    }
  ]
})
