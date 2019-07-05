import {config,fun1} from '/config.js'

class HTTP {
  request(params) {
    // url,data,method
    if(!params.method) {
      params.method = "GET"
    }
    wx.request({
      url: config.api_base_url + params.url,
      method:params.method,
      data:params.data,
      header:{
        'content-type' : 'application/json',
        'appkey' : config.appkey
      },
      success:(res) => {
        let code = res.statusCode
        if(code.startsWith('2')) {

        }
        else {

        }
      },
      fail:(err) => {

      }
    })
  }
}

export {HTTP}