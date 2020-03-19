import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      // detail,
      // category,
      //   login
    },
    // state 数据类
    state: {
        author:'vuex---vicky'
    },
    // mutations 修改state的地方
  mutations: {},
   // getters state 的计算属性
   getters: {

},
// actions 操作异步数据  其实就是提交mutations
actions: {

}


})