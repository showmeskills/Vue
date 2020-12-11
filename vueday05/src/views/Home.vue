<template>
  <div class="home">
       <div>
        <div>
            <h3>Order</h3>
            <button @click="orderByAge(0)">Default</button>
            <button @click="orderByAge(2)">The age is in ascending order</button>
            <button @click="orderByAge(1)">The age is in descending order</button>
        </div>

        <p>-----------------------------------------------------------------------</p>
        <h3>Search Bar</h3>
        <input type="text" placeholder="Please,type the search name" v-model="searchName">
        <ul>
            <li v-for="(p,index) in filterPersons" :key="personsKeys[index]">
                {{index+1}} ) Name: {{p.name}}--Age: {{p.age}}--Gender: {{p.sex}}--
            </li>
        </ul>
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
        return{
            searchName:'',
            persons:[
                    {name:'Peter',age:'18',sex:'Male'},
                    {name:'PeterA',age:'28',sex:'Female'},
                    {name:'PeterB',age:'38',sex:'Male'},
                    {name:'PeterC',age:'48',sex:'Female'},
                    {name:'Terry',age:'58',sex:'Male'},
                    {name:'TerryA',age:'18',sex:'Male'},
                    {name:'TerryB',age:'28',sex:'Female'},
                    {name:'TerryC',age:'38',sex:'Male'},
                    {name:'Erick',age:'48',sex:'Female'},
                    {name:'ErickI',age:'58',sex:'Male'},
                    {name:'ErickII',age:'98',sex:'Male'},
                    {name:'ErickIII',age:'78',sex:'Male'},
                    {name:'Summy',age:'38',sex:'Male'}
                    ],
            personsKeys:[],
            orderType:0
           }
        },
        computed:{
          filterPersons(){
            let {searchName,persons,personsKeys,orderType} = this;
            
            let arr = [...persons];

            if(searchName.trim()){
              arr = persons.filter(p => p.name.indexOf(searchName) !==-1);
            }
            if(orderType){
              arr.sort((a,b) =>{
              if(orderType === 1){
                return a.age - b.age;
              }else{
                return b.age - a.age;
              }
                
              })
            }
            return arr;
          }

        },
        methods:{
          orderByAge(orderType){
            this.orderType = orderType;
          }
        }
        
}
</script>

<style scoped>
ul{
    list-style: none;
}
  ul>li{
        padding: 4px 0;
  }

</style>