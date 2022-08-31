const axios = require('axios')
const config = require('./config')
const axiosFn = async (params,url=config.googleSheelChickenUrl) => {
  try {
    return await axios.get(url,{params: params})
  } catch (error) {
    console.error(error)
  }
}
module.exports={
  axiosFn
}
