import Vue from 'vue'
//导入路由模块
import VueRouter from 'vue-router'
//配置router
Vue.use(VueRouter)

//导入装备列表的组件
import right from './views/equips/right.vue'
//引入武器列表的组件
import Wqi from './views/Wu/Wqi.vue'

//创建路由对象
const router = new VueRouter({
    linkActiveClass: 'active',
    routes: [
        { name: 'one', path: '/', directives: 'Wqi' },
        { name: 'wq', path: '/Wu', component: Wqi },
        { name: 'Zb', path: '/equips', component: right }
    ]

})

//导出路由对象
export default router