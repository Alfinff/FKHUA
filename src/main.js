import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { BootstrapVue, IconsPlugin, NavbarPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(NavbarPlugin)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.component('Navbar', Navbar)
Vue.component('Footer', Footer)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')