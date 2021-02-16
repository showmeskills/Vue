<template>
 <ul class="Main">
     <h2 v-if="firstView">enter search name and click button</h2>
     <h2 v-if='loading'>loading...</h2>
     <h2 v-if="errorMsg">{{errorMsg}}</h2>
    <li v-for="(user,idx) in users" :key="idx">
        <a :href="user.url">
            <img :src="user.avatar_url" alt="">
        </a>
        <p class="name text-center text-danger">name:{{user.name}}</p>
    </li>
</ul>
</template>

<script>
import axios from "axios";
import PubSub from 'pubsub-js'
export default {
    name:'Main',
    data(){
        return{
            firstView:true,
            loading:false,
            users:null, //{url:'',avatar_url:'',user.name:''}
            errorMsg:''
        }
    },
    mounted(){
        //subscribe info
        PubSub.subscribe('search',(msg,searchName)=>{
            const url = `https://api.github.com/search/users?q=${searchName}`;
            //renew states
            this.firstView = false;
            this.loading = true;
            this.users = null;
            this.errorMsg = '';
            //send ajax request
            axios.get(url)
            .then(value=>{
                const result = value.data
                //map 数组遍历返回一个对象怎么写 map(item=>({这里写对象体}))
                const users = result.items.map(item=>({
                    url:item.html_url,
                    avatar_url:item.avatar_url,
                    name:item.login
                }))
                //renew successful state
                this.loading = false
                this.users = users
            })
            .catch(err=>{
                this.loading = false,
                this.errorMsg = 'request failed'
            })
        })
    }
}
</script>

<style scoped>
    ul{
        list-style: none;
    }
    li{
        border: 1px solid #ccc;
        width:200px;
        height:200px;
        float:left;
    }
    li a img{
        width:100%;
        height:90%;
    }
    li .name{
        width:10px;
        height:10%;
    }
</style>