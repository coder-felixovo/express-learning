const express = require('express')
const app = express()
const path = require('path')

// express.static
// app.use(express.static(__dirname + '/static'))
// 这样就可以直接访问static目录下的文件，例如: http://127.0.0.1:3000/public.css
// express会在static这个目录下寻找文件，所以不用将静态目录作为URL的一部分

// 当然也可以指定前缀
app.use('/static', express.static(__dirname + '/static'))
// 此时URL为：http://127.0.0.1:3000/static/public.css

app.listen(3000,() => {
  console.log('Server started, running at http://127.0.0.1:3000')
})