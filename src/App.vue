<template>
  <div id="app">
    <!-- <h3>我的项目</h3> -->
    <HeroList></HeroList>
    <right></right>
    <foot></foot>
  </div>
</template>

<script>
//局部组件
//引入
import HeroList from './components/HeroList'
import right from './views/right'
import foot from './components/foot'
export default {
  name: 'app',
  components: {
   //导入注册子组件
  HeroList,
  right,
  foot
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
