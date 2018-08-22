import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Layout from './views/Layout.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Layout,
    children: [{
        path: '',
        redirect: '/home'
      },
      //首页城市列表页
      {
        path: '/home',
        name: 'home',
        component: Home
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import ( /* webpackChunkName: "about" */ './views/About.vue')
      }, {
        path: '/commodity/:type',
        name: 'commodity',
        component: () =>
          import ( /* webpackChunkName: "commodity" */ './views/Commodity.vue')
      }
    ]
  }]
})