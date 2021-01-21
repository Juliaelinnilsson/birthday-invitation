<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">
        <div class="icon-wrapper">
          <img class="icon" src="./assets/icons/home.svg" alt="">
        </div>
      </router-link>
      <div class="icon-wrapper">
        <router-link to="/user">
          <img class="icon" src="./assets/icons/dance.svg" alt="">
        </router-link>
      </div>
      <div class="icon-wrapper">
        <router-link to="/photos">
          <img class="icon" src="./assets/icons/picture.svg" alt="">
        </router-link>
      </div>
      <div class="icon-wrapper">
        <router-link to="/comments">
          <img class="icon" src="./assets/icons/chat.svg" alt="">
        </router-link>
      </div>
    </div>
    <div class="main-wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background: linear-gradient(62deg, #fc8ec2 0%, #E0C3FC 100%);
    color: $text-color;
    padding-top: 50px;
    padding-bottom: 100px;
    font-family: $text-font;
    height: 100vh;

    @include for-size(tablet) {    
      padding-left: 50px;
      padding-right: 50px;
    }

    @include for-size(desktop) {    
      padding-left: 250px;
      padding-right: 250px;
    }
  }

  .nav {
    position: fixed;
    bottom: 0;
    background-color: #fc8ec2;
    width: 100%;
    padding: 10px 5px 0 5px;

    @include for-size(tablet) {    
      position:inherit;
      background-color: transparent;
    }

    @include for-size(desktop) {    
      position:inherit;
      background-color: transparent;
    }

    .icon-wrapper {
      width: 25%;
      display: inline-block;
      text-align: center;

      .icon {
        height: 30px;

        @include for-size(tablet) {    
          height: 40px;
        }

        @include for-size(desktop) {    
          height: 50px;
        }
      }
    }
  }
  
  a {
    color: $text-color;

    &:hover {
      color: darken($text-color, 5%);
    }
  }

  .main-wrapper {
    padding: 40px 20px 0 20px;
  }

  label {
    margin-bottom: 0;
    font-weight: bold;
    font-size: 18px;
    text-transform: uppercase;
    font-family: $heading-font;
  }

  input {
    background-color: transparent;
    border: 1px solid $border-color;
    width: 100%;
    margin-bottom: 5px;
    height: 25px;
    padding-left: 5px;
    color: $text-color;
  }

  button {
    background-color: transparent;
    color: $text-color;
    border: 1px solid $border-color;
    height: 28px;
    text-transform: uppercase;
    font-weight: bold;

    &.btn-small {
      width: 50%;

      @include for-size(tablet) {    
        width: 20%;
      }
      @include for-size(desktop) {    
        width: 10%;
      }

    }

    &.btn-big {
      width: 70%;
    }
  }

  h1 {
    font-size: 60px;
    text-transform: uppercase;
    font-weight: bold;
    font-family: $heading-font;

    @include for-size(tablet) {    
      font-size: 70px;
    }
    @include for-size(desktop) {    
      font-size: 100px;
    }
  }
  h2 {
    font-size: 40px;
    text-transform: uppercase;
    font-weight: bold;
    font-family: $heading-font;
  }

  .text-center {
    text-align: center;
  }
</style>
