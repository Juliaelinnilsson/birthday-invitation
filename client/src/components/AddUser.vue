<template>
  <div class="signup-wrapper"> 
    <form @submit.prevent="addToAPI">   
      <h1>Sign up</h1>
      <label for="Firstnam">Firstname</label>
      <input type="text" name="firstname" v-model="User.firstname">
      <label for="Lastname">Lastname</label>
      <input type="text" name="lastname" v-model="User.lastname">
      <label for="Email">Email</label>
      <input type="text" name="email" v-model="User.email">
      <label for="Password">Password</label>
      <input type="text" name="password" v-model="User.password">
      <div>
        <button type="submit" class="btn-big">Submit</button>
      </div>
      <img class="icon" src="../assets/icons/cocktail.svg" alt="coctail icon">
    </form>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
export default {
  name: 'AddUser',
  data() {
    return {
      User: { firstname: '', lastname: '', email: '', password: ''},
    }
  }, methods: {
    addToAPI() {
      console.log('jag klickade')
      let newUser = {
        firstname: this.User.firstname,
        lastname: this.User.lastname,
        email: this.User.email,
        password: this.User.password
      } 
      console.log(newUser);
      axios.post('http://localhost:3000/user/register', newUser)
        .then((response) => {
          this.$router.push("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

}
</script>

<style lang="scss" scoped>
    .signup-wrapper {
    margin: auto;
    width: 70%;
    padding: 10px;
    text-align: center;
    font-size: 30px;
   
   .icon {
     padding-top: 30px;
     height: 200px;
   }
  }
</style>