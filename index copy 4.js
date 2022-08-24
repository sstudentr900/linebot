import {axiosFn} from './axios_module'
const updateData = async () => {
  var values = JSON.stringify({
    action: 'queryData',
    value: [['啾啾','愛你'],['凹凹','凸凸'],['掰掰','你不要走'],['早安','都幾點了'],['晚安,喔喔困']],
  });
  const datas = await axiosFn(values)
  console.log(datas)
}
const getData = async () => {
  const datas = await axiosFn({action: 'queryData'})
  // console.log(datas)
}
// getData()
updateData()