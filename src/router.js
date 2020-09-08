import Vue from "vue"
import VueRouter from "vue-router"

import trade from 'pages/trade'
import info from 'pages/info'

Vue.use(VueRouter)
const routes = [
  { path: '/', component: info },
  { path: '/trade', component: trade },
  { path: '/info', component: info }
]
const router =  new VueRouter({
    routes
})

export default router