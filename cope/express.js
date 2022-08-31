//使用Express套件建立REST API
//https://ithelp.ithome.com.tw/articles/10240749
const express = require('express');// 引用express
const app = express(); //express 執行

//url-首頁
app.get('/',function(req,res){
  res.send('hello word')
});

//app監聽port(必須),沒有定義PORT 設置3000,http://localhost:3000/
app.listen(process.env.PORT || 3000, function () {
  console.log('已準備就緒');
});