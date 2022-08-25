function debug() {

  // queryData
  // var Result = doGet({
  //   parameter:  {
  //     action: "queryData",
     
  //   },
  // });



  //addData
  // var Result = doGet({
  //   //array:X,Y,值
  //   parameter:  {
  //     action: "addData",
  //     value:'5,3,44'
  //   },
  // });

  //updateData
  var Result = doGet({
    parameter: {
      action: "updateData",
      value: '啾啾,愛你/凹凹,凸凸/掰掰,你不要走/早安,都幾點了/晚安,喔喔困'
    }
  });

  Logger.log("Result: %s", Result);
}