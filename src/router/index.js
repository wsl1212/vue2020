import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Login'
import Home from '@/views/Home'
import Category from '@/views/Category'
import Study from '@/views/Study'
import My from '@/views/My'
import KcDetail from '@/views/KcDetail'
import CategoryList from '@/views/CategoryList'

Vue.use(Router)

const router=new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },{
      path: '/home/:navflag',
      name: 'Home',
      component: Home
    },
    {
      path:'/category/:navflag',
      name:'Category',
      component:Category
    },
    {
      path:'/study/:navflag',
      name:'Study',
      component:Study
    },{
      path:'/my/:navflag',
      name:'My',
      component:My
    },{
      path:'/kcdetail/:navflag',
      name:'KcDetail',
      component:KcDetail
    },{
      path:'/categorylist/:navflag',
      name:'CategoryList',
      component:CategoryList
    },{
      path:'/form1',
      name:'form1',
      component:()=>import('@/views/Form1')
    }

  ]
})


router.beforeEach((to,from,next)=>{
  console.log('toname',to.name);
  if(to.name=='Study'){
    var isLogin=window.localStorage.getItem("isLogin");
    
     if(isLogin=="true"){

        next()
     }else{

     }
  }else{
    next()
  }
  
})


export default router
