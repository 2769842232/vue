<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">英雄管理</h2>
    <!-- <a class="btn btn-success" href="add.html">Add</a> -->
    <router-link class="btn btn-success" to="/Ying/PostList">添加</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>名称</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value,index) in list" :key="value.id">
            <td>{{index+1}}</td>
            <td>{{value.name}}</td>
            <td>{{value.gender}}</td>
            <td>
              <a href="edit.html">编辑</a>
              &nbsp;&nbsp;
              <a href="javascript:window.confirm('Are you sure?')">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
//导入axios
import axios from "axios";
export default {
  data() {
    return {
      list: []
    };
  },
  //钩子函数  挂载阶段
  mounted() {
    this.Xiong();
  },
  methods: {
    Xiong() {
      //发送请求 请求数据
      this.axios
        .get(
          "https://www.easy-mock.com/mock/5d0cba0313563a7b47ce871c/itcast_wyz/heros"
        )
        .then(res => {
          console.log(res);
          const { status, data } = res;
          if (status === 200) {
            this.list = data.data.heros
            console.log(data)
          }
        }).catch((err)=>{
          alert('请求服务器异常')
        })
    }
  }
};
</script>

<style>
</style>
