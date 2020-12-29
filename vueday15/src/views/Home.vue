<template>
  <div class="home">    
   <swiper class="bg">
       <div class="swiper-slide" v-for="(item,idx) in 10" :key='idx'>{{item}}</div>
   </swiper>
  </div>
</template>

<script>
import swiper from "../views/Swiper"
export default {
  name: 'Home',
  components: {
    swiper
  }
}
</script>

<style scoped>
.bg{
  background: red;
}

</style>
