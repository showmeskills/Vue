<template>
    <div class="todo-list">
        <TodoItem v-for='(todo,idx) in mytodos' :key="idx" :item='todo' :index="idx"/>
    </div>
</template>


<script>
import TodoItem from "@/components/TodoItem.vue"
export default {
    props:{
        'mytodos':Array,
    },
    components: {
        TodoItem 
    },
}
</script>


<style scoped>
    .todo-list{
        margin: auto;
    }
</style>