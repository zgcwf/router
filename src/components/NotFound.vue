<template>
    <div class="not-found">页面没有匹配到对应的路径,路径{{ $route.params.pathMatch }}不正确</div>
  </template>
  
  <script setup></script>
  
  <style scoped>
  .not-found {
    background-color:aquamarine;
    font-size: 36px;
  }
  </style>
  