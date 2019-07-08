<template>
  <div id="app">
    <!-- 顶栏 -->
    <HeroList></HeroList>
    <foot></foot>
    <!-- 路由对应组件显示的位置 -->
    <router-view></router-view>
  </div>
</template>

<script>
//局部组件
//引入
import HeroList from "./components/HeroList.vue";
import foot from "./components/foot.vue";

export default {
  name: "app",
  components: {
    //导入注册子组件
    HeroList,
    foot
  }
};
</script>

<style>
</style>
