<template>
  <div>
    <form @submit.prevent="addComment">
      <input type="text" v-model="comment" name="comment" placeholder="Add Comment...">
      <button type="submit">Add comment</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddComment",
  data() {
    return {
      comment: ''
    }
  },
  methods: {
    addComment() {
      const newComment = {
        comment: this.comment
      }
      // Send up to parent
      this.$emit('add-comment', newComment);

      this.comment = '';
    }
  }
}
</script>

<style lang="scss" scoped>
  input {
    height: 50px;
    margin-bottom: 0;
    width: 98%;
  }

  button {
    text-align: end;
    width: 100%;
    padding-right: 5px;
  }
</style>


