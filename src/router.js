import Vue from 'vue'
//导入路由模块
import VueRouter from 'vue-router'
//配置router
Vue.use(VueRouter)

//导入英雄列表的组件
import right from './views/ying/right'

//创建路由对象
const router = new VueRouter({
    routes: [
        { name: 'heros', path: '/ying', component: right }
    ]
})

//导出路由对象
export default router