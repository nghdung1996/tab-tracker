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
          <button class="btn btn-info mt-2" @click="setAsBookmark" v-if="isUserLoggedIn">Bookmark</button>
          <button class="btn btn-info mt-2" @click="unsetBookmark" v-if="isUserLoggedIn">Unbookmark</button>
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
import SongsServeice from '../services/SongsServeice'
import {mapState} from 'vuex'
import BookmarkService from '../services/BookmarkService'
export default {
  data () {
    return {
      song: {},
      isBookmarked: null
    }
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.id
      this.song = (await SongsServeice.viewSong(songId)).data
      console.log(this.song)
      const bookmark = (await BookmarkService.index({
        songId: this.song.id,
        userId: this.$store.state.user
      })).data
      this.isBookmarked = !!bookmark
      console.log(this.isBookmarked)
    } catch (error) {
      console.log(error)
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  methods: {
    async setAsBookmark () {
      const bookmark = (await BookmarkService.bookmark({
        songId: this.song.id,
        userId: this.$store.state.user
      })).data
      console.log(bookmark)
    },
    unsetBookmark () {
      console.log('Unbookmark')
    }
  }
}
</script>

<style>

</style>
