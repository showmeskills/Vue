<template>
         <ul class="content">
            <li v-for="(item,i) in productsFilter" :key='i'>
              <img :src=item.img alt="">
              <p>{{item.descrip}}</p>
              <div>${{item.price}}</div>
            </li>
          </ul>
</template>

<script>


export default {
    name:'product',
    components: {
        
    },
    data(){
        return{
        products:[
          {img:require('../assets/img/xh_img1.jpg'),price:'500',descrip:'Sweet 3 / 4 Sleeve Ruffle stripe',},
          {img:require('../assets/img/xh_img2.jpg'),price:'100',descrip:'Sweet 3 / 4 Sleeve Ruffle stripe',},
          {img:require('../assets/img/xh_img3.jpg'),price:'300',descrip:'Sweet 3 / 4 Sleeve Ruffle stripe',},
          {img:require('../assets/img/xh_img4.jpg'),price:'700',descrip:'Sweet 3 / 4 Sleeve Ruffle stripe',},
          {img:require('../assets/img/xh_img5.jpg'),price:'130',descrip:'Sweet 3 / 4 Sleeve Ruffle stripe',},
          {img:require('../assets/img/xh_img6.jpg'),price:'215',descrip:'Sweet 3 / 4 Sleeve Ruffle stripe',},
          {img:require('../assets/img/xh_img7.jpg'),price:'97',descrip:'Sweet 3 / 4 Sleeve Ruffle stripe',},
          {img:require('../assets/img/xh_img8.jpg'),price:'99.5',descrip:'Sweet 3 / 4 Sleeve Ruffle stripe',},
          ],
        data:'',
      }
    },
    mounted(){
          this.$bus.$on('to-index',(data)=>{
            this.data = data;
          })        
         
    },
    computed:{
      productsFilter(){  
            let {products,data} = this;
            console.log(data)
              products.sort((p1,p2)=>{   
                return data === 0 ? p1.price - p2.price : p2.price - p1.price;
              })
          return products;
      }
    },
}
</script>

<style>
.contain ul:nth-child(2){
  width:100%;
  margin-top:10px;
  list-style-type: none;
}
.contain ul:nth-child(2) li{
  position: relative;
    float: left;
    margin: 5px 14px;
    width: 200px;
    height: 230px;
    padding: 10px;
    border: 1px solid #eee;
}
.contain ul:nth-child(2) li img{
  width: 200px;
  height: 200px;
}
.contain ul:nth-child(2) li p{
  font-size: 15px;
}
.contain ul:nth-child(2) li div{
  position: absolute;
    bottom: 0;
    right: 0;
    width: 50px;
    height: 50px;
    background: url(../assets/img/price.png);
    background-size:50px 50px;
    text-align: center;
    line-height: 50px;
    color: #fff318;
    font-size: 14px;
    font-weight: bold;
}
</style>