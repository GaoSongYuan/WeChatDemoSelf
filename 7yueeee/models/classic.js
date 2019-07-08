import {HTTP} from '../util/http.js'

class Classic extends HTTP {
  getLatest() {
    http.request({
      url: 'classic/latest',
      success: (res) => {
        console.log(res)
      }
    })
  }
}