<template>
  <div id="app">
    <TestSlide/>
  </div>
</template>

<script>
import TestSlide from './components/TestSlide.vue'

export default {
  name: 'App',
  components: {
    TestSlide
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
  margin-top: 60px;
}
</style>
