<template>
    <div class="About">
        <p>{{msg}}</p>
        <input type="text">
    </div>
</template>

<script>
export default {
    props:{
        'msg':String,
    },
    name:'About',
}
</script>