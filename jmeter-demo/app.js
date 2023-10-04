const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get("/jmeter-get-query", (req, res) => {
  const { id } = req.query
  res.send({
    code: 200,
    message: "成功",
    data: {
      id
    }
  }) 
})

app.get("/jmeter-get-params/:id", (req, res) => {
  const { id } = req.params
  res.send({
    code: 200,
    message: "成功",
    data: {
      paramsId: id
    }
  })
})

app.post("/jmeter-post", (req, res) => {
  const { username, password } = req.body
  res.send({
    code: 200,
    message: "成功",
    data: {
      username,
      password
    }
  })
})

app.listen(3000, () => {
  console.log('Server started, running at http://127.0.0.1:3000')
})