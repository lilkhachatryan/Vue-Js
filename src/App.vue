<template>
  <div id="app">
    <MonsterSlayer />
  </div>
</template>

<script>
import MonsterSlayer from "./components/MonsterSlayer";

export default {
  name: 'App',
  components: {
    MonsterSlayer
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
