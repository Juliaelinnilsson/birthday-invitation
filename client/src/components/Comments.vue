<template>
  <div class="comment-wrapper">
    <div class="test" v-bind:key="comment.id" v-for="comment in comments">
      <ShowComment v-bind:comment="comment" v-on:del-comment="$emit('del-comment', comment.id)" />
    </div>
  </div>
</template>

<script>
import ShowComment from './ShowComment';

export default {
  name: "Comments",
  components: {
    ShowComment
  },
  props: ["comments"]
}
</script>

<style lang="scss" scoped>
  .comment-wrapper {
    margin-top: 30px;

    .test {
      border: $border-color 1px solid;
      padding-left: 5px;
      padding-right: 5px;
      margin-bottom: 10px;
    }
  }
</style>

