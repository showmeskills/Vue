<template>
  <div class="home">
      <div class="contain">
          <ul>
            <li v-for='(item,i) in topics' :key='i'>{{item}}</li>
            <Dropdown/>
          </ul>
            <Product/>
      </div>
  </div>
</template>

<script>
import Dropdown from '../components/Dropdown'
import Product from '../components/Product'
export default {
  name: 'Home',
  components: {
    Dropdown,
    Product
  },
  data(){
    return{
      topics:['Popular', 'Hot','New-Products'],
  
    }
  },
  mounted(){
    
  },
  updated(){
   
  },
  methods: {

  }
}
</script>

<style>
.contain{
  width:1000px;
  height:600px;
  margin:50px auto;
}
.contain ul:nth-child(1){
  width:100%;
  height:42px;
  background: #f8f8f8;
  border: 1px solid #ddd;
  list-style: none;
}
.contain ul:nth-child(1) li{
  height:100%;
  float: left;
  margin-left:50px;
  line-height:42px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  }

</style>
