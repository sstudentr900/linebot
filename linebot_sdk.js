

const express = require("express");
const configs = require("./config");
const line = require("@line/bot-sdk");

const config = {
  // channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
  // channelSecret: process.env.LINE_CHANNEL_SECRET,
  channelSecret: configs.channelSecret,
  channelAccessToken: configs.channelAccessToken
  // channelSecret: '6aecda9fc9f58ddb9e452f977c80bbb1',
  // channelAccessToken: 'ICWCKiPXFGVqfPc92uF1ZJuybJakn4rhH5ih3EeA47N6RbIP0VZbMLywZQt9McHCYvh8zB/qohLtO1CTd+NT6wIlj1BIXNTP7j4cE0kRxr+v9OL7aJeSE7zhYsDm7BoHriS7NfKILJQPqkC7DSWDyQdB04t89/1O/w1cDnyilFU='
};

const app = express();
app.post("/", line.middleware(config), (req, res) => {
  // console.log('post',req.body.events)
  Promise
  .all(req.body.events.map(handleEvent))
  .then((result) =>res.json(result));
});

const client = new line.Client(config);
function handleEvent(event) {
  if (event.type !== "message" || event.message.type !== "text") {
    return Promise.resolve(null);
  }

  //接收訊息
  let getMessage = event.message.text;
  let setMessage = '';
  // console.log('接收訊息',event.message.text)
  if(getMessage=='22'){
    setMessage = 11
  }
  if(getMessage=='33'){
    setMessage = 22
  }


  //送出訊息
  return client.replyMessage(event.replyToken, {
    type: "text",
    text: setMessage,
  });
}

// listen on port
const port = process.env.PORT || 8080 || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});