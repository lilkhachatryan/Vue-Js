<template>
  <div>
    <div>Dashboard component</div>
    <base-button @click="$router.push({ name: 'home', hash: '#data'})">To Home</base-button>
  </div>
</template>

<script>
export default {
  name: 'DashboardComponent'
}
</script>

<style scoped>
</style>
