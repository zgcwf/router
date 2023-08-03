import {
  createRouter,
  // createWebHashHistory,
  createWebHistory,
} from "vue-router";

import MyAbout from "../components/MyAbout.vue";
import MyHome from "../components/MyHome.vue";

// 创建一个路由
const router = createRouter({
  // 配置路由模式： hash
  // history: createWebHashHistory(),
   // 配置路由模式： history
  history: createWebHistory(),
  // 映射关系
  routes: [
    // 配置默认路径或者对默认路径进行重定向（推荐）
    // { path: "/", component: MyAbout },
    { path: "/", redirect: "/about" },
    { path: "/home", component: MyHome },
    { path: "/about", component: MyAbout },
  ],
});

export default router;
