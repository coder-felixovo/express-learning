const express = require('express')
const app = express()

app.use(function (req, res, next) {
	console.log('经过全局中间件')
	next()
})

const lmw = function (req, res, next) {
	console.log('经过局部中间件')
	next()
}

app.get('/error', [lmw], (req, res) => {
	console.log('准备抛出错误')
	throw new Error('服务器内部发生了错误')
})

// 错误级别中间件，必须注册在所有路由后面
app.use((err, req, res, next) => {
  console.log('经过错误级别中间件')
  console.log(err)
  res.send(err.message)
})

app.listen(3000, () => {
  console.log('Server started, running at http://127.0.0.1:3000')
})