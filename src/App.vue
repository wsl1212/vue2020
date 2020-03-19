<template>
  <div id="app">
    
    <router-view/>
     <NavBottom v-show="mynavFlag"   />
  </div>
</template>

<script>
import NavBottom from "./components/common/NavBottom"
export default {
  name: 'App',
  data(){
    return{
      
    }

  },components:{
    "NavBottom":NavBottom
  },
  watch:{
    $route(to, from) {
      // console.log('to',to,'from',from);
      // if(to.name=="KcDetail"){
      //    this.navflag=false;
      // }else{
      //    this.navflag=true;
      // }
    }
  },
  computed:{
    mynavFlag:function(){
     console.log('comp',this.$route.params)
      return this.$route.params.navflag;
    }
   
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
</style>
