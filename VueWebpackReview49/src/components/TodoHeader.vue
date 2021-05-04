<template>
    <div class="todo-header">
        <div class="form-group">
            <input type="text" class="form-control" placeholder="请输入你的任务名称,按回车确认"
            v-model="title" @keyup.enter='addItem'>
        </div>
    </div>
</template>


<script>
export default {
    props:{
        //"addTodo":Function
    },
    data(){
        return{
            title:''
        }
    },
    methods:{
        addItem(){
            //1.检查输入合法性
            let title = this.title.trim();
            if(!title){
                alert('必须输入');
                return
            }
            //2.根据输入生成一个todo对象
            const todo = {
                title,
                complete:false
            }
            //3.添加到todos
            //this.addTodo(todo)
            this.$emit('addTodo',todo)
            //4.清除输入
            this.title = '';
            
        }
        
    }
}
</script>


<style scoped>
    .form-group{
        margin: 10px;;
    }
</style>