import {axiosFn} from './axios_module'
const updateData = async () => {
  // var values = {
  //   action: 'updateData',
  //   value: '啾啾,愛你,唉呦,好害羞/凹凹,凸凸/掰掰,你不要走,哭哭,88/早安,都幾點了,早安/晚安,喔喔困,晚安',
  // };
  var values = {
    action: 'queryData'
  }
  const datas = await axiosFn(values)
  console.log(datas)
}
updateData()



//
// const axios = require('axios')
// const URl = 'https://script.google.com/macros/s/AKfycbxQIzpm0CQY3_iBAH8_cwG3Bv8qZbLu7THt5EsnrtmnSODLR_g5CspFOo6EMxNSgXI4/exec'

//queryData
// const params = {
//   action: 'queryData'
// }
// axios.get(URl,{params: params})
// .then((response)=>{
//   console.log(response)
// })



// updateData
// const params = {
//   action: 'updateData',
//   value: '啾啾,愛你,唉呦,好害羞/凹凹,凸凸/掰掰,你不要走,哭哭/早安,都幾點了,早安/晚安,喔喔困,晚安'
// }
// axios.get(URl,{params: params})
// .then((response)=>{
//   console.log(response)
// })



// data try
function dataTry(){
  let data = response.data//[[1,2],[1,2]]

  //1.([[1,2],[1,2]]) try (1,2/1,2)
  data.map(elements => elements.toString());
  let newData = data.join('#')//1,2#1,2

  //2.(1,2/1,2) try (x y v)
  // let arrays = newData.split('/')
  // console.log(arrays)
  // arrays.forEach((elements,index) => {
  //   elements.split(',').forEach((elem,inde)=>{
  //     if(elem){
  //       console.log(index,inde,elem) //x y v 
  //     }
  //   })
  // });
}