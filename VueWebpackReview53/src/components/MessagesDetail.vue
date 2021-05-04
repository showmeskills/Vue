<template>
    <div>
        {{$route.params.id}}
         <ul v-if="messageDetail">
            <li>id:{{messageDetail.id}}</li> 
            <li>title:{{messageDetail.title}}</li> 
            <li>content:{{messageDetail.content}}</li> 
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            messageDetail:{},
        }
    },
    mounted(){
        setTimeout(() =>{
             const allMessages = [
                    {
                        id:1,
                        title:'message01',
                        content: 'message01 content....'
                    },
                    {
                        id:2,
                        title:'message02',
                        content: 'message02 content....'
                    },
                    {
                        id:3,
                        title:'message03',
                        content: 'message03 content....'
                    }
                ]
                this.allMessages = allMessages
                const id = this.$route.params.id*1
                this.messageDetail = allMessages.find(item => item.id === id)
        },1000)
    },
    watch:{
        $route:function(value){
             const id = this.$route.params.id*1
            this.messageDetail = this.allMessages.find(item => item.id === id)
        }
    }
}
</script>