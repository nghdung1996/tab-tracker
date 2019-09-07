import Api from '../services/Api'

export default {
  index (search) {
    return Api().get('/songs', {
      params: {
        search: search
      }
    })
  },
  createSong (credentials) {
    return Api().post('/songs', credentials)
  },
  viewSong (songId) {
    return Api().get(`/songs/${songId}`)
  },
  editSong (song) {
    return Api().put(`/songs/${song.id}`, song)
  }
}
