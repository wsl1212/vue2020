<template>
    <div>
       <div>
            <el-radio v-model="radio" :label="myradio.label" :value="myradio.value" v-for="(myradio,index) in optionsRadio" :key="index" >备选项</el-radio>
            
       </div>
       <div>
           <el-radio-group v-model="radio1">
                <el-radio-button label="上海"></el-radio-button>
               
            </el-radio-group>
       </div>
       <div>
            <el-checkbox-group v-model="initcheckList">
                <el-checkbox :label="myitem.label" :value="myitem.value" v-for="(myitem,index) in optionsCheck" :key="index" @change="myChangeCheckbox(index,myitem)"></el-checkbox>                
            </el-checkbox-group>
       </div>

       <div>
           <el-button @click="mysubmit">提交</el-button>
       </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                optionsRadio:[{                  
                      value: '1',
                      label: 'aa'
                    }, {
                      value: '2',
                      label: 'bb'
                    }
                ],
                optionsCheck: [{
                      value: '1',
                      label: '黄金糕'
                    }, {
                      value: '2',
                      label: '双皮奶'
                    }, {
                      value: '3',
                      label: '蚵仔煎'
                    }],
                radio:"aa",
                radio1:"上海",
                initcheckList:["黄金糕"],
                selectcheckList:[]

            }
        },
        mounted(){

        },
        methods:{
           myChangeCheckbox(index,item){
             console.log()
           },
           mysubmit(){
               console.log('initcheckList',this.initcheckList,'radio',this.radio)
           }
        }
    }
</script>

<style lang="scss" scoped>

</style>