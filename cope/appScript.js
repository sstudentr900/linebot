function doGet(e) {
  // {
  //   action: "queryData",
  // },

  //id->打開google excel,URL:https://../d/【excel ID】/edit.. 
  var SpreadSheet = SpreadsheetApp.openById("1q9gzEYVoRP2Lydoa3V7mA9K8LL13vr8ButeJrEDsIvY");

  //取得 第一個表單
  var Sheet = SpreadSheet.getSheets()[0];

  //取得ajax的data 
  var params = e.parameter; 
  var action  = params.action;

  // Logger.log("action: %s", action);


  //預設返回值
  var result= [];

  //判斷動作
  if (action === 'queryData') {
    result = queryData(Sheet, params);
  } 
  if (action === 'addData'){
    result = addData(Sheet, params);
  } 
  if (action === 'updateData'){
    result = updateData(Sheet, params);
  } 

  //回傳json
  return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
}
function queryData(Sheet) {
  //取得excel
  var array = Sheet.getDataRange().getValues(); //[[a,1,2,3],[b,1,2,3]]
  // Logger.log("data: %s", array);
  return array;
}

function addData(Sheet,params) {
  //{
  //  action: "addData",
  //  array:'5,3,55'
  //},

  //字串轉數組
  var getArray = params.value.split(',');
  Logger.log("data: %s", getArray);
  //存入sheet
   Sheet.getRange(getArray[0],getArray[1]).setValue(getArray[2])

  return [true];
}

function updateData(Sheet,params) {
  //清除全部Sheet
  Sheet.clear();

  //存入sheet
  let string = params.value; //'啾啾,愛你/凹凹,凸凸/掰掰,你不要走/早安,都幾點了/晚安,喔喔困'
 
  let arrays = string.split('/'); //['啾啾,愛你','凹凹,凸凸']

  arrays.forEach((elements,index) => {
    elements.split(',').forEach((elem,inde)=>{
      if(elem){
        Sheet.getRange(index+1, inde+1).setValue(elem) //x y v 
      }
    })
  });
  //回傳json
  return queryData(Sheet);
}

