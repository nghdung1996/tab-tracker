import Api from '../services/Api'

export default {
  index () {
    return Api().get('/songs')
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
