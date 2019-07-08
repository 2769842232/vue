import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
    //引入样式
import './assets/bootstrap/css/bootstrap.css'
import './assets/css/index.css'
import axios from 'axios'

Vue.prototype.axios = axios
    //配置路由表

new Vue({
    render: h => h(App),
}).$mount('#app')