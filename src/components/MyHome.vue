<template>
  <div class="my-home">MyHome:{{ $route.query }}</div>
  <button @click="btnClick">按钮</button>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

const btnClick = () => {
  // 后退一步
  // router.back()
  // 前进一步
  // router.forward()
  router.go(2)
  // router.go(1) => forwad
  // router.go(-1) => back
}
</script>

<style scoped>
.my-home {
  background-color: aqua;
  font-size: 36px;
}
</style>
