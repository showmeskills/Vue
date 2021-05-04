<template>
    <div class="List">
        <p class="text-primary h1">feedback:</p>
        <ul v-if='myComments.length'>
            <li class="text-primary" v-for="(data,idx) in dataList" :key="idx">
                {{data.name}} <span>commented:</span> {{data.content}}
                <button class="btn btn-primary" @click="delComments(idx)">delete</button>
            </li>
        </ul>
        <p v-else class="text-primary ccc">there are no any comments add a new comment</p>
    </div>
</template>

<script>
export default {
    name:"List",
    props:{
        myComments:Array,
    },
    data(){
        return{
            dataList:this.myComments
        }
    },
    mounted() {   
        this.$bus.$on('to-comment',(data)=>{
            this.dataList.push(data);
       })
    },
    methods:{
        delComments(idx){
            const {myComments} = this;
            let choose = window.confirm(`Are you sure to delete ${myComments[idx].name} 's comments?`)
            if(choose){
                myComments.splice(idx,1)
            }
        }
    }
}
</script>

<style scoped>
    ul{
        list-style-type: none;
    }
    .ccc{
        font-size:18px;
    }
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