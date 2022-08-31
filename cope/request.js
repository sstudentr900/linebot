const request = require('request');//請求
const rp = require('request-promise');//promise
const site_name = '美濃'
const opts = {
  url: 'http://opendata2.epa.gov.tw/AQI.json',
  json: true
}

//request
// request(opts,function(error,response,body){
//   // console.log('error',error);
//   if(!error && response.statusCode === 200){
//     // console.log('body',body);
//     let data;
//     for(i in body){
//       if(body[i].SiteName==site_name){
//           data = body[i]
//           break;
//       }
//     }
//     console.log(data);
//   }
// })

//rp
rp(opts).then(function(repos){
  let data;
    
  for (i in repos) {
      if (repos[i].SiteName == site_name) {
          data = repos[i];
          break;
      }
  }
  console.log(data);
})


