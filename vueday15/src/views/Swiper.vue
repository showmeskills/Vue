<template>
    <div class='swiper-container filmswiper'>
       <div class="swiper-wrapper">
           <slot></slot>
       </div>
       <div class="swiper-pagination">
         <div class="swiper-pagination-bullet active"></div>
       </div>
       <!-- 如果需要导航按钮 --> 
      <div class="swiper-button-prev"></div> <div class="swiper-button-next"></div> 
      <!-- 如果需要滚动条 --> 
      <div class="swiper-scrollbar"></div>
    </div>
</template>

<script>
//1.下载npm i -S swiper
//2.引入
import Swiper from 'swiper'//js
import 'swiper/swiper.less';
// import 'swiper/components/navigation/navigation.less';
import 'swiper/components/pagination/pagination.min.css';
// import 'swiper/components/scrollbar/scrollbar.less';

export default {
  updated(){
    new Swiper('.swiper-container', {
    notNextTick: true,
    //设定初始化时slide的索引
    initialSlide: 0,
    direction: 'horizontal', // 水平切换选项
    loop: true, // 循环模式选项
    autoplay: {
      disableOnInteraction: false,//手动滑动之后不打断播放
    },
    //滑动速度
    speed: 1000,
    // 如果需要分页器
    observer: true, //监听，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
    pagination: {
      el: '.swiper-pagination',
    },
    observeParents:true//修改swiper的父元素时，自动初始化swiper  如果修改外层样式，这个一定要加！！
  })
  }
}
</script>

<style scoped>
.swiper-container {
  padding: 0 0 20px 0;
}
.swiper-pagination {
  margin-left: -12px;
}
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 0px;
}
</style>