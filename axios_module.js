const axios = require('axios')
const config = require('./config')
const axiosFn = async (params) => {
  try {
    return await axios.get(config.googleSheelUrl,{params: params})
  } catch (error) {
    console.error(error)
  }
}
module.exports={
  axiosFn
}
