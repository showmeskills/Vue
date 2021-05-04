<template>
    <div id="app">
       <Comment/>
    </div>
</template>

<script>
import Comment from "@/components/comment.vue"
export default {
    components: {
       Comment
    }
}
</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }
    .logo{
        width:200px;
        height:200px;
    }
</style>