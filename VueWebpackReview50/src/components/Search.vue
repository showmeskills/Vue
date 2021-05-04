<template>
   <div class="Search h1">
       <p>Search Github Users</p>
            <input type="text" class="form-control col-sm-6" placeholder='enter the name you search' v-model="searchName">
        <button class="btn btn-primary" @click="search">search</button>
   </div>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
    data(){
        return{
            searchName:'',
        }
    },
    methods:{
        search(){
            const searchName = this.searchName.trim();
            if(searchName){
                //publish info
                PubSub.publish('search',searchName)
            }else{
                alert(`your search name is empty`)
            }
        }
    }
}
</script>

<style scoped>
.Search{
    width:400px;
}
</style>