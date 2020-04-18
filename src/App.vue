<template>
  <div id="app">
    <Editable />
  </div>
</template>

<script>
import Editable from "./components/Editable";

export default {
  name: 'App',
  components: {
    Editable
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
