<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <RegistrationUser msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import RegistrationUser from '@/components/RegistrationUser.vue'

export default {
  name: 'Home',
  components: {
    RegistrationUser
  }
}
</script>
