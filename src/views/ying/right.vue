<template>
  <div class="front">
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
      <h2 class="sub-header">英雄管理</h2>
      <a class="btn btn-success" href="add.html">Add</a>
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>名称</th>
              <th>性别</th>
              <th>操作</th>
              <th>id</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr :key="item.id" v-for="(item,index) in list">
              <td>{{index+1}}</td>
              <td>{{item.name}}</td>
              <td>{{item.gender}}</td>
              <td>{{item.fath}}</td>
              <td>{{item.id}}</td>
              <td>
                <a href="edit.html">edit</a>
                &nbsp;&nbsp;
                <a
                  href="javascript:window.confirm('Are you sure?')"
                >delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
</style>
