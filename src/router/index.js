import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import("../views/home/Home.vue")
const Category = () => import("../views/category/Category.vue")
const Profile = () => import("../views/profile/Profile.vue")
const Shopcart = () => import("../views/shopcart/Shopcart.vue")
Vue.use(Router)

const router= new  Router({
  routes: [
     {
        path: '',
         redirect:"/home" //使用重定向来配置默认路径       
     },
      {
        path: '/home',
        component: Home,
      },
      {
        path: '/category',
        component: Category,
      },
      {
        path: '/profile',
        component: Profile,
      },
      {
        path: '/shopcart',
        component: Shopcart,
      }   

  ],
  mode:"history"
})
export default router