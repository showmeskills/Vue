<template>
    <div>
        <ul>
            <li v-for="data in list" :key="data">
                {{data}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:['new001','new002','new003','new004','new005']
        }
    }
}
</script>

<style scoped>

</style>