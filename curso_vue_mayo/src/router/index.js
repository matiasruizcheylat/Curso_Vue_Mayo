import Vue from 'vue'
import VueRouter from 'vue-router'

import FormularioF from "../view/formularioF"
import Main from "../view/main"
import API from "../view/API"
import DetalleF from "../view/detalleF"


Vue.use(VueRouter)

const routes = [
  
    {path: '/main', name:"main", component:Main},
    {path: '/api', name:'api', component:API},
    {path: '/detalleF', name:'detalleF', component:DetalleF},
    {path: '/formularioF', name:'formularioF', component:FormularioF}
  
  ]


  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
  })
  
  
  export default router