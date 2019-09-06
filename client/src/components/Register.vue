<template>
  <div class="col-sm-6 offset-sm-3 form">
    <h2>Register</h2>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
    </div>
    <div v-html="error"></div>
    <button type="submit" class="btn btn-primary" @click="register">Sign Up</button>
  </div>
</template>
<script>
import AuthenticationService from '../services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({name: 'Songs'})
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style>
  .form {
    border: 1px solid rgb(199, 242, 248);
    padding: 10px;
  }
</style>
