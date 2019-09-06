<template>
  <div>
    <div class="row">
      <div class="col-12 col-md-6">
        <panel title="Song metadata">
          <h5>{{song.title}}</h5>
          <h6>{{song.artist}}</h6>
          <h6>{{song.genre}}</h6>
          <img :src="song.albumImage" alt=""><br>
          <router-link :to="{name: 'editSong', params: {songId: `song.id`}}" class="btn btn-info mt-2">Edit Song</router-link>
        </panel>
      </div>
      <div class="col-12 col-md-6">
        <panel title="Youtube Video">
        </panel>
      </div>
    </div>
  </div>
</template>
<script>
import Panel from '../components/Panel'
import SongsServeice from '../services/SongsServeice'
export default {
  data () {
    return {
      song: {
      }
    }
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.id
      this.song = (await SongsServeice.viewSong(songId)).data
      console.log(this.song)
    } catch (error) {
      console.log(error)
    }
  },
  components: {
    Panel
  }
}
</script>

<style>

</style>
