<template>
  <div id="app">
      <Element/>
      <Button/>
      <Radio/>
      <operate/>
      <Message/>
      <Carousel/>
    <router-view/>
  </div>
</template>

<script>
import Element from "@/views/Element.vue";
import Button from "@/views/Button.vue";
import Radio from "@/views/Radio.vue";
import operate from "@/views/switch.vue";
import Message from "@/views/MessageBox.vue";
import Carousel from "@/views/Carousel.vue";
export default {
  components:{
    Element,
    Button,
    Radio,
    operate,
    Message,
    Carousel
  }
}
</script>

<style lang="less">

</style>
