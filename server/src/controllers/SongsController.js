const {Song} = require('../models')
module.exports = {
  async index (req, res){
    try {
      const songs = await Song.findAll({
        limit: 10
      })
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the songs'
      })
    }
  },
  async createSong (req, res){
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the song'
      })
    }
  },
  async viewSong (req, res){
    try {
      const song = await Song.findByPk(req.params.songId)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the song'
      })
    }
  },
  async editSong (req, res){
    try {
      const song = await Song.update(req.body,{
        where: {
          id: req.params.songId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the song'
      })
    }
  },
}