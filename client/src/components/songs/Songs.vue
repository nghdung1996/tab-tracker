<template>
  <div class="">
    <panel title="Songs">
      <router-link :to="{name: 'createSong'}" class="btn btn-primary mb-3" >Add new song</router-link>
      <div class="row justify-content-start">
        <div class="card border-success mb-3 mr-2" style="max-width: 18rem;" v-for="song in songs" :key="song.id">
          <div class="card-header">{{song.title}}</div>
          <div class="card-body">
            <img :src="song.albumImage" alt="">
            <h5>{{song.artist}}</h5>
            <router-link class="btn btn-info" :to="{name: 'ViewSong', params: { id: song.id }}">View Song</router-link>
          </div>
        </div>
      </div>
    </panel>
  </div>
</template>

<script>
import SongsServeice from '../../services/SongsServeice'
export default {
  data () {
    return {
      songs: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsServeice.index(value)).data
      }
    }
  }
}
</script>

<style>

</style>
