<template>
  <div class="row">
    <div class="col-md-4">
      <panel title="Metadata">
        <div class="form-group">
          <label>Title</label>
          <input type="text" class="form-control" placeholder="Title" v-model="song.title">
        </div>
        <div class="form-group">
          <label for="artist">Artist</label>
          <input type="text" class="form-control" id="artist" placeholder="Artist" v-model="song.artist">
        </div>
        <div class="form-group">
          <label for="genre">Genre</label>
          <input type="text" class="form-control" id="genre" placeholder="Genre" v-model="song.genre">
        </div>
        <div class="form-group">
          <label for="album">Album</label>
          <input type="text" class="form-control" id="album" placeholder="Album" v-model="song.album">
        </div>
        <div class="form-group">
          <label for="albumImage">Album Image Url</label>
          <input type="text" class="form-control" id="albumImage" placeholder="Album Image Url" v-model="song.albumImage">
        </div>
        <div class="form-group">
          <label for="youtubeID">Youtube Id</label>
          <input type="text" class="form-control" id="youtubeID" placeholder="YoutubeID" v-model="song.youtubeId">
        </div>
      </panel>
    </div>
    <div class="col-md-8">
      <panel title="Song Structure">
        <div class="form-group">
          <label>Tab</label>
          <textarea class="form-control" rows="7" v-model="song.tab"></textarea>
        </div>
        <div class="form-group">
          <label>Lyrics</label>
          <textarea class="form-control" rows="7" v-model="song.lyrics"></textarea>
        </div>
        <button class="btn btn-primary mt-3" @click="editSong">Edit Song</button>
      </panel>
    </div>
  </div>
</template>

<script>
import SongsServeice from '../services/SongsServeice'
export default {
  data () {
    return {
      song: {
        title: '',
        artist: '',
        genre: '',
        album: '',
        albumImage: '',
        youtubeId: '',
        tab: '',
        lyrics: ''
      }
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.id
    this.song = (await SongsServeice.viewSong(songId)).data
    console.log(this.song)
  },
  methods: {
    async editSong () {
      try {
        await SongsServeice.editSong(this.song)
        this.$swal.fire({
          title: 'Are you sure?',
          // text: "You won't be able to revert this!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, save it!'
        }).then((result) => {
          if (result.value) {
            this.$router.push({name: 'Songs'})
            this.$swal.fire({
              position: 'top-end',
              type: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 500
            })
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>

</style>
