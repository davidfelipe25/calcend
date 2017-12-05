import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import calc2 from'@/components/calc2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
     path:'/calc2',
     name:'calc2',
     component: calc2
    }
  ]
})
