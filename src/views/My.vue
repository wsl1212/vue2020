<template>
  <div class="MyPage">
    
   <p><span class=""></span> </p>
   <slot name="demo1"></slot>
   <VickyButton :buttons="this.buttons"></VickyButton>


   <div>
     <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="我的收藏" name="1">
          <div>我的收藏</div>
          <div></div>
        </el-collapse-item>
        <el-collapse-item title="推荐/关注" name="2">
          <div>推荐/关注</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item title="推广赚钱" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item title="帮助与反馈" name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
      </el-collapse>
   </div>
   <div @click="myexitLogin">退出登录</div> 
  </div>
</template>

<script>
import VickyButton from '@/components/common/VickyButton';
export default {
  components:{
     VickyButton
  },
  name: 'My',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App我的页面',
      buttons:[{
        label:"编辑",
        icon:"el-icon-setting",
        click:this.edit
      }],
      activeNames:[]
    }
  },
  methods:{
    edit(){
      alert('edit')
    },
    handleChange(){
       console.log('aaa')
    },
    myexitLogin(){
      this.$router.push({path:"/"})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../assets/scss/common.scss";
</style>
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
