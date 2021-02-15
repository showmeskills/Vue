<template>
    <div id="app">
      <div class="container text-center">
          <!-- self-definition event -->
          <!-- <TodoHeader @addItem='addItem'/> -->
          <TodoHeader ref="header"/>
          <TodoList :todos='todos'/>
          <TodoFooter :todos='todos' :selectAll='selectAll' :deleteCompleted='deleteCompleted'/>
      </div>
    </div>
</template>

<script>
import TodoHeader from "@/components/TodoHeader.vue"
import TodoList from "@/components/TodoList.vue"
import TodoFooter from "@/components/TodoFooter.vue"
import PubSub from 'pubsub-js'
export default {
    components: {
       TodoHeader,
       TodoList,
       TodoFooter
    },
    data(){
       return{
           todos:JSON.parse(window.localStorage.getItem('todos_key') || '[]'),
       }
    },
    mounted(){
        this.$refs.header.$on('addItem',this.addItem);
        PubSub.subscribe('removeTodo',(msg,index)=>{
            this.removeItem(index);
        })
    },
    watch:{
        todos:{
            deep:true,
            handler(newVal,oldVal){
                 window.localStorage.setItem('todos_key',JSON.stringify(newVal))
            }
        }
    }
    ,
    methods: {
       addItem(todo){
           this.todos.push(todo)
       },
       removeItem(idx){
           this.todos.splice(idx,1)
       },
       selectAll(isAllchecked){
           this.todos.forEach(todo=> todo.complete = isAllchecked)
       },
       deleteCompleted(){
           this.todos = this.todos.filter(todo=> !todo.complete)
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