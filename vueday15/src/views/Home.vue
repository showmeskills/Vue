<template>
  <div class="home">    
   <swiper class="bg">
       <div class="swiper-slide" v-for="(item,idx) in img" :key='idx'>
         <img :src="img[idx]" alt="">
       </div>
   </swiper>
   <div>-------------------------------------</div>

  </div>
</template>

<script>
import swiper from "../views/Swiper"
export default {
  name: 'Home',
  components: {
    swiper,
  },
  data(){
    return{
        img:null
    }
  },
  mounted(){
    setTimeout(()=>{
      this.img = [
          require('../assets/imgs/01.jpg'),
          require('../assets/imgs/02.jpg'),
          require('../assets/imgs/03.jpg'),
          require('../assets/imgs/04.jpg'),
          require('../assets/imgs/05.jpg'),
      ]
    },2000)
  }
}
</script>

<style scoped>


</style>
