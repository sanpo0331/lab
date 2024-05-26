// import './assets/main.css'
import { createApp } from 'vue'
import { registerPlugins } from './plugins'
import App from './App.vue'

// Vueアプリケーションの開始
// createApp関数でVueアプリケーションのインスタンスを作成
// Appはルートコンポーネント
const app = createApp(App)

registerPlugins(app)
app.mount('#app')
