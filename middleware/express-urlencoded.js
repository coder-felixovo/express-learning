const express = require('express')
const app = express()

// express.urlencoded 处理x-www-form-urlencoded格式数据
app.use(express.urlencoded({extended:false}))

app.post('/testform', (req, res,) => {
	// 没使用express.urlencoded
 //  console.log(req.body) // undefined
	// req.on('data', (chunk) => {
	// 	console.log(chunk) // buffer
	// })
	
	// 使用express.urlencoded，req.body能打印出数据
	console.log(req.body)
	
  res.send('Test express.urlencoded sucessfully')
})

app.listen(3000,() => {
  console.log('Server started, running at http://127.0.0.1:3000')
})