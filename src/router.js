import Vue from 'vue'
//导入路由模块
import VueRouter from 'vue-router'
//配置router
Vue.use(VueRouter)

//导入英雄列表的组件
import right from './views/Zb/right.vue'
//引入武器列表
import Wqi from './views/Wu/Wqi.vue'

//创建路由对象
const router = new VueRouter({
    linkActiveClass: 'active',
    routes: [
        { name: 'home', path: '/', directives: '/Zb' },
        { name: 'heros', path: '/Zb', component: right },
        { name: 'wq', path: '/Wu', components: Wqi }
    ]
})

//导出路由对象
export default router