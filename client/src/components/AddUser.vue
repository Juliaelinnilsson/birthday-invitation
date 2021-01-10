<template>
  <div>
    <form @submit.prevent="addUser">
      <input type="text" v-model="firstname" name="firstname" placeholder="firstname">
      <input type="text" v-model="lastname" name="lastname" placeholder="lastname">
      <input type="text" v-model="email" name="email" placeholder="email">
      <input type="text" v-model="password" name="password" placeholder="password">
      <input type="submit" value="Submit" class="btn">
    </form>
  </div>
</template>

<script>
export default {
  name: "AddUser",
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    }
  },
  methods: {
    addUser() {
      const newUser = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password
      }
      // Send up to parent 
      this.$emit('add-user', newUser)

      this.firstname = '';
      this.lastname = '';
      this.email = '';
      this.password = '';
    }
  },
}
</script>