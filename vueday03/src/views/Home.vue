<template>
  <div class="home">
    <div class="contain"  @mouseover="stop" @mouseleave="restart">
        <div class="wrap">

            <img :src=List[currentIndex] alt="">
        </div>
      <div class="btn">
        <div @click='inTo(prevIndex)'></div>
        <div @click='inTo(nextIndex)'></div>
      </div>
      <div class="bottomList">
        <ul>
          <li v-for='(items,index) in List' :key='index' @click='inTo(index)' :class = "index === currentIndex ? 'hover' : ''"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
  },
  data(){
    return {
      List:[
        require('../assets/img/1.png'),
        require('../assets/img/2.png'),
        require('../assets/img/3.png'),
        require('../assets/img/4.png'),
        require('../assets/img/5.png'),
      ],
      currentIndex:0,
      timer:null,
    }
  },
  mounted(){
    this.autoPlay();
  },
  methods:{
    inTo(idx){
      this.currentIndex = idx;
    },
    autoPlay(){
      this.timer = setInterval(()=>{
        this.inTo(this.nextIndex);
      },2000)
    },
    stop(){
      clearInterval(this.timer);
    },
    restart(){
      this.autoPlay();
    }
  },
  computed:{
    prevIndex(){
      if(this.currentIndex == 0){
        return this.List.length - 1;
      }else{
        return this.currentIndex - 1;
      }
    },
    nextIndex(){
      if(this.currentIndex == this.List.length -1){
        return 0;
      }else{
        return this.currentIndex + 1;
      }
    }
  }
}
</script>

<style lang="less">
.contain{
  width:640px;
  height:350px;
  margin:50px auto;
  position:relative;
  }
.wrap{
  width:640px;
  height:350px;
  position: absolute;
  top: 0;
  left:0;
  transition: all .4s;
  img{
    width:640px;
    height:350px;
    position: absolute;
    top: 0;
    left:0;
  }
}

.btn>div:nth-child(1){
    width:40px;
    height:75px;
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    left:0px;
    background-image:url(../assets/img/icon-slides.png);
    background-position:80px 0px;
}
.btn>div:nth-child(2){
    width:40px;
    height:75px;
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    right:0px;
    background-image:url(../assets/img/icon-slides.png);
    background-position:40px 0px;
}
.btn>div:nth-child(2):hover{
  background-position: 125px 0px
}
.btn>div:nth-child(1):hover{
  background-position: 165px 0px
}
.bottomList{
  position:absolute;
  bottom:2%;
  left:50%;
  transform:translateX(-50%);
  ul{
    list-style: none;
    width:150px;
    height:30px;
    display:flex;
    justify-content:space-between;
    align-items: center;
    li{
      width:25px;
      height:20px;
      background-color:red;
      border-radius:50%;
      border: 2px solid #fff;
      border-color: hsla(0,0%,100%,.3);
      background: rgba(0,0,0,.4);
      &.hover{
          background: hsla(0,0%,100%,.4);
          border-color: rgba(0,0,0,.4);
      }
    }
  }
}

</style>
