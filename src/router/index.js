import { createRouter, createWebHistory } from 'vue-router'
import Home from '../page/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../page/Login.vue')
  }

]

const router = createRouter({

  /*  vue-router内部提供了 history 模式的实现。为了简单起见，在这里使用 hash 模式。
  https://next.router.vuejs.org/zh/guide/#router-view
  createWebHistory变为函数 history为必须添加的值*/

  history: createWebHistory(),
  routes
});

export default router
