<template>
   <li class='text-primary'>
       {{coms.name}} commented: {{coms.content}}
       <button class="btn btn-primary" @click='deleteItem'>delete</button>
   </li>
</template>


<script>
export default {
    props:{ //指定属性名和属性值的类型
        coms:Object,
        deleteComment:Function,
        index:Number
    },
    methods:{
        deleteItem(){
            const {coms,deleteComment,index} = this;
            if(window.confirm(`Are you sure to delete ${coms.name} 's comments?`)){
                deleteComment(index);
            }
        }
    }

}
</script>


<style scoped>
li{
        position: relative;
        width:250px;
        height:100px;
        border:1px solid black;
        line-height: 100px;
        font-size:18px;
    }
    .btn{
        position: absolute;
        top: 0;
        right: 0;
        width:65px;
        height:25px;
        line-height: 1;
    }
</style>