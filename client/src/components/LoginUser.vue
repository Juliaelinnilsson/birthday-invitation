<template>
  <div>
    <form @submit.prevent="login">   
      <h1>LOGGA IN</h1>
      <input type="text" class="" placeholder="Email" v-model="User.email">
      <input type="text" class="" placeholder="Password" v-model="User.password">
      <button type="submit" value="Submit" class="btn btn-primary">Login</button>
    </form> 
    <h1>{{ errormsg }}</h1>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
export default {
  name: 'LoginUser',
  data() {
    return {
      errormsg: '',
      User: { email: '', password: ''},
    }
  }, methods: {
    login() {
      let loginUser = {
        email: this.User.email,
        password: this.User.password
      }
      
      axios.post('http://localhost:3000/user/login', loginUser)
        .then(res => {
          // if successfull
          if (res.status === 200) {
            localStorage.setItem('token', res.data.token);
            this.$router.push('/');
          }
        }, err => {
          console.log(err.response);
          this.error = err.response.data.error
        })
    }
  }
}
</script>

<style lang="scss">

  
</style>