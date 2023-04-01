const express = require('express')

const router = express.Router()

router.use((req, res, next) => {
  console.log('这是路由级别中间件')
  next()
})

router.get('/list/user', (req, res) => {
  res.send('用户列表')
})

router.get('/list/book', (req, res) => {
  res.send('图书列表')
})

module.exports = router
