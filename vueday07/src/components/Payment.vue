<template>
    <div class="payment">
        Pay:${{price}}
        <div class="return"><router-link to='/home'>Back shopping</router-link></div>
    </div>
</template>
<script>

export default {
    name:'payment',
    components: {
        
    },

    data(){
        return{
            price:0,
        }
    },
    mounted(){
        this.$bus.$on('to-price',data=>{
            this.price = data;
            console.log(data);
        })
    }

}
</script>

<style lang="less">
.return{
    margin-top:10px;
   a {
        text-decoration:none;
        color:black;
        border:1px solid red;
    }
}
</style>