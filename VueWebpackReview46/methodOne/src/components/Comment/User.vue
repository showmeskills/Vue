<template>
    <div class="user">
        <p class="text-primary h1">username</p>
        <div>
            <input type="text" class="form-control" v-model="obj.name" placeholder="Username">
        </div>
        <p class="text-primary h1">comments</p>
        <textarea class="comment_area form-control" v-model="obj.content" placeholder="content"></textarea>
        <br>
        <button class="btn btn-danger" @click="addData">submit</button>
    </div>
</template>

<script>
export default {
    name: 'user',
    props:{
        addCom:{//指定属性名/属性值的类型/必要性
            type:Function,
            required:true,
        }
    },
    data(){
        return{
            obj:{
                name:'',
                content:''
            }
        }
    },
    methods:{
        addData(){
            const {name,content} = this.obj;
            if(!name.trim() || !content.trim()){
                alert(`name or content is not empty`);
                this.obj = {};
                return;
            }else{
                //this.$bus.$emit('to-comment',this.obj)
                this.addCom(this.obj)
                this.obj = {};
            }
        }
    }
}
</script>

<style scoped>
.use{
    font-size: 25px;
}
.comment_area {
    width:200px;
    height:200px;
}
</style>