<template>
    <div class="todo-footer">
        <div class="wrap h4" v-if='todos'>
            <input type="checkbox" v-model="isAllChecked"/>
            <p>completed
                <span>{{completeSize}}</span>
                /
                <span>All{{todos.length}}</span>
            </p>
            <button class="btn btn-danger" v-show="completeSize" @click='clear'>Clear completed task</button>
        </div>
    </div>
</template>


<script>
export default {
    props:{
        'todos':Array,
        'selectAll':Function,
        'deleteCompleted':Function,
    },
    computed:{
        completeSize(){
            return this.todos.reduce((total,todo) => total + (todo.complete? 1 : 0),0)
        },
        isAllChecked:{
            get(){
                return this.completeSize === this.todos.length && this.completeSize > 0;
            },
            set(value){
                this.selectAll(value)
            }
        }
    },
    methods:{
        clear(){
            if(window.confirm(`are you sure to delete all completed tasks?`)){
                this.deleteCompleted()
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
        margin-left:0px;
    }
 
</style>