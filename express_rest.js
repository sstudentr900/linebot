//https://ithelp.ithome.com.tw/articles/10240749
const express = require('express')
//使用body-parser針對request body進行parse
const bodyParser = require('body-parser')
const app = express()
const port = 3310

app.use(bodyParser.text({type: '*/*'}))

app.get('/user', (req, res) => {
  var user = JSON.parse(req.body)
  res.send('user info is ' + JSON.stringify(user))
})
app.post('/user', (req, res) => {
  var user = JSON.parse(req.body)
  res.send('get user data, user name is ' + user.name)
})

app.put('/user', (req, res) => {
  var user = JSON.parse(req.body)
  user.age += 1
  res.send('return user info is ' + JSON.stringify(user))
})

app.delete('/user', (req, res) => {
  var user = JSON.parse(req.body)
  res.send('user is deleted : ' + user.name)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
