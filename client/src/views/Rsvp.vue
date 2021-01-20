<template>
 <div> 
    <Rsvp />
 </div>
</template>

<script>
/* eslint-disable */
import Rsvp from '../components/Rsvp'
export default {
  name: 'About',
  components: {
    Rsvp
  },  created() {
    //user is not authorized
    if (localStorage.getItem('token') === null) {
      this.$router.push('/login');
    } 
  }
}
</script>