<template>
    <ul class="todo-item">
        <li @mouseenter="enter(true)" @mouseleave="enter(false)" :style="{backgroundColor:bgColor}">
          <input type="checkbox" v-model='todo.complete'/>
          <p>{{todo.title}}</p>
          <button class="btn btn-danger" @click="remove" v-show='isShow'>delete</button>
        </li>
    </ul>
</template>


<script>
import PubSub from 'pubsub-js'
export default {
    props:{
        'todo':Object,
        'Idx':Number,
    },
    data(){
        return{
            isShow:false,
            bgColor:'#fff'
        }
    },
    methods:{
        remove(){
            const {todo,Idx} = this;
            if(window.confirm(`Are you sure to delete ${todo.title}?`)){
                PubSub.publish('removeTodo',Idx)
            }
        },
        enter(boolean){
            if(boolean){
                this.isShow = true
                this.bgColor = '#ccc'
            }else{
                this.isShow = false
                this.bgColor = '#fff'
            }
        }
    }
}
</script>


<style scoped>
    .todo-item{
        margin: auto;
        width: 500px;
        list-style: none;
    }
    .todo-item li{
        border:1px solid #ccc;
        display:flex;
        justify-content:flex-start;
        align-items:center; 
        position: relative;
        height:50px;
    }
    .todo-item li input,
    .todo-item li p{
        margin-left: 5px;
    }
    .btn{
        height:35px;
        position:absolute;
        right: 0;
    }
</style>