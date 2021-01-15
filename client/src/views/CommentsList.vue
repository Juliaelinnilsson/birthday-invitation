<template>
  <div id="app">
    <AddComment v-on:add-comment="addComment" />
    <Comments v-bind:comments="comments" v-on:del-comment="deleteComment" />
  </div>
</template>

<script>
import Comments from '../components/Comments';
import AddComment from '../components/AddComment';
import axios from 'axios';

export default {
  name: 'CommentsList',
  components: {
    Comments,
    AddComment
  },
  data() {
    return {
      comments: []
    }
  },
  methods: {
    deleteComment(id) {
      axios.delete(`http://localhost:3000/comments${id}`)
        .then(res => this.comments = this.comments.filter(res.data.id !== id))
        .catch(err => console.log(err));
    },
    addComment(newComment) {
      const { comment } = newComment;

      axios.post('http://localhost:3000/comments', {
        comment
      })
        .then(res => this.comments = [...this.comments, res.data])
        .catch(err => console.log(err));
    }
  },
  created() {
    axios.get('http://localhost:3000/comments')
      .then(res => this.comments = res.data)
      .catch(err => console.log(err));
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }

  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }

  .btn:hover {
    background: #666;
  }
</style>
