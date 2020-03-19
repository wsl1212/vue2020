<template>
  <div class="navbottom">
    <ul>
       <li><router-link :to="{name:'Home',params:{navflag:true}}" index="1" :class="{active:selectNavBottom==1}">首页</router-link> </li>
     
       <li><router-link :to="{name:'Category',params:{navflag:true}}" index="2" :class="{active:selectNavBottom==2}">分类</router-link> </li>
        <li><router-link :to="{name:'Study',params:{navflag:true}}" index="3" :class="{active:selectNavBottom==3}">我的学习</router-link> </li>
        <li><router-link :to="{name:'My',params:{navflag:true}}" index="4" :class="{active:selectNavBottom==4}">我的</router-link> </li>
        <!-- <li><router-link to="/"  >首页</router-link> </li> -->
      <!-- <li><router-link to="/category">分类</router-link> </li> -->
      <!-- <li><router-link to="/study">我的学习</router-link> </li> -->
      <!-- <li><router-link to="/my">我的</router-link> </li> -->
    </ul>
    
  </div>
</template>

<script>
export default {
  name: 'NavBottom',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      selectNavBottom:"1"
      
    }
    },
     watch:{
      $route(to, from) {
        console.log('to',to,'from',from);
        if(to.name=="Study"){
           this.selectNavBottom="3";
        }else if(to.name=="Category"){
           this.selectNavBottom="2";
        }else if(to.name=="My"){
           this.selectNavBottom="4";
        }else if(to.name=="Home"){
           this.selectNavBottom="1";
        }
      }
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbottom{
  position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: #272733;
    font-size: 14px;
}
.navbottom ul {
  /* height: 50px; */
  list-style-type: none;
  padding: 0;
  margin: 0px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}
.navbottom ul li{
  flex: 1;
}
.navbottom li>a {
  display: inline-block;
  color:#fff;
  text-decoration: none;
  text-align: center;
  line-height: 50px;
  /* border: 1px solid red; */
}
.navbottom li>a.active{
 color: #42b983;
}
</style>
