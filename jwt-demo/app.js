const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt')

const app = express()
app.use(cors())
app.use(express.json())
const secretKey = 'coldcoffee'

app.use(expressJWT.expressjwt({ secret: secretKey, algorithms: ['HS256'] }).unless({ path: [/^\/api\//] }))

app.post('/api/login', (req, res) => {
  const { username, password } = req.body
  if (username !== 'admin' || password !== '123456') {
    return res.send({ status: 200, message: 'Sign in failed' })
  }
  res.send({
    status: 200,
    message: 'Sign in successfully',
    token: jwt.sign({ username, }, secretKey, { expiresIn: 120 })
  })
})

// 这是一个有权限的接口
app.get('/admin/info', (req, res) => {
  res.send({
    status: 200,
    message: 'Get user info successfully',
    data: req.user
  })
})

app.use((err, req, res, next) => {
  console.log(err)
  res.send('服务器跑路了')
})

app.listen(3000, () => {
  console.log('Server started, running at http://127.0.0.1:3000')
})