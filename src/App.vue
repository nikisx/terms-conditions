<template>
  <nav-bar></nav-bar>
    <router-view></router-view>
  <footer-vue></footer-vue>
</template>

<script>
import NavBar from './components/Navigation/NavBar.vue';
import FooterVue from './components/Footer/Footer.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    FooterVue,
  }
}
</script>

<style>
@import './assets/css/animated.css';
@import './assets/css/fontawesome.css';
@import './assets/css/owl.css';
@import './assets/css/templatemo-plot-listing.css';
@import './assets/css/bootstrap.min.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
