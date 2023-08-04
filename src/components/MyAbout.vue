<template>
  <div class="my-about">
    <h2>MyAbout</h2>
    <div>
      <router-link to="/about/recommend">推荐</router-link>
    </div>
    <div>
      <router-link to="/about/song">歌曲</router-link>
    </div>
    <!-- 占位，显示MyAbout组件的二级路由 -->
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style scoped>
.my-about {
  background-color: aqua;
}
</style>
