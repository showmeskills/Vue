<template>
    <li @mouseenter='enter' @mouseleave='leave'>  
        {{title}}  
        <transition name="fade">
            <div class="price" v-if='isOpen'>
                <p v-for="(item, i) in spanPrice" :key="i">
                    <a href="#" @click="change(i)">{{item}}</a>
                </p>
            </div>
        </transition>
    </li>   
</template>

<script>


export default {
    name:'dropdown',
    components:{
       
    },
    data(){
        return{
            title:'Price',
            isOpen:false,
            spanPrice:['in order to ascend','in order to descend'],
        }
    },
    methods:{
        enter(){
            this.isOpen = !this.isOpen;
        },
        leave(){
            this.isOpen = !this.isOpen;
        },
       change(idx) {
           this.title = this.spanPrice[idx];
           if(this.isOpen){
               this.isOpen = !this.isOpen;
           }
           this.EventAbout(idx)
       },
       EventAbout(i){
           this.$bus.$emit('to-index',i)
       },
    }
}
</script>

<style lang="less">
li:nth-child(4){
    position:relative;
.price{
    position:absolute;
    top: calc(100% + 1px);
    left: 50%;
    transform:translateX(-50%);
    width: 180px;
    font-size: 16px;
    background :#ffffff;
    z-index: 50;
        p{
        border :1px solid #ddd;
        text-align:center;
        height :60px;
        line-height :60px;
        margin-top :10px;
            a{
                text-decoration: none;
                font-size: 16px;
                font-weight: bold;
                color:#222;
            }
        }
    }
}
.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>