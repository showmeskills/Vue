<template>
  <div id="app">
    <header>
      <Navbar />
    </header>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default{
  name: "app",
  components:{
    Navbar
  }
}

</script>

<style lang="less">
*{
  margin: 0;
  padding:0;
  box-sizing:border-box;
}
body{
  font-family:'monterrat',sans-serif;
}
header{
  width:100vw;
  background: #222;
  padding: 15px;
}
</style>
