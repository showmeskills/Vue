import Vue from 'vue';
import App from './App.vue';
import {Button,Swipe} from 'mint-ui'

Vue.component(Button.name,Button)
Vue.component(Swipe.name,Swipe)

new Vue({
    el:'#app',
    components:{
        App
    },
    template:'<App/>'
})