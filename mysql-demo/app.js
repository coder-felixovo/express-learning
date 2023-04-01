const express = require('express')
const cors = require('cors')
const uuid = require('node-uuid/uuid')
const db = require('./databaseConfig')

const app = express()
app.use(cors())
app.use(express.json())

// 测试INSERT
app.post('/test_insert', (req, res) => {
  const { name } = req.body
  const id = uuid().split('-').join('')
  const sql = 'INSERT INTO anime_role (id, name) VALUES (?, ?)'
  // 参数位置要与SQL语句保持一致
  const param = [id, name]
  db.query(sql, param, (error, results) => {
    if (error) {
      console.log(error)
    }
    if (results.affectedRows === 1) {
      return res.send('添加成功')
    }
    return res.send('添加失败')
  })
})

// 测试DELETE
app.post('/test_delete', (req, res) => {
  const { id } = req.body
  const sql = 'DELETE FROM anime_role WHERE id = ?'
  db.query(sql, id, (error, results) => {
    if (error) {
      console.log(error)
    }
    if (results.affectedRows === 1) {
      return res.send('删除成功')
    }
    return res.send('删除失败')
  })
})

// 测试SELECT
app.get('/test_select', (req, res) => {
  const sql = 'SELECT id, name FROM anime_role'
  db.query(sql, (error, results) => {
    if (error) {
      console.log(error)
    }
    return res.send(results)
  })
})

// 测试UPDATE
app.post('/test_update', (req, res) => {
  const { id, name } = req.body
  const sql = 'UPDATE anime_role SET name = ? WHERE id = ?'
  db.query(sql, [name, id], (error, results) => {
    if (error) {
      console.log(error)
    }
    if (results.affectedRows === 1) {
      return res.send('修改成功')
    }
    return res.send('修改失败')
  })
})

app.listen(3000, () => {
  console.log('Server started, running at http://127.0.0.1:3000')
})