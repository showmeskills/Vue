<template>
    <div class="todo-footer">
        <div class="wrap">
            <input type="checkbox" v-model="isCheckAll"/>
            <p>已完成
                <span>{{completeSize}}</span>
                /全部{{mytodos.length}}
            </p>
            <button class="btn btn-danger" v-show="completeSize" @click="deleteCompleteTodos">清除已经完成任务</button>
        </div>
    </div>
</template>


<script>
export default {
    props:{
        'mytodos':Array,
        'deleteCompleteTodos':Function,
        'selectAllTodos':Function
    },
    data(){
        return{
        }
    },
    computed:{
       completeSize(){
           return this.mytodos.reduce((preTotal,todo)=> preTotal + (todo.complete?1:0),0)
       },
      isCheckAll:{
          get(){
              return this.completeSize === this.mytodos.length && this.completeSize > 0;
          },
          set(value){//value 是当前checkbox最新的值
            this.selectAllTodos(value)
          }
      }
   }
}
</script>


<style scoped>
    .wrap{
        margin:15px auto;
        width:500px;
        display:flex;
        align-items:center;
        justify-content:space-between;
    }
    .wrap input{
        margin-left: 5px;
    }
</style>