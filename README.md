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
