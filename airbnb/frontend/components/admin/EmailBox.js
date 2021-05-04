const{ControllPanelEmailBox}={
    "ControllPanelEmailBox":{
        template: `
        <div class="app-admin-doarddash-email-box">
        <ul class="app-admin-doarddash-email-container">
        <li v-if="emailboxList === null" class="app-admin-doarddash-email-li" >
            <div class="app-admin-doarddash-accommodations-name">
                <h1 style="color:#fff">there are not any email!!!</h1>
            </div>
        </li >
        <li v-else 
            v-for="(email,idx) in emailboxList" :key="email.id"
            :class="idx === index? 'active':''"
            class="app-admin-doarddash-email-li" 
            @mouseenter="enter(idx)"
            >
            <div  class="app-admin-doarddash-email-content" >
                <p>user name:{{email.name}}</p>
                <p>content: {{email.content}}</p>
                <p :class="email.status=='false'?'readAcitve':''"
                >status:{{email.status=='true'?"read":"no read"}}</p>
                <button
                    class="app-admin-doarddash-email-btn"
                    @click="confirmRead(email.id,email.status)"
                >
                    Read
                </button>
            </div>
        </li>
    </ul>
        </div>
        `,
        data(){
            return{
                emailboxList:null,
                index:0,
            }
        },
        //for async request 
        mounted(){
            axios.get('http://localhost/502webdeveloper/backend/api/emailbox.php')
            .then(res=>{
                this.emailboxList=res.data.email;
            })
        },
        methods:{
            enter(index){
                this.index = index;
            },
            confirmRead(id,status){
                var params = new URLSearchParams();
                params.append('id', id)
                if(status == 'false'){
                    params.append('status', 'true');
                    this.post(params)
                }else{
                    params.append('status', 'false');
                    this.post(params)
                }
            },
            post(params){
                axios.post("http://localhost/502webdeveloper/backend/api/updateemail.php",params)
                .then(res=>{
                    if(res.data.error === false && res.data.status === 0){
                        toastr.success('change read successfully')
                        //renew the page
                        axios.get('http://localhost/502webdeveloper/backend/api/emailbox.php')
                        .then(res=>{
                            this.emailboxList=res.data.email;
                        })
                    }
                })
            }
        }
    }
}