// 引用linebot SDK
const linebot = require('linebot');

// 引用express
const express = require('express');

// 用於辨識Line Channel的資訊
const bot = linebot({
  // channelId: process.env.CHANNEL_ID,
	// channelSecret: process.env.CHANNEL_SECRET,
	// channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
  channelId: '1654921355',
  channelSecret: '6aecda9fc9f58ddb9e452f977c80bbb1',
  channelAccessToken: 'CWCKiPXFGVqfPc92uF1ZJuybJakn4rhH5ih3EeA47N6RbIP0VZbMLywZQt9McHCYvh8zB/qohLtO1CTd+NT6wIlj1BIXNTP7j4cE0kRxr+v9OL7aJeSE7zhYsDm7BoHriS7NfKILJQPqkC7DSWDyQdB04t89/1O/w1cDnyilFU='
});

//express 設置
const app = express();
// const port = 3000;

//首頁
app.get('/',function(req,res){
  res.send('hello word')
})
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
//沒有定義PORT 設置80
// app.listen(process.env.PORT || 80, function () {
//   console.log('[BOT已準備就緒]');
// });


//解析JSON
const linebotParser = bot.parser;
//處理LINE訊息伺服器請求
app.post('/linewebhook',linebotParser)

// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
  // event.message.text是使用者傳給bot的訊息
  // 準備要回傳的內容
  const replyMsg = `Hello你剛才說的是:${event.message.text}`;
  // 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者
  event.reply(event.message.text).then(function (data) {
    // 當訊息成功回傳後的處理
    console.log('successs',data)
  }).catch(function (error) {
    // 當訊息回傳失敗後的處理
    console.log('error',error)
  });
});

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 3000, function () {
    console.log('[BOT已準備就緒]');
});
