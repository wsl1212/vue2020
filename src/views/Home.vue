<template>
  <div class="homePage">
        <div class="myquery">
           <input type="text" placeholder="行家专业亲授，直击就业痛点">
           <span><i class="iconfont iconfont-query"></i></span>
        </div>
        <!-- 轮播-->
        <div id="banner">
            <div class="block">
                <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
                <el-carousel :height="bannerHeight + 'px'" >
                <el-carousel-item v-for="item in bannerData" :key="item.id">
                    <!-- <h3>{{ item.name}}</h3> -->
                    <img :src=item.imgsrc1 />
                </el-carousel-item>
                </el-carousel>
            </div>


        </div>
        <!-- 类别区 -->
         <div class="index-category">
             <div class="category" v-for="myitem in categoryData" :key="myitem.id" @click="clickCategoryList(myitem.id,myitem.name)">
                 <a class="md-title">
                     <div class="md-title-inner">
                         <div class="md-icon" :style="{background:myitem.bgcolor}"><i v-bind:class="['iconfont', myitem.icon]" style="color:#f6f6f6"></i></div>

                     </div>
                      <div class="md-title-container">
                             <div>
                                 <span>{{myitem.name}}</span>
                             </div>
                      </div>
                </a>
             </div>

          </div>

        <!-- 列表展示-->
        <div class="list3Area">
          <h3 class="mytitle1" style="text-align:left;">课堂直播</h3>
          <div  class="broadcastList" style="overflow:auto;">
             <div class="broadcastListItem" v-for="(myitem2,index) in broadcastListData" :key="myitem2.id" @click="clickHandler(index,myitem2.id,myitem2.name)" :class="{active:index==currentIndex}">
              <div class="leftImg">
                  <img :src=myitem2.imgsrc alt="" />
              </div>
              <div class="rightList">
                <div>
                  <h4>{{myitem2.name}}</h4>
                  <p>讲师:{{myitem2.teacher}}</p>
                  <p>直播时间:{{myitem2.time}}</p>
                  
                </div>
                <div>
                   <el-button  size="mini" icon="el-icon-search" @click.stop="dialogVisible=true" type="primary" round > 提醒我</el-button>
                  
                </div>
              </div>

            </div>
          </div>

          <el-dialog title="提示" :visible.sync="dialogVisible" width="90%" :before-close="handleClose">
            <span>确定要开启上课提醒吗?</span>
            <span slot="footer" class="dialog-footer">
              <el-button size="mini" @click="dialogCancel">取 消</el-button>
              <el-button size="mini" type="primary" @click="dialogSure" v-bind:myid="opentxid">确 定</el-button>
            </span>
         </el-dialog>

        </div>

       <!-- form -->
       <div>
         <el-button size="mini" type="primary">表单</el-button>
       </div>
        <!-- report -->
        <div>
          <p>图表</p>
          <div id="myreport1" style="width:200px;height:200px;"></div>
        </div>

         
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      params:'',
      msg: 'Welcome to Your Vue.js App',
      dialogVisible:false,
      opentxid:-1,
      categoryData:[{"id":1,"name":"新课推荐","icon":"icon-sendinquiry-fill","bgcolor":"#FE9070"},
      {"id":2,"name":"免费好课","icon":"icon-voice-fill","bgcolor":"#68DBF5"},
      {"id":3,"name":"微专业","icon":"icon-warehouse-fill","bgcolor":"#2A96E9"},
      {"id":4,"name":"系列课程","icon":"icon-smile-fill","bgcolor":"#31C7B0"},
      {"id":5,"name":"VIP会员","icon":"icon-sendinquiry-fill","bgcolor":"#CDAAFB"},
      {"id":6,"name":"办公效率","icon":"icon-sendinquiry-fill","bgcolor":"#B3DD74"},
      {"id":7,"name":"编程语言","icon":"icon-sendinquiry-fill","bgcolor":"#F3E119"},
      {"id":8,"name":"人工智能","icon":"icon-sendinquiry-fill","bgcolor":"#FFBE97"}

      ],
      bannerData:[
        {"id":1,"name":"1","imgsrc":"b1.png","imgsrc1":require("../assets/images/banner/p1.jpg")},
         {"id":2,"name":"2","imgsrc":"b2.jpg","imgsrc1":require("../assets/images/banner/p2.jpg")},
          {"id":3,"name":"3","imgsrc":"b3.jpg","imgsrc1":require("../assets/images/banner/p3.jpg")},
          {"id":4,"name":"4","imgsrc":"b4.jpg" ,"imgsrc1":require("../assets/images/banner/p4.jpg")},
         {"id":5,"name":"5","imgsrc":"b5.jpg" ,"imgsrc1":require("../assets/images/banner/p5.jpg")},
          {"id":6,"name":"6","imgsrc":"b6.jpg","imgsrc1":require("../assets/images/banner/p6.jpg" ) },
           {"id":7,"name":"7","imgsrc":"b7.jpg","imgsrc1":require("../assets/images/banner/p7.jpg" ) }
        ],
         bannerHeight :175,

      screenWidth :0,
      broadcastListData:[{"id":1,"name":"h5开发","teacher":"赵东","time":"2020-02-05","imgsrc":require("../assets/images/zhimgs/zh1.jpg")},
      {"id":2,"name":"java开发","teacher":"赵东","time":"2020-02-05","imgsrc":require("../assets/images/zhimgs/zh2.jpg")},
      {"id":3,"name":"php开发","teacher":"赵东","time":"2020-02-05","imgsrc":require("../assets/images/zhimgs/zh3.jpg")},
      {"id":4,"name":"大数据开发","teacher":"赵东","time":"2020-02-05","imgsrc":require("../assets/images/zhimgs/zh4.jpg")},
      {"id":5,"name":"嵌入式开发","teacher":"赵东","time":"2020-02-05","imgsrc":require("../assets/images/zhimgs/zh02.jpg")},
      {"id":6,"name":"c++开发","teacher":"赵东","time":"2020-02-05","imgsrc":require("../assets/images/zhimgs/zh01.jpg")}
     ],
      currentIndex:0
    }
  },
  created(){
    // var param=this.$route.params;
    // console.log('param',param)
    // this.params=param;
  },
  mounted(){
    // 首次加载时,需要调用一次
      this.screenWidth =  window.innerWidth;
      this.setSize();
          // 窗口大小发生改变时,调用一次
       window.onresize = () =>{
          this.screenWidth =  window.innerWidth;
          this.setSize();
          }
       
  },
   methods: {
    setSize:function () {
            // 通过浏览器宽度(图片宽度)计算高度
            this.bannerHeight = 750 / 1920 * this.screenWidth;
          },
     clickHandler(index,id,name){
        this.currentIndex=index;
        this.opentxid=index;
        // this.$router.replace('/kcdetail')
        this.$router.push({name:"KcDetail",params:{id:id,name:name,navflag:false}})
     },
     clickCategoryList(id,mytext){
        // this.$router.replace('/categorylist/id')
        // this.$router.push(`/categorylist/${id}`)
        this.$router.push({name:"CategoryList",params:{id:id,name:mytext}})
     },
     handleClose(done) {
       done()
        // this.$confirm('确认关闭？')
        //   .then(_=> {
        //     console.log('yes')
        //     // done();
        //   })
        //   .catch(_=> {
        //      console.log('no')
        //   });
      },
      dialogSure(){
         console.log('确定',this.opentxid);
         this.dialogVisible=false;
      },
      dialogCancel(){
         console.log('取消');
         this.dialogVisible=false;
      },
     openMsg1(){
      
     },
   
  },
   filters:{
            toSrc:function (imgsrc) {
                return "/static/images/zhimgs/"+imgsrc
            },
            bannertoSrc:function(imgsrc){
                return "/static/images/banner/"+imgsrc
            }
        }
}
</script>
<style lang="scss">
@import "../assets/scss/common.scss";
html,body{background-color: #f6f6f6;}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/scss/common.scss";

.myquery{padding: 5px 15px;background: #fff;box-sizing: border-box;}
.myquery>input{width: 100%;background: #f6f6f6;border-radius:r(20);height:r(28);border: 0;
text-align: center;box-sizing: border-box; font-size: r(12)}
.index-category{
    border: 0px solid red;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around ;
    align-items: center;
    height: 160px;
    background: #fff;
    margin-bottom: 10px;
}
.category{width: 25%;border: 0px solid green;box-sizing: border-box;}
.md-title{width: 100%;}
.md-title-inner{border: 0px solid red;display: flex;justify-content: space-around;}
.md-icon{background: #fff;width: 40px;height: 40px;border-radius: 50%;}
.md-icon>i{line-height: 40px;text-align: center;font-size: 30px}
.md-title-container span{font-size: 14px;}
.list3Area{border: 0px solid red;background: #fff;}
.list3Area .mytitle1{text-align: left;height: 30px;line-height: 35px;padding: 10px;font-size: 17px;border-bottom: 1px solid #f5f5f5;}
.broadcastList:before{
content: "";
display:block;
clear: both;
}
.broadcastList:after{
content: "";
display:block;
clear: both;
}
.broadcastList{box-sizing: border-box;border-radius: 6px;padding: 5px;
height: 400px;overflow: auto;display: flex;flex-direction: row; margin: 0px auto;flex-wrap: wrap;}
.broadcastListItem{border-bottom: 1px solid #f5f5f5;height: 100px;width: 100%; display: flex;}
.broadcastListItem.active{background:#fff;}
.leftImg{width: 30%;box-sizing: border-box;height: 100%;
display: inline-flex;justify-content: center;align-items: center;
}
.leftImg>img{
width:60px;height:60px;background:#f6f6f6;border-radius:50%;
}
.rightList{width: 70%;display: inline-flex;justify-content: flex-start;align-items: center;text-align: left;}
.rightList>div:nth-child(1){
  flex: 2
}
.rightList h5{font-size: 14px;}
.rightList .el-button--primary {
background: #C6F2E3;
border: 0;
color: #0DBC79;
padding: 7px;
}
.rightList .el-button [class*=el-icon-]+span{margin-left: 0;}
</style>

<style>
#banner{border: 0px solid red;}
.el-carousel__item h3 {
    color: red;
    font-size: 14px;
    position: absolute;
    /* opacity: 0.75;
    line-height: 150px; */
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
.el-carousel__item img{
  width: 100%;
  height: inherit;
}
#banner .el-carousel__button{width: 10px;}
</style>
