<template>
    <div class="comment">
        <div class="container">
            <p class="text-primary h1">Vue comment event</p>
            <div class="wrap">
              <User/>
              <List class="li" :myComments='comments'/>
            </div>
        </div>
    </div>
</template>

<script>
import List from './Comment/List.vue';
import User from './Comment/User.vue';
export default {
    name:'comment',
    props:['addComment'],
    components:{
        List,
        User
    },
    data(){
        return{
            comments:[
                {
                    name:'BOB',
                    content:'Vue is good'
                },
                {
                    name:'Cat',
                    content:'Vue so easy '
                },
                  {
                    name:'Terry',
                    content:'Vue so so'
                },
            ]
        }
    },
}
</script>

<style scoped>
    .wrap{
        display:flex;        
    }
    .li{
        margin-left: 100px;
    }
</style>