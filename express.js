const express = require('express');// 引用express
const app = express(); //express 執行

//url-首頁
app.get('/',function(req,res){
  res.send('hello word')
});

//app監聽port(必須)
app.listen(process.env.PORT || 3000, function () {
  console.log('[app已準備就緒]');
});// 沒有定義PORT 設置80

