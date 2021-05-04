<template>
    <div id="app">
      <div class="container text-center">
          <!-- 给 TodoHeader标签对象绑定addTodo事件监听 -->
          <!-- <TodoHeader @addTodo='addTodo'/> -->
          <TodoHeader ref="head"/>
          <TodoList :mytodos='todos' />
          <TodoFooter :mytodos='todos' :deleteCompleteTodos='deleteCompleteTodos' :selectAllTodos='selectAllTodos'/>
      </div>
    </div>
</template>

<script>
/*
    绑定事件监听 订阅消息 绑定监听
    触发事件  发布消息 触发事件
*/
import TodoHeader from "@/components/TodoHeader.vue"
import TodoList from "@/components/TodoList.vue"
import TodoFooter from "@/components/TodoFooter.vue"
import PubSub from 'pubsub-js'
import storageUtil from './util/storage.js'
export default {
    components: {
       TodoHeader,
       TodoList,
       TodoFooter
    },
    data(){
       return{
           //从localStorage读取todos
           //一旦todos 发生变化就需要保存(深度监视)
           todos:storageUtil.getTodos(),//存的是本文字符串
       }
    },
    mounted(){
        //异步代码绑定监听 <TodoHeader/>绑定addTodo事件监听
         //触发自定事件
        this.$refs.head.$on('addTodo',this.addTodo)
        //订阅消息
        PubSub.subscribe('removeTodo',(msg,index)=>{
            this.removeTodo(index)
        })
    },
    watch:{//深度监视
        todos:{
            deep:true,//深度监视
            handler:storageUtil.setTodos
        }
    },
    methods: {
        addTodo(todo){
            this.todos.unshift(todo)
        },
        removeTodo(idx){
            this.todos.splice(idx,1)
        },
        //删除所有选中(完成的)/过滤数组
        deleteCompleteTodos(){
            this.todos = this.todos.filter(todo => !todo.complete)
        },
        //全选或者全不选
        selectAllTodos(isCheck){
            this.todos.forEach(todo=>todo.complete = isCheck)
        }
    }
}
</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }
    .container{
        width:550px;
        border:1px solid #ccc;
    }
</style>