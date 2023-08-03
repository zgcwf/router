import { createApp } from 'vue'

// 导入路由
import router from './router'

import App from './App.vue'

const app = createApp(App)

// 使用路由
app.use(router)
app.mount('#app')
