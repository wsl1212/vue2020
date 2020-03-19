<template>
  <div class="mystudyPage">
    
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
          <el-tab-pane label="学习概况" name="first">
              <div id="mychart1"></div>
              <div class="mystudyBox">
                <div class="myitem1" v-for="(myitem,index) in studyData1" :key="index">
                  <p>{{myitem.name}}</p>
                  <div>
                    <span>{{myitem.value}}</span>
                    <span>{{myitem.unit}}</span>
                  </div>
                </div>
              </div>

          </el-tab-pane>
          <el-tab-pane label="离线缓存" name="second">离线缓存</el-tab-pane>
         
        </el-tabs>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'Study',
  data () {
    return {
      msg: '我的学习页面',
      activeName:"first",
      studyData1:[{"name":"今日学习","unit":"分钟","value":20},{"name":"连续学习","unit":"天","value":20},{"name":"累计学习","unit":"小时","value":20}],
    }
  },
  mounted(){
     this.drawLine()
  },
  methods:{
    handleClick(){
      
    },
     drawLine () {
      var echarts = require('echarts');
      var myChart = echarts.init(document.getElementById('mychart1'));
      myChart.setOption({
        title: {
          text: ''
        },
        tooltip: {},
        xAxis: {
          data: ['2/20', '2/21', '2/22', '2/23', '2/24', '2/25']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'line',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../assets/scss/common.scss";
.mystudyPage .el-tabs__nav{    
    display: flex;
    width: 100%;
    justify-content: space-around;
    }
</style>
<style scoped>
.mystudyPage{background: #f6f6f6;}
#mychart1{width: 100%;height: 200px;}
.mystudyBox{
  display: flex;
  justify-content: space-around;
  background: #fff;
  padding: 20px 5px;
  box-shadow: 10px 10px 15px rgba(0,0,0,0.9);
}
.mystudyBox>.myitem1{
text-align: center;
padding: 10px;
border-right: 1px solid #ccc;
}
.mystudyBox>.myitem1:last-child{
  border-right:0; 
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
