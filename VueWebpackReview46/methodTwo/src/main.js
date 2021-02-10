import Vue from 'vue';
import App from './App.vue';
Vue.prototype.$bus = new Vue();
new Vue({
    el:'#app',
    components:{
        App
    },
    template:'<App/>'
})