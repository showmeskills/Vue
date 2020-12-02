<template>
  <div class="home">
     <div class= "contain">
          <div class='content'>{{current}}</div>
          <div @click="clear">C</div>
          <div @click='negative'>+/-</div>
          <div @click="percent">%</div>
          <div @click='dividend' class="calcu">/</div>
          <div @click="append('7')" class="num">7</div>
          <div @click="append('8')" class="num">8</div>
          <div @click="append('9')" class="num">9</div>
          <div @click='times' class="calcu">x</div>
          <div @click="append('4')" class="num">4</div>
          <div @click="append('5')" class="num">5</div>
          <div @click="append('6')" class="num">6</div>
          <div @click='reduce' class="calcu">-</div>
          <div @click="append('1')" class="num">1</div>
          <div @click="append('2')" class="num">2</div>
          <div @click="append('3')" class="num">3</div>
          <div @click="add" class="calcu">+</div>
          <div @click="append('0')" class="zero">0</div>
          <div @click="dot" class="num">.</div>
          <div @click='equal' class="calcu">=</div>
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
      current:'',
      previous:null,
      operatorClick:null,
      operator:null,
      flag:true
    }
  },
  methods:{
    clear(){
      this.current = '';
    },
    append(num){
      if(this.operatorClick){
        this.current = '';
        this.operatorClick = false;
      }
        this.current =`${this.current}${num}`; 
    },
    dot(){
      if(this.current.indexOf('.') === -1){
        this.append('.');
      }
    },
    percent(){
      this.current = `${parseFloat(this.current)/100}`;
    },
    negative(){
      this.current = this.current.charAt(0) === '-' ?
        this.current.slice(1) : `-${this.current}`
    },
    dividend(){
      this.operator = (a,b)=>a / b;
      this.run()
    },
    times(){
      this.operator = (a,b)=>a * b;
      this.run()
    },
    reduce(){
      this.operator = (a,b)=>a - b;
      this.run()
    },
    add(){
      this.operator = (a,b)=>a + b;
      this.run()
    },
    //packkage function for simplifing the code
    run(){
      this.previous = this.current;
      this.operatorClick = true;
      this.flag = true;
    },
    equal(){
      //there sets a flag for stopping double-click equal
      if(this.flag){
        //setting a operatorClick for after calculated and click number again, this.current is null;
        this.operatorClick = true;
        this.current = `${
          this.operator(
            parseFloat(this.previous),
            parseFloat(this.current)
        )}`
        this.previous = null;
        this.flag = false;
      }
    },
  }
}
</script>

<style>
.contain{
  width:400px;
  height:500px;
  background-color:black;
  margin:50px auto;
  color:white;
}
.content{
  width:400px;
  height:100px;
  text-align: center;
  line-height: 100px;
  font-size: 30px;
  font-weight:900; 
}
/* 
  unless first one 
 */
.contain div:nth-child(n+2){
  width:70px;
  height:70px;
  margin-top:10px;
  margin-left: 25px;
  float:left;
  background-color: rgb(165,165,165);
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  line-height: 70px;
  border-radius: 50%;
}
.contain div.zero{
  width:162px;
  border-radius: 40%;
  background-color:rgb(51,51,51)
}
.contain div.num{
  background-color:rgb(51,51,51)
}
.contain div.calcu{
  background-color:rgb(254,149,5)
}
</style>