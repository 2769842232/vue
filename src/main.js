import Vue from 'vue'
import App from './App.vue'
// import '../node_modules/axios/dist/axios'
import '../node_modules/axios/dist/axios'
//引入样式
import './assets/bootstrap/css/bootstrap.css'
import './assets/css/index.css'

// Vue.config.productionTip = false

//配置路由表

new Vue({
    render: h => h(App),
}).$mount('#app')