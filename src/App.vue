<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <base-button size="sm">Other name</base-button> <br />
    <base-input @focus="handleFocus"/>
    <ul>
      <base-nav-bar-routes :routes="routes"></base-nav-bar-routes>
      <router-view></router-view>
    </ul>
  </div>
</template>

<script>
// import { eventBus } from './main';

export default {
  name: 'App',
  components: {
  },
  computed: {
    routes () {
      return [{
        path: '/home',
        name: 'home',
        title: 'home',
      }, {
        path: 'dashboard',
        name: 'dashboard',
        title: 'dashboard',
      }];
    }
  },
  methods: {
    handleFocus: function (event) {
      console.log(event);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
