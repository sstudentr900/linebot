const express = require('express');
const rp = require('request-promise');


const SITE_NAME = '西屯';
const aqiOpt = {
    uri: "http://opendata2.epa.gov.tw/AQI.json",
    json: true
}; 

function readAQI(repos){
  let data;
  
  for (i in repos) {
      if (repos[i].SiteName == SITE_NAME) {
          data = repos[i];
          break;
      }
  }

  return data;
}

const app = express();
app.set('view engine', 'ejs');//引入views
app.get('/',function(req,res){
  rp(aqiOpt)
  .then(function (repos) {
    // console.log(repos);
    res.render('index', {AQI:readAQI(repos)});
  })
  .catch(function (err) {
    res.send("無法取得空氣品質資料～");
  });
});
app.listen(process.env.PORT || 3000, function () {
  console.log('[app已準備就緒]');
});// 沒有定義PORT 設置80