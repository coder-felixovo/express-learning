const express = require('express')
const app = new express()

//  定义多个全局中间件，会按照先后顺序依次调用

//  方式一：定义全局中间件
const gmw = function (req, res, next) {
  console.log('全局中间件1')
  next() // 放行
}

//  注册中间件，app.use(中间件函数名)
app.use(gmw)

//  方式二：定义全局中间件
app.use(function (req, res, next) {
  console.log('全局中间件2')
  next() // 放行
})

app.get('/test_gmw', (req, res) => {
  res.send('success')
})

app.listen(3000, () => {
  console.log('Server started, running at http://127.0.0.1:3000')
})