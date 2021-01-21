<template>
  <div>
    <div>
      <h2>Let's hangout</h2>
    </div>
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
       if (localStorage.getItem('token') === null) {
        this.$router.push('/login');
      } 
  }
}
</script>

<style lang="scss" scoped>
  h2 {
    text-align: center;
    padding-bottom: 20px;
  }
</style>
