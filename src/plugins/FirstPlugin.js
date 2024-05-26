export const FirstPlugin = (app, options) => {
  // app:アプリケーションインスタンス
  // options:ユーザーによって渡されるオプション
  console.log('Hello from FirstPlugin Function app:', app)
  console.log('vue version:', app.version)
  console.log('FirstPlugin option:', options)
}
