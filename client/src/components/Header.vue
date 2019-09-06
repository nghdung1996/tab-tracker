<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link :to="{name: 'Home'}" class="navbar-brand">Tab Tracker</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link v-if="$store.state.isUserLoggedIn" tag="li" class="nav-item" :to="{name: 'Songs'}"><a class="nav-link">Songs</a></router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <router-link v-if="!$store.state.isUserLoggedIn" tag="li" class="nav-item" :to="{name: 'Login'}"><a class="nav-link">Login</a></router-link>
          <router-link v-if="!$store.state.isUserLoggedIn" tag="li" class="nav-item" :to="{name: 'Register'}"><a class="nav-link">Sign Up</a></router-link>
          <li class="nav-item" v-if="$store.state.isUserLoggedIn">
            <a class="nav-link" @click="logout" style="cursor:pointer">Log Out</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
