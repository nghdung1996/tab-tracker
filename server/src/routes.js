const AuthenticationController = require('../src/controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('../src/policies/AuthenticationControllerPolicy')
const SongsController = require('../src/controllers/SongsController')
const BookmarksController = require('../src/controllers/BookmarksController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/login',
    AuthenticationController.login),
  
  // Songs

  app.get('/songs', SongsController.index),
  app.post('/songs', SongsController.createSong),
  app.get('/songs/:songId', SongsController.viewSong),
  app.put('/songs/:songId', SongsController.editSong),

  // Bookmarks
  app.get('/bookmarks', BookmarksController.index),
  app.post('/bookmarks', BookmarksController.bookmark)
}
