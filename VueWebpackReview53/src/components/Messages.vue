<template>
    <div>
        <ul>
            <li v-for="message in messages" :key="message.id">
                <router-link :to='`/home/messages/detail/${message.id}`'>{{message.title}}</router-link>
                <button @click='showPush(message.id)'>router-push</button>
                <button @click="showReplace(message.id)">router-replace</button>
            </li>
            <button @click="$router.back()">router-back</button>
            <router-view/>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            messages:{},
        }
    },
    mounted(){
        setTimeout(() =>{
             const messages = [
                {
                    id:1,
                    title:'message01'
                },
                {
                    id:2,
                    title:'message02'
                },
                {
                    id:3,
                    title:'message03'
                }
            ]
            return this.messages = messages;
        },1000)
    },
    methods:{
        showPush(id){
            this.$router.push(`/home/messages/detail/${id}`)
        },
        showReplace(id){
            this.$router.push(`/home/messages/detail/${id}`)
        }
    }
}
</script>

<style scoped>

</style>