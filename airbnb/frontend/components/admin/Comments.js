const{ControllPanelComments}={
    "ControllPanelComments":{
        template: `
        <div class="app-admin-doarddash-comments">
            <ul class='app-admin-doarddash-comments-container'>
                <li v-if="commentsList === null" class="app-admin-doarddash-comments-li" >
                    <div class="app-admin-doarddash-accommodations-name">
                        <h1 style="color:#fff">there are not any data!!!</h1>
                    </div>
                </li >
                <li v-else v-for='(comment,idx) in commentsList' :key="comment.id" class="app-admin-doarddash-comments-li"
                :class="idx === index? 'active':''"
                @mouseenter="enter(idx)"
                >
                    <div class="table-comments-img">
                        <img :src="comment.avatar" alt="">
                    </div>
                    <div class="table-comments-conntent"   
                    >
                        <p :class="idx === index? 'active':''">name:{{comment.username}}</p>
                        <p :class="idx === index? 'active':''">said:{{comment.comments}}</p>
                        <p :class="idx === index? 'active':''">star:{{comment.rate}}</p>
                        <p :class="idx === index? 'active':''">lived:{{comment.checkin.substring(0,10)}} to {{comment.checkout.substring(0,10)}}</p>
                    </div>
                    <button class="app-admin-doarddash-comments-btn"
                        @click="hanleDel(comment.id)"
                    >
                        Delete
                    </button>
                </li>
            </ul>
        </div>
        `,
        data(){
            return{
                commentsList:null,
                index:0,
            }
        },
        mounted(){
            axios.post('http://localhost/502webdeveloper/backend/api/allcomments.php')
                .then(res=>{
                    this.commentsList = res.data.comments;
            })
        },
        methods:{
            enter(index) {
                this.index = index;
            },
            hanleDel(id){
                var params = new URLSearchParams();
                params.append('id', id)
                axios.post("http://localhost/502webdeveloper/backend/api/deletecomments.php",params)
                .then(res=>{
                    if(res.data.error === false && res.data.status === 0){
                        toastr.success(`id is ${id} user, it is to ${res.data.message}`);
                        //renew the page
                        axios.post('http://localhost/502webdeveloper/backend/api/allcomments.php')
                        .then(res=>{
                            this.commentsList = res.data.comments;
                    })
                    }
                })
            }
        }

    },
}