<template>
    <div>
        <ul>
            <router-link tag="li" to='/home' active-class="active">Home</router-link>
            <router-link tag="li" to="/about" active-class="active">About</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
   div ul li {
       list-style-type: none;
   }
   .active{
       color: pink;
   }
</style>