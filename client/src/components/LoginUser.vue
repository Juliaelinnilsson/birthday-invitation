<template>
  <div class="login-wrapper">
    <form @submit.prevent="login">   
      <h1>LOGG IN</h1>
      <label for="email">Email</label>
      <input type="text" name="email" v-model="email">
      <label for="password">Password</label>
      <input type="text" name="password" v-model="password">
      <button type="submit" value="Submit" class="btn-big">Login</button>
    </form> 
    <br>
    <a href="/register">Register account here</a>
    <h1>{{ errormsg }}</h1>
    <img class="icon" src="../assets/icons/cocktail.svg" alt="">
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
      email: '', 
      password: ''
    }
  }, methods: {
    login() {
      let loginUser = {
        email: this.email,
        password: this.password
      }
      
      axios.post('http://localhost:3000/user/login', loginUser)
        .then(res => {
          // if successfull
          if (res.status === 200) {
            localStorage.setItem('token', res.data.token);
            console.log(res.data.token)
            this.$router.push('/');
          }
        }, err => {
          console.log(err.response);
          this.error = err.response.data.error
        })
        .catch(err => console.log(err));
    }
  }
}
</script>

<style lang="scss">
  .login-wrapper {
    margin: auto;
    width: 70%;
    padding: 10px;
    text-align: center;
    font-size: 30px;
   
   .icon {
     padding-top: 40px;
     height: 200px;
   }
  }
  
</style>