<template>
  <div class="photo-wrapper">
    <AddPhoto />
  </div>
</template>

<script>
import AddPhoto from '../components/AddPhoto'
export default {
  name: 'Photos',
  components: {
    AddPhoto
  }, created() {
    //user is not authorized
    if (localStorage.getItem('token') === null) {
      this.$router.push('/login');
    } 
  }
}
</script>

<style lang="scss" scoped>
 
</style>