<template>
    <div class="todo-list">
        <TodoItem v-for='(todo,idx) in todos' :key="idx" :Idx="idx" :todo='todo'/>
    </div>
</template>


<script>
import TodoItem from "@/components/TodoItem.vue"
export default {
    props:{
        'todos':Array,
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