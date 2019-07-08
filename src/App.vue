<template>
  <div id="app">
    <!-- 顶栏 -->
    <HeroList></HeroList>
      <div class="row">
    <foot></foot>
    <!-- 路由对应组件显示的位置 -->
    <router-view></router-view>
  </div>
</template>

<script>
//局部组件
//引入
import HeroList from './components/HeroList'
import foot from './components/foot'

export default {
  name: 'app',
  components: {
   //导入注册子组件
  HeroList,
  foot
  }
}
</script>

<style>

</style>
