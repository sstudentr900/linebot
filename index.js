const express = require("express");
const configs = require("./config");
import {axiosFn} from './axios_module'
const line = require("@line/bot-sdk");

const app = express();
const port = process.env.PORT || 80 || 3000;
const config = {
  // channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
  // channelSecret: process.env.LINE_CHANNEL_SECRET,
  channelSecret: configs.channelSecret,
  channelAccessToken: configs.channelAccessToken
  // channelSecret: '6aecda9fc9f58ddb9e452f977c80bbb1',
  // channelAccessToken: 'ICWCKiPXFGVqfPc92uF1ZJuybJakn4rhH5ih3EeA47N6RbIP0VZbMLywZQt9McHCYvh8zB/qohLtO1CTd+NT6wIlj1BIXNTP7j4cE0kRxr+v9OL7aJeSE7zhYsDm7BoHriS7NfKILJQPqkC7DSWDyQdB04t89/1O/w1cDnyilFU='
};
const client = new line.Client(config);
let queryData = ''

const randomFn = function(length){
  return Math.floor(Math.random()*length)
}

app.post("/", line.middleware(config), (req, res) => {
  const type = req.body.events[0].message.type
  const replyToken = req.body.events[0].replyToken
  if(type !== 'text')return null; //type no text
  let getMessage = req.body.events[0].message.text

  //自訂關鍵字
  if(~getMessage.indexOf('阿雞記住')){
    let getMessages = getMessage.split(',')//[ '阿雞記住', '1', '2' ]
    //查詢有無該關鍵字
    let index = queryData.findIndex(elements => elements[0] == getMessages[1]); 
    if(index>=0){
      //新增在已知 array 
      queryData[index].push(getMessages[2])
    }else{
      //新增在後面 array
      queryData.push([getMessages[1],getMessages[2]])
    }
  
    //更新到appScript
    let value = queryData.map(elements => elements.toString());//[[1,2],[1,2]]
    value = value.join('/')//'1,2/1,2'
    axiosFn({action: 'updateData',value:value})
    .then(res=>queryData = res.data)
    client.replyMessage(replyToken, {
      type: 'text',
      text: '好的，我記住了',
    });
  }else if(~getMessage.indexOf('阿雞要去哪')){  
    axiosFn({action: 'queryData'},configs.googleSheelShopUrl)
    .then(res=>{
      let shopData = res.data
      let shopName =  shopData[randomFn(shopData.length+1)]
      // console.log(shopName)
    })
    // client.replyMessage(replyToken, {
    //   type: 'text',
    //   text: '不告訴你ㄌㄟ~',
    // });
    client.replyMessage(replyToken, {
      type: 'location',
      title: 'my location',
      address: "〒150-0002 東京都渋谷区渋谷２丁目２１−１",
      latitude: 35.65910807942215,
      longitude: 139.70372892916203
    });
  }else{
    //亂數取資料
    queryData.forEach(elements => {
      if(elements[0]==getMessage){
        client.replyMessage(replyToken, {
          type: 'text',
          text: elements[randomFn(elements.length+1)],
        });
      }
    });
  }
});


// listen on port
app.listen(port, () => {
  console.log(`http://localhost:${port}`);

  //get appScript data
  axiosFn({action: 'queryData'}).then(res=>queryData = res.data)
});