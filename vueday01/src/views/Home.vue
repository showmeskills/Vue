<template>
  <div class="home">
    <div class="contain">
        <div class="sImg" @mouseover="enter()" @mousemove='move($event)' @mouseout="go()" >
            <img :src=bImg[currentIndex] alt="">
            <div v-show='flag' class="move"></div>
        </div>
        <div class="bImg" v-show="flag">
            <img  :src=bImg[currentIndex] alt="">
        </div>
        <ul class="imgList">
            <li v-for ="(items,index) in sImg" :key='index' :class = "index === currentIndex ? 'hover' : ''" @mouseover='hoverIn(index)'>
                <img :src=sImg[index] alt="">
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components:{

  },
  data(){
      return{
          flag:false,
          sImg:[
              require('../assets/images/1.jpg'),
              require('../assets/images/2.jpg'),
              require('../assets/images/3.jpg'),
              require('../assets/images/4.jpg'),
              require('../assets/images/5.jpg'),
              require('../assets/images/6.jpg'),
          ],
          bImg:[
              require('../assets/images/big1.jpg'),
              require('../assets/images/big2.jpg'),
              require('../assets/images/big3.jpg'),
              require('../assets/images/big4.jpg'),
              require('../assets/images/big5.jpg'),
              require('../assets/images/big6.jpg'),
          ],
          currentIndex:0,
          //get mouse enter offsetX and Y
          x:null,
          y:null,
          //get a distance of img from top and left 
          _x:null,
          _y:null,
          //get class = move.width and height
          moveW:null,
          moveH:null,
          //big div width and height
          bX:null,
          bY:null,
          //big img width and height
          imgX:null,
          imgY:null,
          sImgW:null,
          sImgH:null,
          // the escope of moving
          bMoveX:null,
          bMoveY:null,
          sMoveX:null,
          sMoveY:null,
          //define new value of top and left to allow grid move
          top:null,
          left:null,
          //ratio between small img and big img
          ratioX:null,
          ratioY:null,
      }    
    },
    mounted(){
        let sImg = document.getElementsByClassName('sImg')[0];
        this._x = sImg.offsetLeft + sImg.parentNode.offsetLeft;
        this._y = sImg.offsetTop + sImg.parentNode.offsetTop;
        this.sImgW = sImg.offsetLeft;
        this.sImgH = sImg.offsetTop;
    },
    updated(){
        let bImg = document.querySelectorAll('.bImg')[0];
        let img = document.querySelectorAll('.bImg img')[0];
        let mov = document.getElementsByClassName('move')[0];
        this.bX = bImg.offsetWidth;
        this.bY = bImg.offsetHeight;
        this.imgX = img.offsetWidth;
        this.imgY = img.offsetHeight;
        this.moveW = mov.offsetWidth;
        this.moveH = mov.offsetHeight;
    },
    methods:{
        hoverIn(idx){
            this.currentIndex = idx;
        },
        enter(){
            this.flag = !this.flag;
        },
        move(e){ 
             e = e || window.event;
           let sImg = document.querySelectorAll('.sImg')[0];
           let move = document.querySelectorAll('.move')[0];
           let bImg = document.querySelectorAll('.bImg img')[0];
           let Bimg = document.querySelectorAll('.bImg')[0];
           var x = e.clientX;
           var y = e.clientY;
            
           var _x = sImg.offsetLeft + sImg.parentNode.offsetLeft;
           var _y = sImg.offsetTop + sImg.parentNode.offsetTop;

            var top = x - _x - move.offsetWidth/2;
            var left = y - _y - move.offsetHeight/2;
            
            var sMoveX = sImg.offsetWidth - move.offsetWidth;
            var sMoveY = sImg.offsetHeight - move.offsetHeight;
            
            var bMoveX = bImg.offsetWidth - Bimg.offsetWidth;
            var bMoveY = bImg.offsetHeight - Bimg.offsetHeight;

            var rX = bMoveX/sMoveX;
            var rY = bMoveX/sMoveY;

            if(top<0){
                top = 0;
            }else if(top > sMoveY){
                top = sMoveY;
            }

            if(left<0){
                left = 0;
            }else if(left > sMoveX){
                left = sMoveX;
            }

             move.style.left = `${top}px`;
             move.style.top = `${left}px`;
             bImg.style.left = `-${top*rY}px`;
             bImg.style.top = `-${left*rX}px`;
        },
        go(){
            this.flag = !this.flag;
        }
    }
}
</script>


<style scoped lang="less">
.contain {
    width: 400px;
    height: 480px;
    margin: 100px auto;
    border: 0.5px solid rgb(128,128,128);
    position: relative;
}
.sImg{
    width:400px;
    height:400px;
    position: relative;
    img{
        width:400px;
        height:400px;
    }
}
.move{
    width:150px;
    height: 150px;
    position: absolute;
    top: 0;
    left: 0;
    background:url(../assets/images/move.png);
}
.bImg{
    width: 400px;
    height: 400px;
    position: absolute;
    top:0px;
    left:400px;
    overflow: hidden;
    img{
        width: 800px;
        height: 800px;
        position:absolute;
        top:0px;
        left:0px;
    }
}
.imgList{
    width:400px;
    height:55px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
    list-style-type: none;
    li{
        height: 50px;
        img{
            width:50px;
            height:50px;
        }
    }
}
.hover{
    border:2px solid red;
}

</style>
