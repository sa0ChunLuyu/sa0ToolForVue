import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/homePage/homePage'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
      path: '/element/:part',
      name: 'element',
      component: () => import('../views/elementPage/elementPage.vue')
    },
    {
      path: '/component/:part',
      name: 'component',
      component: () => import('../views/componentPage/componentPage.vue')
    },
    {
      path: '/tool/:part',
      name: 'tool',
      component: () => import('../views/toolPage/toolPage.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
