<template>
  <div class="Home">
    <button @click="PubMutations">click-sync request</button>
    <h1>mapState:{{err}}</h1>
    <h1>mapState:{{data}}</h1>
    <br>
    <button @click="PubActions">click-async request</button>
    <h1>mapState:{{err}}</h1>
    <h1>mapState:{{data}}</h1>
    <br>
    <h1>Getters:{{GET_HOME}}</h1>
  </div>
</template>

<script>
import {mapState,mapActions,mapMutations,mapGetters} from 'vuex';

export default {
  name: 'Home',
  methods:{
    ...mapActions(['A_UPDATE_HOME']),
    ...mapMutations(['M_UPDATE_HOME']),
    PubMutations(){
      this.M_UPDATE_HOME({
          err:1,
          data:{
            title:"this is a mapMutations",
          }
      })
    },
    PubActions(){
      this.A_UPDATE_HOME({
          err:2,
          data:{
            title:"this is a mapActions",
          }
      })
    }

  },
  computed:{
    ...mapState(['err','data']),
    ...mapGetters(['GET_HOME']),
  }
}
</script>
