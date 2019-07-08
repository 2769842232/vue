import Vue from 'vue'
//导入路由模块
import VueRouter from 'vue-router'
//配置router
Vue.use(VueRouter)

//导入装备列表的组件
import right from './views/equips/right.vue'
//引入武器列表的组件
import Wqi from './views/Wu/Wqi.vue'
//引入英雄管理
import Yxiong from './views/Ying/Yxiong.vue'

//引入添加列表
import PostList from './views/Ying/PostList.vue'

//创建路由对象
const router = new VueRouter({
    linkActiveClass: 'active',
    routes: [
        { name: 'one', path: '/', directives: '/Ying' },
        { name: 'Ying', path: '/Ying', component: Yxiong },
        { name: 'wq', path: '/Wu', component: Wqi },
        { name: 'Zb', path: '/equips', component: right },
        //二级路由
        { name: 'PostList', path: '/Ying/PostList', component: PostList }
    ]

})

//导出路由对象
export default router