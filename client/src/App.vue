<template>
  <div id="app">
     <div id="row nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/rsvp">RSVP</router-link> |
      <router-link to="/signup">Sign up</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/photos">Photos</router-link> |
      <router-link to="/comments">Hang out</router-link>
    </div>
    <div class="row main-wrapper">
      <router-view/>
    </div>
   
  </div>
</template>

<style lang="scss">

  #nav {
    justify-content: end;
  }
  a {
    color: $text-color;
  }

  body {
    background-color: #fc8ec2;
    background-image: linear-gradient(62deg, #fc8ec2 0%, #E0C3FC 100%);
    color: $text-color;
    padding-left: 20px;
    padding-right: 20px;
    font-family: $text-font;
  }

  .main-wrapper {
    padding-top: 40px;
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
    }

    &.btn-big {
      width: 70%;
    }
  }

  h1 {
    font-size: 100px;
    text-transform: uppercase;
    font-weight: bold;
    font-family: $heading-font;
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
