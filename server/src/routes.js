const AuthenticationController = require('../src/controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('../src/policies/AuthenticationControllerPolicy')
const SongsController = require('../src/controllers/SongsController')

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
  app.put('/songs/:songId', SongsController.editSong)
}
