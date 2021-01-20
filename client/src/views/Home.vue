<template>
  <div class="home-wrapper"> 
    <h1>Welcome</h1>
    <h1>Let's party!</h1>
    <p>Welcome to my dirty thirty party</p>
    <p>Place: Secret</p>
    <p>Time: Starts at 7 PM</p>
    <img class="icon" src="../assets/icons/cocktail.svg" alt="">
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
  .home-wrapper {
    text-align: center;

    h1 {
      &:hover {
        color: lighten($text-color, 20%);
      }
    }
  
  }

  img {
    width: 300px;
    height: auto;
  }

  p {
    font-size: 28px;
  }
</style>