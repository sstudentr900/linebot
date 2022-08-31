//https://ithelp.ithome.com.tw/articles/10240749
const express = require('express')
//使用body-parser針對request body進行parse
const bodyParser = require('body-parser')
const app = express()
const port = 3310

app.use('/api', require('./express_api_crud'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
