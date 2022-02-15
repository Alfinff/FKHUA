import Vue from 'vue'
import VueRouter from 'vue-router'
import Template from '../views/Template.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Template,
    children: [{
        path: '',
        name: 'Home',
        component: () =>
            import ('../views/Landing.vue')
    }]
}]

const router = new VueRouter({ mode: 'history', base: process.env.BASE_URL, routes })

export default router