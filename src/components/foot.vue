<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <!-- <li class="active">
        <a href="#">英雄管理</a>
      </li>
      <li>
        <a href="#">武器管理</a>
      </li>
      <li>
        <a href="#">装备管理</a>
      </li>-->
      <router-link class="active" to="/ying" tag="li">
        <a>英雄列表</a>
      </router-link>
      <router-link to="/Zb" tag="li">
        <a>武器列表</a>
      </router-link>
      <router-link to="/Wu" tag="li">
        <a>装备列表</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
