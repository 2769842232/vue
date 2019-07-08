import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
    //引入样式
import './assets/bootstrap/css/bootstrap.css'
import './assets/css/index.css'
import axios from 'axios'

//希望给vue的实例增加成员可以再vue的构造函数的原型上增加成员
Vue.prototype.axios = axios

//导出路由模块
import router from './router'
new Vue({
    render: h => h(App),
    //配置路由对象
    router,
}).$mount('#app')