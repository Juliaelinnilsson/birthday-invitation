<template>
 <div> 
    <form>
      <input type="text" class="form-control" placeholder="First Name" v-model="User.firstname">
      <input type="text" class="form-control" placeholder="Last Name" v-model="User.lastname">
      <input type="text" class="form-control" placeholder="Email" v-model="User.email">
      <input type="text" class="form-control" placeholder="Password" v-model="User.password">
      <button type="submit" class="btn btn-large btn-block btn-primary full-width" @click="addToAPI">Submit</button>
    </form>
 </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
export default {
  name: 'Home',
  data() {
    return {
      User: { firstname: '', lastname: '', email: '', password: ''},
    }
  }, methods: {
    addToAPI() {
      let newUser = {
        firstname: this.User.firstname,
        lastname: this.User.lastname,
        email: this.User.email,
        password: this.User.password
      }
      console.log(newUser);
      axios.post('http://localhost:3000/user/register', newUser)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}
</script>