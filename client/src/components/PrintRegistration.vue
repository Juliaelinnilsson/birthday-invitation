<template>
  <div> 
    <h2>WHO'S COMMING</h2>
    <table>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Allergy</th>
        <th>Other</th>
        <th>Delete</th>
      </tr>
      <tr v-bind:info="info" v-bind:key="i.id" v-for="i in info">
        <td>{{ i.firstname }}</td>
        <td>{{ i.lastname }}</td>
        <td>{{ i.allergy }}</td>
        <td>{{ i.other }}</td>
        <td><button @click="deleteGuest(info._id)"></button></td>
      </tr>
    </table>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
export default {
  name: 'Rsvp',
  data() {
    return {
      info: null
    }
  }, methods: {
    deleteGuest(_id){
      axios.delete(`http://localhost:3000/rsvp/${_id}`)
      .then(res => this.info = this.info.filter(i => i._id !== _id, res.data))
    }
  },
  mounted() {
    axios.get('http://localhost:3000/rsvp/')
    .then(res => this.info = res.data)
      .catch(err => console.log(err));
  },
}
</script>

<style lang="scss" scoped>
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;

    td, th {
      border: 1px solid $border-color;
      text-align: left;
      padding: 8px;
    }

    tr:nth-child(even) {
      background-color: rgba( $base-color, .2 );
    }
  }




</style>