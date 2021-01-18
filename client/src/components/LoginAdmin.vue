<template>
  <div>
    <form @submit.prevent="admin">   
      <h1>LOGGA IN</h1>
      <input type="text" class="" placeholder="Email" v-model="User.email">
      <input type="text" class="" placeholder="Password" v-model="User.password">
      <button type="submit" value="Submit" class="btn btn-primary">Admin</button>
    </form> 
    <p>{{ errormsg }}</p>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
export default {
  name: 'AdminUser',
  data() {
    return {
      errormsg: '',
      User: { email: '', password: ''},
    }
  }, methods: {
    admin() {
      let adminUser = {
        email: this.User.email,
        password: this.User.password
      }
      console.log(adminUser);
      axios.post('http://localhost:3000/admin/login', adminUser)
        .then((response) => {
          this.$router.push("/admin");
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