<template>
  <div>
    <form @submit.prevent="addPhoto">
      <input type="file" @change="onFileSelected" name="photo" placeholder="Add photo...">
      <botten type="submit" value="Submit" class="btn btn-success">Add photo</botten>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddPhoto",
  data() {
    return {
      photo: ''
    }
  },
  methods: {
     onFileSelected(event){
      this.selectedFile = event.target.files[0]
    },
    addComment() {
      const newPhoto = {
        photo: this.photo
      }
      // Send up to parent
      this.$emit('add-photo', newPhoto);

      this.photo = '';
    }
  }
}
</script>

<style scoped>
  form {
    display: flex;
  }

  input[type="text"] {
    flex: 10;
    padding: 5px;
  }

  input[type="submit"] {
    flex: 2;
  }
</style>


