import { vuetify } from './vuetify'
import { createPinia } from 'pinia'
import router from './router'
// プラグイン考察用
import { FirstPlugin } from './FirstPlugin'
import { SecondPlugin } from './SecondPlugin'

// プラグインをまとめてインストールする
// main.jsで、registerPluginsを実行

const pinia = createPinia()

export function registerPlugins(app) {
  app.use(vuetify)
  app.use(router)
  app.use(pinia)
  app.use(FirstPlugin, 'オプション')
  app.use(SecondPlugin)
}
