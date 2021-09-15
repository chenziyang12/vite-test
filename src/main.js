import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./stroe"

const app=createApp(App)
app.config.globalProperties.log=(str)=>{
 console.log(str)
}
app.use(router).use(store).mount('#app')
