<template>
    <div class="vheader" >
       <div class="v-header-btn-left">
           <router-link :to="backpath"><i class="iconfont icon-arrow-lift"></i></router-link>
               <!-- <button @click="test"><i class="iconfont icon-arrow-lift"></i></button> -->
           
       </div>
       <div class="v-header-title">
           <!-- <slot name="vtitle"></slot> -->
           <h3>{{title}}</h3>
       </div>
       <div class="v-header-btn-right"></div>
    </div>
</template>

<script>
    export default {
        props:{
               title:{
                   required:true
               },
               backpath:{
                   required:true
               }
            },
        data(){
            return{}
        },
        methods:{
            test(){
                
              console.log('test',this.title)
            //   this.$parent.goBack();
              this.$emit('bindClick',this.title)
            }
        }
    }
</script>

<style lang="scss" scoped>
*{margin: 0;padding: 0;}
.vheader{
    display:flex;
    .v-header-btn-left{flex: .5;text-align: left;}
    .v-header-title{flex: 1}
    .v-header-btn-right{flex: .5}
    button{background: transparent;border: 0;box-shadow: none;}
    a{text-decoration: none;}
    a i{font-size: 22px;}
    }


</style>