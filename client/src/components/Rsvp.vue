<template>
  <div> 
    <h2 class="text-center">Registration</h2>
    <form>  
      <label for="firstname">Firstname</label>
      <input type="text" name="firstname" v-model="Guest.firstname">
      <label for="lastname">Lastname</label>
      <input type="text" name="lastname" v-model="Guest.lastname">
      <label for="allergy">Allergy</label>
      <input type="text" name="allergy" v-model="Guest.allergy">
      <label for="other">Anything else i need to know?</label>
      <input type="text" name="other" v-model="Guest.other"><br><br>
      <div class="button-wrapper">
        <button type="submit" class="btn-small" @click="registerGuest">Submit</button>
      </div>
    </form>
    <div v-bind:info="info" v-bind:key="i.id" v-for="i in info">
      <p >{{i.firstname}}</p>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
export default {
  name: 'Rsvp',
  data() {
    return {
      info: null,
      Guest: { firstname: '', lastname: '', allergy: '', other: ''},
    }
  }, methods: {
    registerGuest() {
      let newGuest = {
        firstname: this.Guest.firstname,
        lastname: this.Guest.lastname,
        allergy: this.Guest.allergy,
        other: this.Guest.other
      }
      axios.post('http://localhost:3000/rsvp/', newGuest)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    axios.get('http://localhost:3000/rsvp/')
    .then(res => this.info = res.data)
    .catch(err => console.log(err));
  },
}
</script>

<style lang="scss" scoped>
  .button-wrapper{
    text-align: center;
  }
</style>