<template>
  <div id="app">
    <ul>
      <base-nav-bar-routes :routes="routes"></base-nav-bar-routes>
    </ul>
    <router-view></router-view>
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
      return [
        {
          path: '/home',
          name: 'home',
          title: 'home',
        },
        {
          path: 'dashboard',
          name: 'dashboard',
          title: 'dashboard',
        },
        {
          path: 'login',
          name: 'login',
          title: 'login',
        }
      ];
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  ul {
    height: 70px;
    margin-bottom: 1vh;
    display: flex;
    list-style: none;
    li {
      margin: auto 20px;
    }
  }
}
</style>
