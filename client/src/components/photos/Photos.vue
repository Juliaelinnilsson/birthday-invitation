<template>
  <div>
    <div v-bind:key="photo.id" v-for="photo in photos">
      <ShowComment v-bind:photo="photo" v-on:del-photo="$emit('del-photo', photo.id)" />
    </div>
  </div>
</template>

<script>
import photoImage from './PhotoImage';

export default {
  name: "Photos",
  components: {
    photoImage
  },
  props: ["photos"]
}
</script>

<style scoped>

</style>

