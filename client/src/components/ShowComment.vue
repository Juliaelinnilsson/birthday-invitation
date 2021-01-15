<template>
  <div class="comments">
    <span>
      {{comment.comment}}
    </span>
  </div>
</template>

<script>
export default {
  name: "ShowComment",
  props: ["comment"],
}
</script>

<style lang="scss" scoped>
  .comments {
    margin-top: 10px;
  }
</style>

