<template>
    <div class="todo-list">
        <TodoItem v-for='(todo,idx) in todos' :key="idx" :Idx="idx" :todo='todo' :removeItem='removeItem'/>
    </div>
</template>


<script>
import TodoItem from "@/components/TodoItem.vue"
export default {
    props:{
        'todos':Array,
        'removeItem':Function
    },
    components:{
        TodoItem
    }
}
</script>


<style scoped>
    .todo-list{
        margin: auto;
    }
</style>