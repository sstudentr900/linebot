const express = require('express');// 引用express

const {google} = require('googleapis');

async function getAuthSheets(){
  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "http://www.googleapis.com/auth/spreadsheets"
  })
  const client = await auth.getClient();
  const googleSheets = google.sheets({
    version: 'v4',
    auth: client
  });
  const spreadsheetId = "1q9gzEYVoRP2Lydoa3V7mA9K8LL13vr8ButeJrEDsIvY"
  return {
    auth,
    client,
    googleSheets,
    spreadsheetId
  }
}

const app = express(); //express 執行
app.get('/metadata',async function(req,res){
  const { auth,client,googleSheets,spreadsheetId } = await getAuthSheets();
  const metadata = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId
  })
  console.log(metadata)
  res.send(metadata)
  // res.send('metadata')
})
app.get('/',function(req,res){
  res.send('hello word')
});
app.get('/aa',function(req,res){
  res.send('aa')
});

// app.listen(process.env.PORT || 80, function () {
app.listen(3001, function () {  
  console.log(`已準備就緒 http://localhost:${3001}`);
});