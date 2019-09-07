import Api from '../services/Api'

export default {
  index (params) {
    return Api().get('/bookmarks', {
      params: params
    })
  },
  bookmark (params) {
    return Api().post('/bookmarks', {
      params: params
    })
  }
}
