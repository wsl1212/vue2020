// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './vuex/store'
Vue.use(Vuex)
import './assets/font/iconfont.css'
import './assets/font-awesome-4.7.0/css/font-awesome.css'

Vue.use(ElementUI)
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false;

(function(doc,win){
  var docEl = document.documentElement;
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  var refreshRem=function(){
    var deviceWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
    var fontSize=deviceWidth*40/320;
    document.documentElement.style.fontSize=fontSize+"px";
  }

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, refreshRem, false);
  doc.addEventListener('DOMContentLoaded', refreshRem, false);
  refreshRem();
  
})(document,window);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
