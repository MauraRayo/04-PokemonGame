<template>
 
<pokemonpages />
</template>

<script>
import pokemonpages from './pages/pokemonpages.vue';

export default {
  name: 'App',
  components: {
    pokemonpages
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
