<template>
  <div>
    <panel title="Search">
      <input type="text" class="form-control" v-model="search" placeholder="Search on the song, artist, genre, album">
    </panel>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search: _.debounce(async function (value) {
      console.log(value)
      const route = {
        name: 'Songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}

</script>

<style>

</style>
