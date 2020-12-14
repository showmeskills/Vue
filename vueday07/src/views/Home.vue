<template>
  <div class="home">
     <ul class="container">
       <li v-for="(item,index) in productDetails" :key='index'>
         <img class="img" :src="item.img" alt="">
         <span class="price">Price:${{item.price}}</span>
        <img class='minus' @click="minus(index)" src="../assets/img/jianhao.png" alt="">
          <span class="quantity">Quantities:{{item.currentQuantity}}</span>
         <img class='add' @click="add(index)" src="../assets/img/jiahao.png" alt="">
         <span class='subtotal'>subtotal:${{item.subtotal}}</span>
         <input type="checkbox" class="checkbox"
          v-model="checkgroup" :value="item" @change='handleOne' 
          />
       </li>
     </ul>
     <div>totalPrice:${{totalPrice()}}</div>
     <div>totalQuantity:{{totalQuantity()}}</div>
     <div>FullChecked:<input class='fullChecked' type="checkbox" v-model="isAllchecked" @change="handleAll" /></div>
     <div @click="EventAbout(totalPrice())"><router-link class="payment" to="/payment">Go to payment</router-link></div>
  </div>
</template>

<script>




export default {
  name: 'Home',
  components: {
    
  },
  data(){
    return{
      productDetails:[
        {img:require('../assets/img/1.webp'),price:30,currentQuantity:0,subtotal:0},
        {img:require('../assets/img/2.webp'),price:20,currentQuantity:0,subtotal:0},
        {img:require('../assets/img/3.webp'),price:10,currentQuantity:0,subtotal:0},
      ],
      checkgroup:[],
      isAllchecked:false,
    }
  },
  methods:{
      minus(idx){
          this.productDetails[idx].currentQuantity--;
        if(this.productDetails[idx].currentQuantity < 0){
            this.productDetails[idx].currentQuantity = 0;
          }
          this.productDetails[idx].subtotal = this.productDetails[idx].currentQuantity * this.productDetails[idx].price;
      },
      add(idx){
        this.productDetails[idx].currentQuantity++;
        this.productDetails[idx].subtotal = this.productDetails[idx].currentQuantity * this.productDetails[idx].price;
      },
      totalQuantity(){
        let sum = 0;
        for(let i in this.checkgroup){
          sum += this.checkgroup[i].currentQuantity
        }
        return sum;
      },
      totalPrice(){
        let sum = 0;
        for(let i in this.checkgroup){
          sum += this.checkgroup[i].subtotal
        }
        return sum;
      },
      handleAll(){
        if(this.isAllchecked){
          this.checkgroup = this.productDetails
        }else{
          this.checkgroup = [];
        }
         
      },
      handleOne(){
        if(this.checkgroup.length === this.productDetails.length){
          this.isAllchecked = true;
        }else{
          this.isAllchecked = false;
        }
      },
      EventAbout(sum){
        this.$bus.$emit('to-price',sum)
      }
  }
}
</script>

<style lang="less">
  .home{
     .container{
       list-style-type: none;
         li{
           display:flex;
           align-items: center;
           justify-content: space-around;
           border:1px solid red;
           .img{
             width:150px;
             height:150px;
           }
           .price{
             font-size:20px;
             font-weight: bold;
           }
           .minus,.add{
             width:25px;
             height:25px;
           }
           .quantity,.subtotal{
             font-size: 15px;
             font-weight: bold;
           }
          .checkbox{
            width:15px;
            height:15px;
          }
         }   
     }
     div{
       width:150px;
       height:50px;
       float: left;
       margin-top:10px;
       text-align: center;
       line-height:50px;
     }
      div:nth-child(4){
         border:1px solid red;
      }
      div:nth-child(5){
        display: flex;
        align-items: center;
        justify-content: center;
      }
      div:nth-child(5) input{
        width: 15px;
        height: 15px;
        margin-left:5px;
      }
      .payment{
        width:150px;
        height:50px;
        text-decoration: none;
        color:black;
        border:1px solid red;
        margin-left: 15px;
      }
  }
</style>