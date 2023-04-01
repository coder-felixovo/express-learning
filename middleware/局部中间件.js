const express = require('express')
const app = new express()


const gmw = function (req, res, next) {
  console.log('全局中间件1')
  next()
}

app.use(gmw)

app.use(function (req, res, next) {
  console.log('全局中间件2')
  next()
})

//  定义局部中间件
const lmw = function (req, res, next) {
  console.log('局部中间件')
  next()
}

//  使用局部中间件两种写法
//  1. mw1, mw2, ...
//  2. [mw1, mw2, ...]
app.get('/test_lmw', lmw, (req, res) => {
  res.send('success')
})

app.listen(3000, () => {
  console.log('Server started, running at http://127.0.0.1:3000')
})