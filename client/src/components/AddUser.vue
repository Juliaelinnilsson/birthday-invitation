<template>
 <div> 
    <form @submit.prevent="addToAPI">   
      <input type="text" placeholder="First Name" v-model="User.firstname">
      <input type="text" placeholder="Last Name" v-model="User.lastname">
      <input type="text" placeholder="Email" v-model="User.email">
      <input type="text" placeholder="Password" v-model="User.password">
      <div class="button-wrapper">
        <button type="submit" class="btn-big">Submit</button>
      </div>
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
  .button-wrapper{
    justify-content: center;
  }
</style>