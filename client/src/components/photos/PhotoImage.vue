<template>
  <div class="photo-item">
    <p>
      {{photo.photo}}
      <button @click="$emit('del-photo', photo.id)" class="del">x</button>
      </p>
  </div>
</template>

<script>
export default {
  name: "PhotoImage",
  props: ["photo"],

}
</script>

<style scoped>
  .photo-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
  }

  .del {
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
  }
</style>

