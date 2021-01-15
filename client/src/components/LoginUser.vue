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
      console.log(loginUser);
      axios.post('http://localhost:3000/user/login', loginUser)
        .then((response) => {
          this.$router.push("/rsvp");
        })
        .catch((error) => {
         this.errormsg = error.response.data
        }); 
    }
  }
}
</script>

<style lang="scss">

  
</style>