
// request es6 套件引入
//https://ithelp.ithome.com.tw/articles/10237085
import request from 'request'
const site_name = '美濃'
const url =  'http://opendata2.epa.gov.tw/AQI.json'

//request
request.get(url, (error, response, body) => {
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
