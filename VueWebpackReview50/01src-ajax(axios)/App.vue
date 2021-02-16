<template>
    <div id="app">
      <div v-if="!repoUrl">loading...</div>
      <div v-else>most start repo is <a :href='repoUrl'>{{repoName}}</a> </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
            repoName:'',
            repoUrl:'',
        }
    },
    mounted(){
        //发ajax请求获取数据
        const url = 'https://api.github.com/search/repositories?q=v&sort=stars'
        axios.get(url)
        .then(res=>{
            const result = res.data;
            const mostRepo = result.items[0]
            this.repoUrl = mostRepo.html_url
            this.repoName = mostRepo.name
        })
        .catch(err=>{
            alert('request failed')
        })
    }
}
</script>

<style>
  
</style>