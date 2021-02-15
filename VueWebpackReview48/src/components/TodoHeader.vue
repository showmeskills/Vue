<template>
    <div class="todo-header">
        <div class="form-group">
            <input type="text" class="form-control" placeholder="please input your task,and enter to confirm"
            v-model='item' @keyup.enter='renew'/>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            item:''
        }
    },
    methods:{
        renew(){
            let item= this.item.trim();     
            if(!item){
                alert(`please enter your task`);
                return
            }
            const todo = {
                title:item,
                complete:false,
            }
            this.$emit('addItem',todo)
            this.item = '';
        }
    }
}
</script>


<style scoped>
    .form-group{
        margin: 10px;;
    }
</style>