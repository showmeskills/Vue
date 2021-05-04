<template>
    <div class="Home">
        <ul>
            <router-link to="/home/news">news</router-link>
            <router-link to="/home/messages">messages</router-link>
            <router-view/>
        </ul>
    </div>
</template>

<script>
export default {
    name:"Home"
}
</script>