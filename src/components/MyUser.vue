<template>
    <!-- 在模版中获取路由动态参数 -->
    <div class="my-user">MyUser:{{ $route.params.id }}</div>
</template>

<script setup>
// 在方法中获取路由动态参数
// options Api
// this.$route.params.id

// componsitions Api
import { useRoute, onBeforeRouteUpdate } from 'vue-router';

// 1
const route = useRoute()
console.log(route.params.id);

// 2
onBeforeRouteUpdate((to, from) => {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 `/users/:id`，在 `/users/1` 和 `/users/2` 之间跳转的时候，
    console.log('to:', to.params.id, 'from:', from.params.id);
})

</script>
  
<style scoped>
.my-user {
    background-color: aqua;
    font-size: 36px;
}
</style>