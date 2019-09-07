<template>
  <div class="">
    <song-search-panel/>
    <songs/>
  </div>
</template>

<script>
import Songs from '../songs/Songs'
import SongSearchPanel from '../songs/SongSearchPanel'
import SongsServeice from '../../services/SongsServeice'
export default {
  data () {
    return {
      songs: []
    }
  },
  async mounted () {
    this.songs = (await SongsServeice.index()).data
  },
  components: {
    Songs,
    SongSearchPanel
  }
}
</script>

<style>

</style>
