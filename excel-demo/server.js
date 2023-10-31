const express = require("express")
const xlsx = require("node-xlsx")

const app = express()

// node-xlsx
app.get('/exportExcelByNodeXlsx', (req, res) => {
  const mockData = [
    {
      name: "sheet1", // 工作表名称
      data: [
        ["城市"], // 首行, 通常为标题行
        ["北京"],
        ["上海"],
        ["广州"],
        ["深圳"]
      ]
    }
  ]

  // 以流的形式返回
  res.setHeader("Content-Type", "application/octet-stream")
  res.setHeader("Content-Disposition", "attachment; filename=test.xlsx")

  res.send(xlsx.build(mockData))
})

app.listen(3000, () => {
  console.log('Server started, running at http://127.0.0.1:3000')
})