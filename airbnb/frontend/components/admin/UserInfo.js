const{ControllPanelUserInfo}={
    "ControllPanelUserInfo":{
        template: `
        <div class="app-admin-doarddash-user-info">
            <div class='app-admin-doarddash-user-info-container'>
            
            <editpage v-show="isShow" 
                :handleShowCli="handleShowCli"
                :editClientList="editClientList"
            ></editpage>

            <editpage-host v-show="isShowHost"
                :handleShowHost="handleShowHost"
                :editHostList="editHostList"
            ></editpage-host>

                <div v-if="clientList === null && hostList === null" >
                    <div class="app-admin-doarddash-accommodations-name">
                        <h1 style="color:#fff">there are not any data!!!</h1>
                    </div>
                </div>
                <div v-else class="app-admin-doarddash-user-info-div">
                    <ul class="app-admin-doarddash-user-info-cli-container">
                        <li class="app-admin-boarddash-user-info-cli"
                        v-for="(client,idx) in clientList" :key="client.id"
                            :class="idx === index? 'active':''"
                            @mouseenter="enter(idx)"
                        >
                            <div class="app-admin-boarddash-user-container">
                                <p  :class="idx === index? 'active':''">fistname:{{client.firstname}}</p>
                                <p  :class="idx === index? 'active':''">lastname:{{client.lastname}}</p>
                                <p  :class="idx === index? 'active':''">email:{{client.clientemail}}</p>
                                <p  :class="idx === index? 'active':''">user level:{{client.level}}</p>
                            </div>
                            <div class="app-admin-doarddash-use-cli-btn-container">
                                <button
                                    class="app-admin-doarddash-use-cli-btn"
                                    @click="editClient(client.id)"
                                >Edit</button>
                                <button
                                    class="app-admin-doarddash-use-cli-btn"
                                    @click="deleteClient(client.id)"
                                >Delete</button>
                            </div>
                        </li>
                    </ul>
                    <ul class="app-admin-doarddash-user-info-host-container">
                        <li class="app-admin-boarddash-user-info-host"
                        v-for="(host,idx) in hostList" :key="host.id"
                            :class="idx === index1? 'active':''"
                            @mouseenter="enter1(idx)"
                        >   
                            <div class="app-admin-boarddash-host-container" style='padding-bottom:10px;'>
                                <p  :class="idx === index1? 'active':''">fistname:{{host.firstname}}</p>
                                <p  :class="idx === index1? 'active':''">lastname:{{host.lastname}}</p>
                                <p  :class="idx === index1? 'active':''">email:{{host.hostemail}}</p>
                                <p  :class="idx === index1? 'active':''">user level:{{host.level}}</p>
                                <p  :class="idx === index1? 'active':''">ABN:{{host.abn}}</p>
                            </div>
                            <div class="app-admin-doarddash-use-host-btn-container">
                                <button class="app-admin-doarddash-use-host-btn" @click="editHost(host.id)">
                                    Edit
                                </button>
                                <button class="app-admin-doarddash-use-host-btn" @click="deleteHost(host.id)">
                                    Delete
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
         </div>
        `,
        data(){
            return{
                clientList:null,
                hostList:null,
                index:0,
                index1:0,
                isShow:false,
                editClientList:null,
                isShowHost:false,
                editHostList:null,
            }
        },
        components:{
            "editpage":{
                template:`
                    <div class="app-admin-doarddash-user-info-editpage">
                        <i class="iconfont icon-yuanxingdacha" @click="handleShowCli"></i>
                        <form class="app-admin-doarddash-user-info-editpage-form" @submit.prevent>
                            <div class="form-group">
                                <input type="hidden" name='id' 
                                    v-model="cliId"
                                >
                                <label>firstname:</label><input type="text" style="height:20px;" class="form-control" 
                                    v-model="cliFirstname"
                                />
                                <br>
                                <label>last name:</label><input type="text" style="height:20px;" class="form-control"
                                    v-model = "cliLastname"
                                />
                                <br>
                                <label>email:</label><input type="text" style="height:20px;" class="form-control" 
                                    v-model="cliEmail"
                                />
                                <br>
                                <label>level:</label><input type="text" style="height:20px;" class="form-control" 
                                    v-model="cliLevel"
                                />
                                <br>
                                <button class="btn btn-default" @click="updateCli">update</button>
                            </div>
                        </form>
                    </div>
                
                `,
                data(){
                   
                    return{
                        cliId:null,
                        cliFirstname:"",
                        cliLastname:"",
                        cliEmail:"",
                        cliLevel:"",
                    }
                },
                props:{
                    "handleShowCli":{
                        type:Function,
                        isRequired:true
                    },
                    "editClientList":{
                        type:Array,
                        isRequired:true
                    }
                },
                methods:{
                    updateCli(){
                        const {cliId,cliFirstname,cliLastname,cliEmail,cliLevel}=this;
                        if(cliId&&cliFirstname&&cliLastname&&cliEmail&&cliLevel){
                            var params = new URLSearchParams();
                            params.append('cliId', cliId)
                            params.append('cliFirstname', cliFirstname)
                            params.append('cliLastname', cliLastname)
                            params.append('cliEmail', cliEmail)
                            params.append('cliLevel', cliLevel)
                            axios.post('http://localhost/502webdeveloper/backend/api/updateclientinfo.php',params)
                            .then(res=>{
                                if(res.data.error === false && res.data.status === 0){
                                    toastr.success(`id is ${cliId} user info has been${res.data.message}`);
                                    this.handleShowCli();
                                    setTimeout(()=>window.location.reload(),500)
                                }
                            })

                        }else{ 
                            toastr.error("please complete the form");
                        }
                    }
                },
                watch:{
                    "editClientList":{
                        handler(value){
                            value.forEach(item=>{
                               this.cliId = item.id;
                               this.cliFirstname = item.firstname;
                               this.cliLastname = item.lastname;
                               this.cliEmail = item.clientemail;
                               this.cliLevel = item.level;
                            })
                        },
                    }
                },
            },
            "editpageHost":{
                template:`
                    <div class="app-admin-doarddash-user-info-editpage">
                        <i class="iconfont icon-yuanxingdacha" @click="handleShowHost"></i>
                        <form class="app-admin-doarddash-user-info-editpage-form" @submit.prevent>
                            <div class="form-group">
                                <input type="hidden" name='id' 
                                    v-model="hostId"
                                >
                                <label>firstname:</label><input type="text" style="height:20px;" class="form-control" 
                                    v-model="hostFirstname"
                                />
                                <br>
                                <label>last name:</label><input type="text" style="height:20px;" class="form-control"
                                   v-model="hostLastname"
                                />
                                <br>
                                <label>email:</label><input type="text" style="height:20px;" class="form-control" 
                                    v-model="hostEmail"
                                />
                                <br>
                                <label>level:</label><input type="text" style="height:20px;" class="form-control" 
                                   v-model="hostLevel"
                                />
                                <br>
                                <label>ANB:</label><input type="text" style="height:20px;" class="form-control" 
                                   v-model="hostABN"
                                />
                                <br>
                                <button class="btn btn-default" @click="updateHost">update</button>
                            </div>
                        </form>
                    </div>
                
                `,
                data(){
                   
                    return{
                      hostId:null,
                      hostFirstname:"",
                      hostLastname:"",
                      hostEmail:"",
                      hostLevel:"",
                      hostABN:'',
                    }
                },
                props:{
                    "handleShowHost":{
                        type:Function,
                        isRequired:true
                    },
                    "editHostList":{
                        type:Array,
                        isRequired:true
                    }
                },
                methods:{
                    updateHost(){
                        const {hostId,hostFirstname,hostLastname,hostEmail,hostLevel,hostABN}=this;
                        if(hostId&&hostFirstname&&hostLastname&&hostEmail&&hostLevel&&hostABN){
                            var params = new URLSearchParams();
                            params.append('hostId', hostId)
                            params.append('hostFirstname', hostFirstname)
                            params.append('hostLastname', hostLastname)
                            params.append('hostEmail', hostEmail)
                            params.append('hostLevel', hostLevel)
                            params.append('hostABN', hostABN)
                            axios.post('http://localhost/502webdeveloper/backend/api/updatehostinfo.php',params)
                            .then(res=>{
                                console.log(res);
                                if(res.data.error === false && res.data.status === 0){
                                    toastr.success(`id is ${hostId} host info has been${res.data.message}`);
                                    this.handleShowHost();
                                    setTimeout(()=>window.location.reload(),500)
                                }
                            })
                        }else{ 
                            toastr.error("please complete the form");
                        }
                    }
                },
                watch:{
                   "editHostList":{
                       handler(value){
                         value.forEach(item=>{
                             this.hostId=item.id;
                             this.hostFirstname=item.firstname;
                             this.hostLastname=item.lastname;
                             this.hostEmail=item.hostemail;
                             this.hostLevel=item.level;
                             this.hostABN=item.abn;
                         })
                       },
                   }
                    
                },
            }
        },
        mounted(){
            //get client
            axios.get('http://localhost/502webdeveloper/backend/api/collectclientinfo.php')
            .then(res=>{
                this.clientList = res.data.client;
            });
            //get host
            axios.get('http://localhost/502webdeveloper/backend/api/collecthostinfo.php')
            .then(res=>{
                this.hostList = res.data.host
            });

        },
        methods:{
            enter(index) {
                this.index = index;
            },
            enter1(index){
                this.index1 =index;
            },
            editClient(id){
                var params = new URLSearchParams();
                params.append('id', id)
                axios.post('http://localhost/502webdeveloper/backend/api/editclientinfo.php',params)
                .then(res=>{
                    if(res.data.error === false && res.data.status === 0){
                        this.editClientList = res.data.cliInfo;
                    }
                })
                this.isShow = !this.isShow;
            },
            deleteClient(id){
                var params = new URLSearchParams();
                params.append('id', id)
                axios.post('http://localhost/502webdeveloper/backend/api/deleteclient.php',params)
                .then(res=>{
                    console.log(res.data);
                    if(res.data.error === false && res.data.status === 0){
                        const confirm = window.confirm(`Are you sure you want to delete ${id} user?`)
                        if(confirm){
                            toastr.success(`delete ${id} successfully`)
                            axios.get('http://localhost/502webdeveloper/backend/api/collectclientinfo.php')
                            .then(res=>{
                                this.clientList = res.data.client;
                            });
                        }else{
                            toastr.error(`delete failed`)
                        }
                    }
                })
            },
            editHost(id){
                var params = new URLSearchParams();
                params.append('id', id)
                axios.post('http://localhost/502webdeveloper/backend/api/edithostinfo.php',params)
                .then(res=>{
                    if(res.data.error === false && res.data.status === 0){
                        this.editHostList = res.data.hostInfo
                    }
                })
                this.isShowHost = !this.isShowHost;
            },
            deleteHost(id){
                var params = new URLSearchParams();
                params.append('id', id)
                axios.post('http://localhost/502webdeveloper/backend/api/deletehost.php',params)
                .then(res=>{
                    console.log(res.data);
                    if(res.data.error === false && res.data.status === 0){
                        const confirm = window.confirm(`Are you sure you want to delete ${id} host?`)
                        if(confirm){
                            toastr.success(`delete ${id} successfully`)
                            axios.get('http://localhost/502webdeveloper/backend/api/collecthostinfo.php')
                            .then(res=>{
                                this.hostList = res.data.host
                            });
                        }else{
                            toastr.error(`delete failed`)
                        }
                    }
                })
            },
            handleShowCli(){
                this.isShow = !this.isShow;
            },
            handleShowHost(){
                this.isShowHost = !this.isShowHost;
            }
        }
    }
}