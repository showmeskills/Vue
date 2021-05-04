<template>
    <div class="comment">
        <div class="container">
            <p class="text-primary h1">Vue comment event</p>
            <div class="wrap">
              <User :addCom='addC'/>
              <List class="li" :myComments='comments' :deleteComment='deleteComment'/>
            </div>
        </div>
    </div>
</template>

<script>
// 更新哪个组件的数据,这个方法或者函数就这在这个组件中
import List from './Comment/List.vue';
import User from './Comment/User.vue';
export default {
    name:'comment',
    props:['addC'],
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
    methods:{
        addC(comment){
            this.comments.splice(this.comments.length,0,comment)
        },
        //删除指定下标评论
        deleteComment(idx){
            this.comments.splice(idx,1)
        }
    }
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