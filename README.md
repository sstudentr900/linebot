## line bot developers
  https://developers.line.biz/console/channel/1654921355/messaging-api
  https://developers.line.biz/console/?status=success
  https://developers.line.biz/console/

## line bot sdk nodejs api
https://line.github.io/line-bot-sdk-nodejs/api-reference/middleware.html#usage
https://github.com/line/line-bot-sdk-nodejs/blob/next/examples/echo-bot/index.js

## Node + Heroku 打造 Line 聊天機器人
https://medium.com/rd-tw/node-heroku-%E6%89%93%E9%80%A0-line-%E8%81%8A%E5%A4%A9%E6%A9%9F%E5%99%A8%E4%BA%BA-d81fe6dba1f

## 超簡單的 line bot 起手式 feat. node.js + Heroku server
https://medium.com/@debbyji/%E8%B6%85%E7%B0%A1%E5%96%AE%E7%9A%84-line-bot-%E8%B5%B7%E6%89%8B%E5%BC%8F-feat-node-js-heroku-server-b2e5bcccab5b

## 30 天教你如何玩弄 Line bot API
https://ithelp.ithome.com.tw/articles/10216853

## 使用 Node.js 製作一個示例回復機器人
https://developers.line.biz/en/docs/messaging-api/nodejs-sample/#start-developing

##  LINE Notify 推播通知
https://ithelp.ithome.com.tw/articles/10233841

## Chatbot 框架 - 「Bottender」
https://ithelp.ithome.com.tw/articles/10216028
## 從零開始在 Windows 使用 Node.js 打造專屬於你的 LINE Bot 聊天機器人 「Bottender」
https://etrexkuo.medium.com/%E5%BE%9E%E9%9B%B6%E9%96%8B%E5%A7%8B%E5%9C%A8-windows-%E4%BD%BF%E7%94%A8-node-js-%E6%89%93%E9%80%A0%E5%B0%88%E5%B1%AC%E6%96%BC%E4%BD%A0%E7%9A%84-line-bot-%E8%81%8A%E5%A4%A9%E6%A9%9F%E5%99%A8%E4%BA%BA-173ac0f6be92


## node
```
node fileName.js  node 執行
```

## npm 
```
npm up XXX         更新模块 
npm rm XXX         删除模块 
npm uninstall XX   删除模块
npm uninstall -g XX    删除全局模块
npm install xxx@0.0.0  安裝指定版本
npm install xxx    安裝但不寫入package.json
npm install xxx  --save  安裝寫入package.json的dependencies
npm install xxx  --save-dev  安裝寫入package.json的devDependencies
```
## express 佈署

## Heroku 佈署

## 除錯
* developers -> Webhook URL -> verify 驗證是成功 
![](https://miro.medium.com/max/1400/1*JBWf7FypJh6eFnyRczvs6w.png) 
* https://ithelp.ithome.com.tw/articles/10219099

## 接收訊息
https://github.com/clarencetw/line-bot/blob/bf6482e9f0fc84416f0ea0e9790535a8eaf69ffb/routes/line.js#L62-L393

## Location message
https://ithelp.ithome.com.tw/articles/10219503
```
client.replyMessage(event.replyToken, 
    {
        type: 'location',
        title: 'my location',
        address: "〒150-0002 東京都渋谷区渋谷２丁目２１−１",
        latitude: 35.65910807942215,
        longitude: 139.70372892916203
    }
)
```
## nodemon這個套件，可以在每次存檔後，會自動部屬自動執行程式
```
  npm install -g nodemon
```
package.json中也要加入對應的script，才能以npm方式執行
![](https://ithelp.ithome.com.tw/upload/images/20200914/20110911KKGGheNVzu.png)

## node 可以使用es6 import的寫法引入套件
https://ithelp.ithome.com.tw/articles/10237085

## 自訂模組輸出
https://ithelp.ithome.com.tw/articles/10237782

## REST API
* 使用http建立CRUD rest api
https://ithelp.ithome.com.tw/articles/10238506
* 使用Express套件建立REST API
https://ithelp.ithome.com.tw/articles/10240749
