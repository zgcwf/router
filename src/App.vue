<template>
  <div>
    <h1>App</h1>
  </div>
  <div>
    <div>
      <!-- router-link：跳转到对应路由 -->
      <router-link :to="{ path: '/home' }">首页</router-link>
    </div>
    <div>
      <router-link to="/about" active-class="zgc-active">关于</router-link>
    </div>
    <div>
      <router-link to="/user/123" active-class="zgc-active">用户123</router-link>
      <router-link to="/user/321" active-class="zgc-active">用户321</router-link>
    </div>
    <div>
      <router-link to="/info" active-class="zgc-active">信息</router-link>
    </div>
    <button @click="toHome">首页</button>
    <button @click="toAbout">关于</button>
  </div>
  <!-- router-view: 占位，路由组件替换掉 router-view 进行展示 -->
  <router-view></router-view>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const toAbout = () => {
  router.push('/about')
  // router.replace('/about')
}

const toHome = () => {
  router.push({
    path: '/home',
    query: {
      name: 'wf', 
      age: 20
    }
  })
}
</script>

<style scoped>
/* 当前被选中的路由身上默认会有一个 router-link-active 的class属性
    通过active-class属性可以更改该class名
*/
.router-link-active {
  color: red;
  font-size: 24px;
}

.zgc-active {
  color: red;
  font-size: 24px;
}
</style>
