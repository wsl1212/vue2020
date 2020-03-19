<template>
  <div class="categoryListPage">
    <el-page-header @back="goBack" :content="currentName"></el-page-header>
    <div>
        <el-scrollbar>
          <div class="box" v-for="(item,index) in mydata" :key="item.id" @click="handlerList(item)" :class="{active:item.id==currentIndex}">{{item.name}}</div>
        </el-scrollbar>
    </div>

    <div class="mybox">
      <div class="myitembox">
        <a class="line_1px"  v-for="item2 in loadListData" :key="item2.id" :subdata="item2.data">
          <p>{{item2.name}}</p>
          <section  v-for="itemsub in item2.data" :key="itemsub.id" @click="goForm()">
            <aside>
               <img :src=itemsub.imgsrc alt="">
            </aside>
            <main>
               <h5>{{itemsub.name}}</h5>
               <div class="course_mark">
                   <div class="course_star">
                     <p class="course_star-origin"></p>
                     <p class="course_star-active"></p>
                   </div>
                   <span>{{itemsub.count}}</span>
               </div>
               <p class="course_price">
                 <span class="course_price-discount">￥{{itemsub.price}}</span>
               </p>
            </main>
          </section>
        </a>
          
      </div>
    </div>


  </div>
  
</template>

<script>
export default {
  name: 'CategoryList',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App  KcDetail',
      currentName:"",
      mydata:[
        {"id":1,"name":"职场提升"},
        {"id":2,"name":"编程与开发"},
        {"id":3,"name":"AI/数据科学"},
        {"id":4,"name":"设计创意"},
        {"id":5,"name":"产品与运营"},
        {"id":6,"name":"语言学习"},
        {"id":7,"name":"生活兴趣"},
        {"id":8,"name":"初级教程8"},
        {"id":9,"name":"初级教程9"}
      ],
      currentIndex:1,
      loadListData:[]
    }
  },
  mounted(){
      this.loadList(this.currentIndex);
      this.currentName=this.$route.params.name;
      console.log('currentName',this.currentName)
  },
  methods:{
      goBack(){
          this.$router.replace('/home/true')
      },
      handlerList(item){
          this.currentIndex=item.id;
          this.loadList(this.currentIndex);
      },
      loadList(id){
        //通过id请求数据
            this.loadListData=[{"id":1,"name":"ppt高手竞技",
            "data":[{"id":'1_1',"name":"揭秘PPT真像","imgsrc":require("../assets/images/listImg2S/a1.png"),"price":199,"count":23588},
            {"id":'1_2',"name":"揭秘PPT真像","imgsrc":require("../assets/images/listImg2S/a2.jpg"),"price":699,"count":23588},
            {"id":'1_3',"name":"揭秘PPT真像","imgsrc":require("../assets/images/listImg2S/a3.jpg"),"price":99,"count":23588},
            {"id":'1_4',"name":"揭秘PPT真像","imgsrc":require("../assets/images/listImg2S/a4.jpg"),"price":69,"count":23588}
            ]},
            {"id":2,"name":"ppt职场实战",
            "data":[{"id":"2_1","name":"锐普的职场ppt实战","imgsrc":require("../assets/images/listImg2S/a3.jpg"),"price":199,"count":23588},
            {"id":"2_2","name":"锐普的职场ppt实战","imgsrc":require("../assets/images/listImg2S/a4.jpg"),"price":199,"count":23588},
            ]}
            
            ];
             


      },
      goForm(){
        this.$router.push({name:'form1'})
      }
  },
   filters:{
            toSrc:function (imgsrc) {
                return "/static/images/listImg2S/"+imgsrc
            }
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../assets/scss/common.scss";
html,body{
  background-color: #fff;
}

/* .el-scrollbar__wrap{overflow: hidden;width: 1000px;} */
.el-scrollbar__view{width: 1000px;overflow: hidden;font-size: 16px;}
.el-scrollbar__thumb{background-color: transparent;}
.el-scrollbar__thumb:hover{background-color: transparent;}
.box{padding: 12px 15px;float: left;}
.box.active{border-bottom: 2px solid blue;font-weight: 600;}
</style>
<style scoped>
.categoryListPage{padding-top:15px; }
.line_1px>p{
  text-align: left;padding:10px;
  font-size: 16px;
  font-weight: 600;
}
.line_1px>section{
  display: flex;
  padding: 5px 0px;
}
.line_1px>section>aside{flex-shrink: 0;flex-grow: 0;flex-basis: 120px;height: 70px;}
.line_1px>section>aside>img{width: 110px;}
.line_1px main{padding-left: 10px;}
.line_1px main>h5{
  font-weight: normal;
  font-size: 12px;
}
.course_mark{display: flex;font-size: 12px;color: #999;}
.course_star{
  width: 45px;height: 12px;position: relative;
}
.course_star-origin{
  width: 100%;height: 100%;
  background: transparent url("/static/images/xin.png");
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: 0 center;
}

.course_star-active{
width: 100%;height: 100%;
  background: transparent url("/static/images/xin_select.png");
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: 0 center;
      position: absolute;
    top: 0;
    left: 0;

}
.course_price{text-align: left;}

.course_price-discount{font-size: 18px;color: #333;}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

</style>
