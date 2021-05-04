/* comments component start */
Vue.component("Comments", {
    template: `
    <transition name='fade'>
        <div class="table-comments-container">
            <i class="iconfont icon-chahao" @click="handleShow"></i>
                <ul>
                    <li v-for='comment in comments' :key="comment.id">
                        <div class="table-comments-img">
                            <img :src="comment.avatar" alt="">
                        </div>
                    <div class="table-comments-conntent">
                        <p>name:{{comment.username}}</p>
                        <p>said:{{comment.comments}}</p>
                        <p>star:{{comment.rate}}</p>
                        <p>lived:{{comment.checkin.substring(0,10)}} to {{comment.checkout.substring(0,10)}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </transition>
    `,
    props:{
        "comments":{
            type:Array,
            isRequired:true
        },
        "handleShow":{
            type:Function,
            isRequired:true
        }
    }

})

/* comments component end */