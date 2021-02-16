<template>
<!-- 
    onmouseenter onmouseleave
    onmouseover onmouseout
    它们的区别
    当有一个父元素包含者子元素的时候
    onmouseover 和 onmouseenter 进入父元素都会触发
    但是，进入子元素的时候onmouseout 会触发
    onmouseleave 只有离开父元素的时候才触发,即使在子元素上不会触发
 -->
    <ul class="todo-item">
        <li @mouseenter=enter(true) @mouseleave=enter(false) :style="{backgroundColor:bgColor}">
            <input type="checkbox" v-model="item.complete"/> 
            <p>{{item.title}}</p>
            <button v-show='isShow' @click="deleteItem" class="btn btn-danger">删除</button>
        </li>
    </ul>
</template>


<script>
import PubSub from 'pubsub-js'
export default {
    props:{
        'item':Object,
        'index':Number,
        //'removeTodo':Function
    },
    data(){
        return{
            isShow:false,
            bgColor:'#fff',
        }
    },
    methods:{
        enter(isEnter){
            if(isEnter){
                this.bgColor='#ccc'
                this.isShow = true;
            }else{
                this.isShow = false;
                this.bgColor='#fff'
            }
        },
        deleteItem(){
            const {item,index,removeTodo} = this
            if(window.confirm(`确认删除${item.title}吗?`)){
                //removeTodo(index)
                PubSub.publish('removeTodo',index)
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