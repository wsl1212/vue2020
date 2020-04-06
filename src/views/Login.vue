<template>
  <div class="myloginbox">
  <div class="mylogin">
    <div class="myloginInlineBox">
    <p class="myloginTitle">{{ msg }}</p>
    <!-- <P>rules校验规则 prop用于校验 ref是表单名字，获取表单实例dom</P> -->
    <div class="mybigcircleBox">
      <div class="mybigcircle">
        <span class="el-icon-full-screen" style="font-size:80px;color:#ccc;line-height:150px;"></span>
      </div>
    </div>

   <div id="myform">
        <el-form ref="loginForm" :model="ruleForm" :rules="rules" label-width="0px">
            <el-form-item  prop="user">
                <el-input v-model="ruleForm.user" ><i slot="prefix" class="el-input__icon el-icon-user"></i></el-input>
            </el-form-item>
        <el-form-item  prop="pass">
            <el-input v-model="ruleForm.pass" show-password><i slot="prefix" class="el-input__icon el-icon-lock"></i></el-input>
        </el-form-item>
        <el-row>
          <el-col>
              <el-button class="myloginBtn" type="primary" round @click="submitForm('loginForm')">登录</el-button>
          </el-col>
            <el-col>
              <el-button class="myregister" type="default" round>注册</el-button>
            </el-col>    
            
        </el-row>


       
          
        </el-form>
   </div>
  </div>  
  </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      pagetitle:"登录页面",
      msg: 'Welcome to Your',
      somevalue:"some  value",
      ruleForm:{
          user:"",
          pass:""
          },
      rules:{
          user:[{ required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }],
          pass:[{ required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }]
      }
      
    }
  },
  components:{
      
  },
  methods:{
      submitForm(formName){
         
         console.log('test');
         this.$refs[formName].validate((valid)=>{
             console.log('valid',valid)
             if(valid){
               window.localStorage.isLogin=true;
               const mypath=this.$route.query.redirect;
               console.log('mypath',mypath)
               if(mypath){
                 this.$router.push(mypath);
               }else{
                  this.$router.push({name:"Home",params:{navflag:true}})
               }
               
             }else{
               window.localStorage.isLogin=false;
                 alert('fa');
                 return false
             }
         })  
      },
      gotoHome(){
        this.$router.push({name:"Home",params:{navflag:true}})
      }
  },
  // beforeDestroy:{

  // },
  
  computed: {
  // author () {
  //     return this.$store.state.author
  // }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../assets/scss/common.scss";
html,body{
  width: 100%;
  height: 100%; 
}
#app{
  width: 100%;
  height: 100%;
  
}
.myloginTitle{padding: 10px;font-size: 40px;}
#myform{padding: 20px 20px;}
#myform .el-form-item__label{color: #f2f2f2}
#myform .el-input__inner{background-color: transparent;color: #f2f2f2;border: none; border-bottom: 1px solid #ccc;border-radius: 0;}
#myform .el-input{font-size: 24px;}
#myform .myloginBtn{width: 100%;margin-bottom: 20px;}
#myform .myregister{width: 100%;}
</style>
<style scoped>

.myloginbox{
  width: 100%;height: 100%;
   background-color: #304059;
}
.mylogin{
  background-color: #304059;
  width: 100%;
  color: #f2f2f2;
  display: flex;
  align-content: center;
  justify-content: center;
  /* border:1px solid red; */

}
.mybigcircleBox{
  display: inline-block;
  text-align: center
}
.mybigcircle{
  background-color:#3B4F6A;
  width: 150px;height: 150px;
  border-radius: 50%;
  
}
.myregisterBtn{color: teal;font-size: 18px;text-decoration: none;}
.myregister{}
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

</style>
