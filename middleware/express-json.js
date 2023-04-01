const express = require('express')
const app = express()

// express.json 处理json格式数据
app.use(express.json())

app.post('/testjson',(req, res) => {
	// 没有使用express.json
	// console.log(req.body) // undefined
 //  req.on('data',(chunk) => {
 //    console.log(chunk) // buffer
 //  })
 
	// 使用express.json后，req.body能打印出数据
	console.log(req.body)
	
  res.send('Test express.json successfully')
})

app.listen(3000,() => {
  console.log('Server started, running at http://127.0.0.1:3000')
})