const express = require('express')

const app = express()

// 导入路由模块
const router = require('./router/index.js')

app.use((req, res, next) => {
  console.log('经过全局中间件')
  next()
})

// 注册路由模块
app.use(router)
// 为路由模块添加前缀
// app.use('/api', router)
// 如果添加了前缀，访问路由里的中间件需要带上'/api'前缀

app.listen(3000, () => {
  console.log('Server started, running at http://127.0.0.1:3000')
})

