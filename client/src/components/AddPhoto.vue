<template>
  <div>
    <h2>Say cheese!</h2>
    <form @submit.prevent="onUpload">
      <div class="file-upload">
        <input style="display: none" type="file" @change="onFileSelected" ref="fileInput">
        
        <button class="btn-big" @click="$refs.fileInput.click()">Pick File</button>
        <button type="submit" class="btn-big">upload</button>
      </div>
      
    </form>
    <div class="image-container">
      <div class="image-wrapper" v-bind:files="files" v-bind:key="file.id" v-for="file in files">
        <img v-bind:src="path + file.filename" /> 
      </div>
    </div>
  </div>
</template>
  
<script>
  import axios from 'axios';

  export default {
    name: 'AddPhoto',
    data(){
      return {
        files: null,
        selectedFile: null,
        path: 'http://localhost:3000/image/'
      }
    }, methods: {
      onFileSelected(event) {
        this.selectedFile = event.target.files[0]
      },
      onUpload() {
        const fd = new FormData();
        fd.append('file', this.selectedFile)
        axios.post('http://localhost:3000/upload', fd)
        .then(res => {
          console.log(res)
        })
      }
    }, mounted() {
    axios.get('http://localhost:3000/photos/files')
    .then(res => this.files = res.data)
    .catch(err => console.log(err));
  },
  }
    
  
</script>

<style lang="scss">
  h2 {
    text-align: center;
    padding-bottom: 20px;
    
  }

  .file-upload {
    text-align: center;

    button {
      width: 50%;
      
      @include for-size(tablet) {    
        width: 40%;
      }

      @include for-size(desktop) {    
        width: 20%;
      }
    }
  }

  .image-container {
    padding-top: 20px;
    width: 100%;

    .image-wrapper {
      position: relative;
      width: 50%;
      display: inline;

      img {
        width: 100%;

        @include for-size(tablet) {    
          width: 49%;
          padding: 3px;
        }

        @include for-size(desktop) {    
          width: 32%;
          padding: 5px;
        }

      }
    }

  }

  
</style>