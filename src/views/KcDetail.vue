<template>
  <div class="kcdetailePage">
    <div class="mypageHeader">
      <!-- <el-page-header @back="goBack" :content=currentName title=""></el-page-header> -->
       <Vheader @bindClick="goBack" :title="currentName" :backpath="backpath"></Vheader> 
    </div>
    <div>
      <div>
        <img src="../../static/images/listImg2S/a1.png" alt="" style="width:100%;">
      </div>
    </div>
    <div>
      <div class="mytabs">
       <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
          <el-tab-pane label="介绍" name="first">
            <div class="u-courseintrohead">
              <div class="coursebox">
                <div class="name f-course-black">和秋叶一起学ppt</div>
                <div class="numInfo f-cb f-course-grey">
                  <span class="f-fl f-db mark">
                    <span class="u-course-stars_bg f-fl">
                      <span class="u-course-stars_active"></span>
                    </span>
                    <span class="f-fl">4.9分 </span>
                  </span>
                  <span class="f-fl f-db hot">789人在学</span>
                  
                </div>

                <div class="pricebox">
                  <div class="price price-novip f-cb">
                    <p class="f-fl">
                      <span class="yen">¥</span>99.00
                    </p>
                    <div class="timebox f-cb f-fl">
                      <div class="f-fl timeleft">特价仅剩11天2小时53分钟</div>
                    </div>
                    <p class="oprice f-course-grey">¥199.00</p>
                  </div>
                </div>
                
                
              </div>
              <div class="u-coursebriefintro" style="text-align:left">
                <h5 class="tit f-f0 f-course-black u-coursebriefintro-title">课程介绍</h5>
                <p>
                  25节听得懂的金融思维课 ，零基础，人人用得上！<br>
                  帮你快速入门金融学，建立财富观，开启有收益的人生！<br>

                  【为什么学这门课？】<br>
                  生活中听不懂新闻里金融名词？——这门课帮助你了解金融概念，摸清金融脉络 <br>
                  年轻人没建立起财富观不知道怎样开始？——课程帮助你培养金融思维与自我财富意识<br>
                  普通人不知如何开启个人投资之路？——这里会讲金融投资那些事儿，帮助你玩转个人投资<br>
                  职场人要做管理层或创业但不了解相关知识？——这里有用得上的公司决策，帮你看清趋势<br>
                </p>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="目录" name="second">
            <div>视频  【免费视频】ppt1</div>
          </el-tab-pane>
          <el-tab-pane label="评价" name="third">评价</el-tab-pane>
          
        </el-tabs>
      </div>

    <div class="cfuncs f-pf">
      <div id="j-coursebottom">
          <div class="u-coursebottom">
            <div class="funs">
             <a class="f-fcbrightgray addCart">
               <i class="ux-icon ux-ykt-icon-new-cart"></i>
               <span>加入购物车</span>
             </a>
             <a class="u-btn start">加入学习</a>
           </div>
          </div>

      </div>

   </div>


    </div>
  </div>
</template>

<script>
import Vheader from '@/components/common/Vheader'
export default {
  name: 'KcDetail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App  KcDetail',
      activeName: 'first',
      currentName:"",
      backpath:'/home/true'
    }
  },
  components:{
    Vheader
  },
  mounted(){
    this.currentName=this.$route.params.name;

  },
  methods:{
      goBack(val){
        console.log('goback',val)
          this.$router.replace('/home/true')
          
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../assets/scss/common.scss";
html,body{background-color: #fff;}
.kcdetailePage .el-tabs__nav{    
    display: flex;
    width: 100%;
    justify-content: space-around;
    }
</style>
<style scoped>
.kcdetailePage{
    font-size: 12px;
}
*{padding: 0;margin: 0;}
.mypageHeader{padding: 20px 10px;}
.mytabs{padding: 5px 10px;}
.f-fl {
    float: left;
}
.f-db {
    display: block;
}
.f-cb, .f-cbli li {
    zoom: 1;
}
.f-pf {
    position: fixed;
}
.f-course-grey {
    color: #70788C;
}
.u-courseintrohead{
position: relative;
}
.coursebox{padding: 18px 4% 14px 4%;text-align: left;}

.u-courseintrohead .coursebox .name {
    font-size: 18px;
    line-height: 26px;
}
.u-courseintrohead .coursebox .numInfo {
    padding: 9px 0;
    font-size: 12px;
}
.u-courseintrohead .coursebox .numInfo .mark {
    margin-right: 9px;
}
.u-course-stars_bg, .u-course-stars_active {
    display: block;
    position: relative;
    width: 86px;
    height: 13px;
    /* background: rgba(0, 0, 0, 0) url(//edu-image.nosdn.127.net/b2d624b0-1c2c-4670-a57f-d891b22d6d66.png?imageView&quality=100) center center no-repeat; */
    background-size: contain;
}
.u-course-stars_active {
    background: rgba(0, 0, 0, 0) url(../../static/images/xin_select.png) 0 0 no-repeat;
    background-size: 86px;
    position: absolute;
    top: 0;
    left: 0;
}

.u-courseintrohead .coursebox .pricebox {
    border-top: 1px solid #e6eaf2;
}

.u-courseintrohead .coursebox .pricebox {
    margin-right: -4%;
    padding-top: 15px;
    margin-top: 6px;
}
.u-courseintrohead .coursebox .pricebox .price.price-novip {
    color: #151515;
}
.u-courseintrohead .coursebox .pricebox .price {
    color: #FF632A;
    margin-right: 8px;
    font-size: 20px;
}
.u-courseintrohead .coursebox .timebox .timeleft {
    border: 1px solid #ff632a;
    color: #ff632a;
    margin-right: 4px;
}
.u-courseintrohead .coursebox .pricebox .oprice {
    text-decoration: line-through;
    font-size: 12px;
    padding: 10px 0;
    clear: left;
}

.u-coursebriefintro{padding: 6px;}
.u-coursebriefintro .tit {
    font-size: 15px;
    margin-top: 20px;
    margin-bottom: 7px;
    line-height: 21px;
}
.f-course-black {
    color: #3C4A55;
}

.u-coursebottom {
    padding: 7px 8px;
    border-top: 1px solid rgba(221, 221, 221, 0.4);
}

.u-coursebottom .funs {
    height: 48px;
    line-height: 48px;
    text-align: center;
    display: -ms-flexbox;
    display: flex;
    display: -webkit-flex;
}
.u-coursebottom .addCart {
    width: 80px;
    background: #fff;
}
.u-coursebottom .start {
    box-flex: 1;
    -webkit-flex: 1;
    -moz-flex: 1;
    -ms-flex: 1;
    flex: 1;
    color: #fff;
    background: #FF632A;
    font-size: 15px;
    width: 54%;
    float: right;
    text-align: center;
    border-radius: 200px;
}

 .cfuncs {
    width: 100%;
    background-color: #fff;
    left: 0;
    bottom: 0;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
}
</style>
