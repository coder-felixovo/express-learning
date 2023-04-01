const express = require('express')
const session = require('express-session')

const app = express()

app.use(session({
  secret: 'key',
  resave: false,
  saveUninitialized: true
}))

app.use(express.json());

app.post('/api/login', (req, res) => {
  const { username, password } = req.body
  if (username !== 'admin' || password !== '123456') {
    res.send({ status: -1, msg: 'Login failed' })
  } else {
    req.session.isLogin = true
    req.session.username = username
    res.send({ status: 1, msg: 'Login successfully' })
  }
})

app.get('/api/username', (req, res) => {
  if (!req.session.isLogin) {
    res.send({ status: 0, msg: 'You are not logged in' })
  } else {
    res.send({
      username: req.session.username
    })
  }
})

app.get('/api/logout', (req, res) => {
  req.session.destroy()
  res.send({
    status: -2,
    msg: 'Sign out successfully'
  })
})

app.listen(3000, () => {
  console.log('Server started, running at http://127.0.0.1:3000')
})