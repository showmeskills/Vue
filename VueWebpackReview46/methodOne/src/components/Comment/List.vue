<template>
    <div class="List">
        <p class="text-primary h1">comment feedback:</p>
        <ul v-if='myComments.length'>
           <Item v-for="(data,idx) in myComments" :key="idx" :coms='data' :deleteComment='deleteComment' :index='idx'/>
        </ul>
        <p v-else class="text-primary ccc">there are no any comments add a new comment</p>
    </div>
</template>

<script>
import Item from "./Item.vue"
export default {
    name:"List",
    props:{
        myComments:Array,
        deleteComment:Function,
    },
    components:{
        Item
    },
    data(){
        return{
        }
    },
}
</script>

<style scoped>
    ul{
        list-style-type: none;
    }
    .ccc{
        font-size:18px;
    }
</style>