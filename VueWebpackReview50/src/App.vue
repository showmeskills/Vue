<template>
    <div id="app">
        <div class="container">
            <Search/>
            <UsersMain/>
        </div>
    </div>
</template>

<script>
import UsersMain from "@/components/Main.vue"
import Search from "@/components/Search.vue"
export default {
    components:{
        Search,
        UsersMain
    },
    data(){
        return{
            
        }
    },
}
</script>

<style scoped>
  #app{
      margin: auto;
  }
</style>