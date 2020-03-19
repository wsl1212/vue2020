<template>
  <div class="categoryPage">
    
   <div>
     <el-tabs :tab-position="tabPosition">
    <el-tab-pane :label="myitem.name" class="myleftArea" v-for="myitem in mylistData" :key="myitem.id">
      <div class="myrightArea">
        <div class="mylist1" >
            <div v-for="(myimg,index) in myitem.imgArr" :key="index"><img :src="myimg" alt=""/></div>
           
        </div>
        <div class="mylist2" v-for="mysub in myitem.data" :key="mysub.id">
           <div class="mytitle">{{mysub.name}}</div>
           <div><img :src="mysub.imgsrc" alt=""/></div>
        </div>
        
      </div>
    </el-tab-pane>
  </el-tabs>
   </div>
  </div>
</template>

<script>
export default {
  name: 'Category',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App分类页面',
      tabPosition:"left",
      mylistData:[{
        "id":1,"name":"特别推荐","imgArr":['/static/images/listImg2S/b2.png','/static/images/listImg2S/b2.png'],
        "data":[{"id":"1_1",name:"快速上手运营:方法+案例",imgsrc:"/static/images/listImg2S/a1.png"},
                {"id":"1_2",name:"快速上手运营:方法+案例",imgsrc:"/static/images/listImg2S/a2.jpg"},
                {"id":"1_3",name:"快速上手运营:方法+案例",imgsrc:"/static/images/listImg2S/a3.jpg"},
                {"id":"1_4",name:"快速上手运营:方法+案例",imgsrc:"/static/images/listImg2S/a4.jpg"}
        ]
      },
      
      {
        "id":2,"name":"职场提升","imgArr":['/static/images/listImg2S/b1.png','/static/images/listImg2S/b1.png'],
        "data":[{"id":"1_1",name:"职场提升:方法+案例",imgsrc:"/static/images/listImg2S/zc/zc1.jpg"},
                {"id":"1_2",name:"职场提升:方法+案例",imgsrc:"/static/images/listImg2S/zc/zc2.jpg"},
                {"id":"1_3",name:"职场提升:方法+案例",imgsrc:"/static/images/listImg2S/zc/zc3.jpg"},
                {"id":"1_4",name:"职场提升:方法+案例",imgsrc:"/static/images/listImg2S/zc/zc4.jpg"}
        ]
      },
      {
        "id":3,"name":"编程与开发","imgArr":['/static/images/listImg2S/b2.png','/static/images/listImg2S/b2.png'],
        "data":[{"id":"1_1",name:"编程与开发:方法+案例",imgsrc:"/static/images/listImg2S/bc/bc1.jpg"},
                {"id":"1_2",name:"编程与开发:方法+案例",imgsrc:"/static/images/listImg2S/bc/bc2.jpg"},
                {"id":"1_3",name:"编程与开发:方法+案例",imgsrc:"/static/images/listImg2S/bc/bc3.png"},
                {"id":"1_4",name:"编程与开发:方法+案例",imgsrc:"/static/images/listImg2S/bc/bc4.jpg"}
        ]
      },
      {
        "id":4,"name":"AI/数据科学","imgArr":['/static/images/listImg2S/b1.png','/static/images/listImg2S/b1.png'],
        "data":[{"id":"1_1",name:"AI/数据科学:方法+案例",imgsrc:"/static/images/listImg2S/kx/kx1.png"},
                {"id":"1_2",name:"AI/数据科学:方法+案例",imgsrc:"/static/images/listImg2S/kx/kx2.jpg"},
                {"id":"1_3",name:"AI/数据科学:方法+案例",imgsrc:"/static/images/listImg2S/kx/kx3.jpg"},
                {"id":"1_4",name:"AI/数据科学:方法+案例",imgsrc:"/static/images/listImg2S/kx/kx4.jpg"}
        ]
      },
      {
        "id":5,"name":"产品与运营","imgArr":['/static/images/listImg2S/b2.png','/static/images/listImg2S/b2.png'],
        "data":[{"id":"1_1",name:"产品与运营:方法+案例",imgsrc:"/static/images/listImg2S/a1.png"},
                {"id":"1_2",name:"产品与运营:方法+案例",imgsrc:"/static/images/listImg2S/a2.jpg"},
                {"id":"1_3",name:"产品与运营:方法+案例",imgsrc:"/static/images/listImg2S/a3.jpg"},
                {"id":"1_4",name:"产品与运营:方法+案例",imgsrc:"/static/images/listImg2S/a4.jpg"}
        ]
      },
      {
        "id":6,"name":"设计创意","imgArr":['/static/images/listImg2S/b1.png','/static/images/listImg2S/b1.png'],
        "data":[{"id":"1_1",name:"设计创意:方法+案例",imgsrc:"/static/images/listImg2S/a1.png"},
                {"id":"1_2",name:"设计创意:方法+案例",imgsrc:"/static/images/listImg2S/a2.jpg"},
                {"id":"1_3",name:"设计创意:方法+案例",imgsrc:"/static/images/listImg2S/a3.jpg"},
                {"id":"1_4",name:"设计创意:方法+案例",imgsrc:"/static/images/listImg2S/a4.jpg"}
        ]
      },
       {
        "id":7,"name":"语言学习","imgArr":['/static/images/listImg2S/b2.png','/static/images/listImg2S/b2.png'],
        "data":[{"id":"1_1",name:"语言学习:方法+案例",imgsrc:"/static/images/listImg2S/a1.png"},
                {"id":"1_2",name:"语言学习:方法+案例",imgsrc:"/static/images/listImg2S/a2.jpg"},
                {"id":"1_3",name:"语言学习:方法+案例",imgsrc:"/static/images/listImg2S/a3.jpg"},
                {"id":"1_4",name:"语言学习:方法+案例",imgsrc:"/static/images/listImg2S/a4.jpg"}
        ]
      },
       {
        "id":8,"name":"职业考试","imgArr":['/static/images/listImg2S/b1.png','/static/images/listImg2S/b1.png'],
        "data":[{"id":"1_1",name:"职业考试:方法+案例",imgsrc:"/static/images/listImg2S/a1.png"},
                {"id":"1_2",name:"职业考试:方法+案例",imgsrc:"/static/images/listImg2S/a2.jpg"},
                {"id":"1_3",name:"职业考试:方法+案例",imgsrc:"/static/images/listImg2S/a3.jpg"},
                {"id":"1_4",name:"职业考试:方法+案例",imgsrc:"/static/images/listImg2S/a4.jpg"}
        ]
      },
       {
        "id":9,"name":"生活兴趣","imgArr":['/static/images/listImg2S/b2.png','/static/images/listImg2S/b2.png'],
        "data":[{"id":"1_1",name:"生活兴趣:方法+案例",imgsrc:"/static/images/listImg2S/a1.png"},
                {"id":"1_2",name:"生活兴趣:方法+案例",imgsrc:"/static/images/listImg2S/a2.jpg"},
                {"id":"1_3",name:"生活兴趣:方法+案例",imgsrc:"/static/images/listImg2S/a3.jpg"},
                {"id":"1_4",name:"生活兴趣:方法+案例",imgsrc:"/static/images/listImg2S/a4.jpg"}
        ]
      },
      
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../assets/scss/common.scss";
</style>
<style scoped>
.myrightArea>.mylist1>div{
  padding: 5px 5px;
  height: 80px;
}
.myrightArea>.mylist1>div>img{
 height: 100%;
}

.myrightArea>.mylist2{
  display:flex;
  justify-content: space-between;
  padding: 5px;
  box-sizing: border-box;
}
.myrightArea>.mylist2>div{
  width: 50%;
  height: 80px;
}
.mytitle{font-weight: 600;text-align: left;}
.myrightArea>.mylist2>div>img{
  width: 100%;
}
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
