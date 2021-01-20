<template>
  <div>
    <form @submit.prevent="onUpload">
      <input style="display: none" type="file" @change="onFileSelected" ref="fileInput">
      <button class="btn-small" @click="$refs.fileInput.click()">Pick File</button>
      <button type="submit" class="btn-small">upload</button>
    </form>
    <div>
      <h2>hej</h2>
      <div v-bind:files="files" v-bind:key="file.id" v-for="file in files">
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
        fd.append('file', this.selectedFile, this.selectedFile.name)
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
  img {
    width: 100px;
  }
</style>