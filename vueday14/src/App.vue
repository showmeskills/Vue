<template>
  <div id="app" :class="typeof weather.main != 'undefined' && weather.main.temp >16? 'warm' : ''">
    <main>
      <div class="search-box">
        <input type="text" 
        placeholder="Search..."
        class='search-bar'
        v-model="query"
        @keypress="enter($event)"
        />
      </div>
      <div class='weather-report' v-if='typeof weather.main != "undefined"'>
        <div class="location-box">
          <div class="location">{{weather.name}},{{weather.sys.country}}</div>
          <div class="geography">Longitude:{{weather.coord.lon}},Latitude:{{weather.coord.lat}}</div>
          <div class="date">{{dateBuilder()}}</div>
        </div>
      </div>
      <div class='weather-box'>
        <div class="temp">{{Math.round(weather.main.temp)}}°c</div>
         <div class="weather">{{ weather.weather[0].main }}</div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name:'app',
  data(){
    return{
      api_key: '9de243494c0b295cca9337e1e96b00e2',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      query: '',
      weather: {},
      months:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      days:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    }
  },
  methods:{
    enter(e){
      e = e || window.event;
      let api =`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`
      if(e.keyCode === 13){
        this.axios.get(api).then(res =>{
          console.log(res.data);
          this.weather = res.data
        }).catch(err =>{
          console.log(err);
        })
      }
    },
      dateBuilder(){
      let {months,days} = this;
      let date = new Date();
      let day = days[date.getDay()];
      let d = date.getDate();
      let month = months[date.getMonth()];
      let year = date.getFullYear();

      return `${day} ${d} ${month} ${year}`;
    }
  },
 
}
</script>

<style lang="less">
*{
  margin:0;
  padding:0;
}
body {
  font-family: 'montserrat', sans-serif;
}
#app{
  margin:20px auto;
  width:55vw;
  height:90vw;
  background-image: url('./assets/cold-bg.jpg');
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}
#app.warm {
  background-image: url('./assets/warm-bg.jpg');
}
main{
  min-height: 65vh;
  padding: 25px;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
}
.search-box {
  width: 100%;
  margin-bottom: 30px;
}
.search-bar{
  width:46vw;
  height:7vw;
  border:none;
  outline: none;
  text-indent:2vw;
  font-size:20px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}
 .search-bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0px 16px 0px;
}
.location-box .location {
  color: #FFF;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}
.location-box .geography {
  color: #FFF;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}
.location-box .date {
  color: #FFF;
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
}

.weather-box {
  text-align: center;
}

.weather-box .temp {
  display: inline-block;
  padding: 10px 25px;
  color: #FFF;
  font-size: 102px;
  font-weight: 900;

  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color:rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;

  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.weather-box .weather {
  color: #FFF;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
</style>
