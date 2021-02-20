<template>
  <div id="app">
    <h1 class="title">Vue basic router function</h1>
    <Navbar class="Navbar"/>
    <keep-alive>
      <router-view msg='this is from router-view'/>
    </keep-alive>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
export default {
  name: 'App',
  components:{
    Navbar
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}

</style>
