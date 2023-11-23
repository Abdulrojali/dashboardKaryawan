import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
        path:'/',
        name:'/home',
        component:()=>import('../view/home.vue')
    },
    {
      path:'/data',
      name:'/data',
      component:()=>import('../view/data.vue')
  },
    {
      path:'/gaji',
      name:'/gaji',
      component:()=>import('../view/gaji.vue')
  },
{
  path:'/contact',
  name:'/contact',
  component:()=>import('../view/contact.vue')
},
  ],
})
export default router