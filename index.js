import request from 'request'
import { fibonacci, divivde,descript } from './cal.js'
console.log(fibonacci(100),descript)
const site_name = '美濃'
const opts = {
  url: 'http://opendata2.epa.gov.tw/AQI.json',
  json: true
}

//request
request.get(opts.url, (error, response, body) => {
  // console.log('error',error);
  if(!error && response.statusCode === 200){
    // console.log('body',body);
    let data;
    let jsons = JSON.parse(body);
    jsons.forEach(element => {
      // console.log('json',element.SiteName,site_name);
      if(element.SiteName==site_name){
        data = element
      }
    });
    console.log(data);
  }
})

//rp
// rp(opts).then(function(repos){
//   let data;
    
//   for (i in repos) {
//       if (repos[i].SiteName == site_name) {
//           data = repos[i];
//           break;
//       }
//   }
//   console.log(data);
// })


