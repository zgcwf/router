<template>
  <h1>登陆页面</h1>
  <button @click="login">登录</button>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const login = () => {
  // 点击登录，向服务器发出请求，得到服务器返回的token，存储在localStorage中
  localStorage.setItem("token", "qwe");
  // 自动跳转到info页面
  router.push("/info");
};
</script>
