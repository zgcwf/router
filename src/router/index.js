import {
  createRouter,
  createWebHashHistory,
  // createWebHistory,
} from "vue-router";

// 正常导入
import MyAbout from "../components/MyAbout.vue";
import MyHome from "../components/MyHome.vue";
import AboutRecommend from '../components/AboutRecommend.vue'

// 路由懒加载
const MyUser = () => import("../components/MyUser.vue")

// 创建一个路由
const router = createRouter({
  // 配置路由模式： hash
  history: createWebHashHistory(),
  // 配置路由模式： history
  // history: createWebHistory(),
  // 映射关系
  routes: [
    // 配置默认路径或者对默认路径进行重定向（推荐）
    // { path: "/", component: MyAbout },
    { path: "/", redirect: "/about" },
    // name属性：路由记录独一无二的名称
    // meta属性：自定义的数据
    {
      path: "/home",
      component: MyHome,
      name: 'home',
      meta: { name: 'zgc', age: 18 }
    },
    {
      path: "/about",
      name: 'my-about',
      component: MyAbout,
      children: [
        { path: '/about',  redirect: '/about/recommend' },
        { path: 'recommend', component: AboutRecommend }, // /about/recommend
        { path: 'song', component: () => import('../components/AboutSong.vue') } // about/song
      ]
    },
    // 动态路由，路径后面跟着参数
    { path: "/user/:id", component: MyUser },
    // 路由懒加载
    { path: "/info", component: () => import("../components/MyInfo.vue") },
    { path: "/login", component: () => import("../components/MyLogin.vue") },
    // 最后什么业匹配不到的，展示NotFound组件
    {
      // 最后加*与不加*返回路径格式不一致，一个是字符串 abc/cba,一个是数组 ['abc', 'cba']
      // path: "/:pathMatch(.*)", 
      path: "/:pathMatch(.*)*",
      component: () => import('../components/NotFound.vue')
    }
  ],
});

/**
 * 动态添加路由：根据不同的用户身份来动态的添加不同的路由，从而达到权限控制的目的
 * 1. 用户登录成功，拿到后端接口返回改用户的数据
 * 2. 从中取到该用户的身份角色
 * 3. 判断该角色所需要的路由，将其注册
 */

let isAdmin = true
if (isAdmin) {
  router.addRoute({
    path: '/admin',
    component: () => import("../components/MyAdmin.vue")
  })

  // 添加二级路由
  router.addRoute("my-about", {
    path: 'vip',
    component: () => import('../components/AboutVip.vue')
  })
}

/**
 * 删除路由的三种方式：
 * 1. 添加一个name相同的路由，因为在router中name是唯一的
 * 2. 通过 removeRoute 方法，传入路由的名称 removeRoute('my-about')
 * 3. 通过 addRoute 方法的返回值回调: 
 *      const remove = router.addRoute(params); 
 *      remove() //删除addRoute添加的路由（如果路由存在的话）
 */

// 获取一个包含所有路由的数组
console.log(router.getRoutes());
// 检查路由是否存在
console.log(router.hasRoute());

// 路由导航守卫
// 1. 进行任何的路由跳转之前，传入的beforeEach中的函数都会被回调
router.beforeEach((to, from) => {
  console.log('beforeEach',to, from);
  // 进入到任何界面时都跳转到login
  // if (to.path !== '/login') {
  //   return '/login'
  // }
  // 进入个人信息页面时进行判断（login => token => localStorage）：
  // 没有登录跳转到登录页，登陆了直接进入个人信息界面
  const token = localStorage.getItem('token')
  if (to.path === '/info' && !token ) {
    return '/login'
  }

})

export default router;
