<template>
  <div class="user-wrapper">
    <div class="link">
      <router-link to="/login">LOGIN</router-link>
    </div>
    <div class="link">
      <router-link to="/signup">SIGN UP</router-link>
    </div>
    <div class="link">
      <router-link to="/rsvp">RSVP</router-link>
    </div>
    <div>
      <button @click="logout">LOG OUT</button>
    </div>
  </div>
</template>

<script>
export default {
 methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/login');
    }
  }
}
</script>

<style lang="scss">
  .user-wrapper {
    margin: auto;
    width: 100%;
    text-align: center;
    font-size: 30px;

    @include for-size(tablet) {    
      width: 85%;
      padding: 5px;
    }

    @include for-size(desktop) {    
      width: 70%;
      padding: 10px;
    }

    .link {
      display: block;
      padding: 5px;

      @include for-size(tablet) {    
        display: inline;
        padding: 10px;
      }

      @include for-size(desktop) {  
        display: inline;  
        padding: 20px;
      }
    }

    button {
      width: 200px;
      text-align: center;
    }
  }
</style>