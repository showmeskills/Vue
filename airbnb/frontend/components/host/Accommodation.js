const { ControllPanelAccommodations } = {
    "ControllPanelAccommodations": {
        template: `
        <div class="app-admin-doarddash-accommodations">
            <ul class="app-admin-doarddash-accommodations-container">
                <li v-if="accommodationList.length == 0" class="app-admin-doarddash-accommodations-li" >
                    <div class="app-admin-doarddash-accommodations-name">
                        <h1 style="color:#fff">there are not any data!!!</h1>
                    </div>
                </li >
                <li v-else class="app-admin-doarddash-accommodations-li" 
                    v-for="(accom,idx) in accommodationList" :key="accom.id"
                    :class="idx === index? 'liActive':''"
                        @mouseenter="enter(idx)"
                    >
                    <div class="app-admin-doarddash-accommodations-name"
                        :class="idx === index? 'active':''"
                    >
                        {{accom.apartmentname}}
                    </div>
                    <div style="margin-left:10px">{{accom.address}}</div>
                    <div class="app-admin-doarddash-accommodations-status" 
                        style="margin-left:10px"
                        :class= "accom.status =='true'? 'active' :'' "
                        >
                            {{accom.status =="true"?"check out":"check in"}}
                    </div>
                    <button :class="idx === index? 'active':''" 
                    class="app-admin-doarddash-accommodations-btn"
                    @click="handleEdit(accom.id)"
                    >
                        Edit
                    </button>
                    <button :class="idx === index? 'active':''" 
                    class="app-admin-doarddash-accommodations-btn"
                    @click="handleDelete(accom.id)"
                    >
                        Delete
                    </button>
                </li>
            </ul>
            <editpage v-show="isShow" :is-show="isShow" :edit-list="editList" :handle-show="handleShow"></editpage>
        </div>
        `,
        components: {
            // edit page;
            'editpage': {
                template: `
                    <div class="app-admin-doarddash-accommodations-editpage">
                    <i class="iconfont icon-yuanxingdacha" @click="handleShow"></i>
                    <form class="app-admin-doarddash-accommodations-editpage-form" @submit.prevent>
                        <div class="form-group">
                            <input type="hidden" name='id' v-model='id'>
                            <label>host email:</label><input type="text" style="height:20px;" class="form-control" v-model='hostemail'/>
                            <br>
                            <label>city name:</label><input type="text" style="height:20px;" class="form-control" v-model='cityName'/>
                            <br>
                            <label>address:</label><input type="text"  style="height:20px;" class="form-control" v-model="address"/>
                            <br>
                            <label>apartment name:</label><input type="text"  style="height:20px;" class="form-control" v-model="apartmentName"/>
                            <br>
                            <label>guets number:</label><input type="text" style="height:20px;" class="form-control" v-model="guests"/>
                            <br>
                            <label>rooms:</label><input type="text"  style="height:20px;" class="form-control" v-model="rooms"/>
                            <br>
                            <label>beds:</label><input type="text"  style="height:20px;" class="form-control" v-model="beds"/>
                            <br>
                            <label>kitchen:</label><input type="checkbox" v-model="isKitchen"/>
                            <label>free parking:</label><input type="checkbox" v-model="isParking"/>   
                            <label>pets:</label><input type="checkbox" v-model="isPet"/>
                            <label>smoking:</label><input type="checkbox" v-model="isSmoking"/>
                            <br>
                            <label>status:{{isStatus?"check-out":"check-in"}}</label><input type="checkbox" v-model="isStatus"/>
                            <br>
                            <label>payment status:{{isPayment?"paid" :"not paid"}}</label><input type="checkbox" v-model="isPayment"/>
                            <br>
                            <label>image url:</label><input type="text"  style="height:20px;" class="form-control" v-model="imgUrl"/>
                            <br>
                            <label>price:</label><input type="text"  style="height:20px;" class="form-control" v-model="price"/>
                            <br>
                            <label>avaliable from:</label><input type="date"  style="height:20px;" class="form-control" v-model="avaliable"/>
                            <br> 
                            <label>check-in from:</label><input type="date"  style="height:20px;" class="form-control" v-model="checkin"/>
                            <br>
                            <button class="btn btn-default" @click="update" >update</button>
                        </div>
                    </form>
                    </div>

                `,
                data(){
                    return{
                        id:"",
                        cityName:"",
                        address:"",
                        apartmentName:"",
                        guests:0,
                        rooms:0,
                        beds:0,
                        isKitchen:null,
                        isParking:null,
                        isPet:null,
                        isSmoking:null,
                        imgUrl:"",
                        isStatus:null,
                        isPayment:null,
                        price:"",
                        avaliable:"",
                        checkin:"",
                        hostemail:"",
                    }
                },
                props:{
                    "is-show":{
                        type:Boolean,
                        isRequired:true,
                    },
                    "editList":{
                        type:Array,
                        isRequired:true,
                    },
                    "handleShow":{
                        type:Function,
                        isRequired:true,
                    }
                },
                methods:{
                    //update accommdation data
                     update(){
                        const {
                            id,cityName,address,
                            apartmentName,guests,
                            rooms,beds,isKitchen,isParking,isSmoking,
                            isPet,imgUrl,isStatus,price,avaliable,checkin,isPayment,
                            hostemail
                        } = this;
                        var params = new URLSearchParams();
                        params.append('id', id)
                        params.append('cityName', cityName)
                        params.append('hostemail', hostemail)
                        params.append('address', address)
                        params.append('apartmentName', apartmentName)
                        params.append('guests', guests)
                        params.append('rooms', rooms)
                        params.append('beds', beds)
                        params.append('isKitchen', isKitchen)
                        params.append('isParking', isParking)
                        params.append('isSmoking', isSmoking)
                        params.append('isPet', isPet)
                        params.append('imgUrl', imgUrl)
                        params.append('isStatus', isStatus)
                        params.append('price', price)
                        params.append('avaliable', avaliable)
                        params.append('checkin', checkin)
                        params.append('isPayment', isPayment)
                            if(cityName&&address&&apartmentName&&guests&&rooms&&beds&&price&&avaliable&&checkin){
                                axios.post("http://localhost/502webdeveloper/backend/api/updateaccom.php",params)
                                .then(res=>{
                                    if(res.data.status===0&&res.data.error===false){
                                        toastr.success(`${res.data.message}`);
                                        this.handleShow()
                                    }else{
                                        toastr.error(`${res.data.message}`);
                                    }
                                })
                            }else{
                                toastr.error('completed form');
                            }
                    },
                },
                //into edit page gain data
                watch:{
                    "editList":{
                        handler(value){
                            for(key in value){
                                this.id = value[key].id
                                this.cityName = value[key].cityname;
                                this.address = value[key].address;
                                this.apartmentName = value[key].apartmentname;
                                this.guests = value[key].guests;
                                this.rooms = value[key].rooms;
                                this.beds = value[key].beds;
                                value[key].kitchen =='false'? this.isKitchen = false : this.isKitchen = true;
                                value[key].freeparking =='false'? this.isParking = false : this.isParking = true;
                                value[key].pets == 'false'? this.isPet = false : this.isPet = true;
                                value[key].smoking == 'false'? this.isSmoking = false : this.isSmoking = true;
                                value[key].payment == 'false'? this.isPayment = false : this.isPayment = true;
                                this.imgUrl=value[key].image;
                                value[key].status == 'false'? this.isStatus=false : this.isStatus = true;
                                this.price=value[key].price;
                                this.avaliable = value[key].avaliable.substring(0,10);
                                this.checkin = value[key].checkin.substring(0,10);
                                this.hostemail = value[key].hostemail;
                            }
                        },
                        immediate:true,
                        deeper:true,
                    }
                }
              
            }
        },
        data() {
            return {
                accommodationList:[],
                index: 0,
                isShow:false,
                editList:null
            }
        },
        mounted() {
            axios('http://localhost/502webdeveloper/backend/api/accommodation.php')
                .then(res => {
                    res.data.accommondations.forEach(item=>{
                        if(item.hostemail == this.getHostInfoSessionStorage()[0].hostemail){
                            this.accommodationList.push(item);
                        }
                    })
                })
        },
        methods: {
            enter(index) {
                this.index = index;
                // this.siderBar.length;
            },
            getHostInfoSessionStorage(){
                return JSON.parse(window.sessionStorage.getItem(`hostInfo`));
            },
            //delete data
            handleDelete(id) {
                var params = new URLSearchParams();
                params.append('id', id)
                axios.post("http://localhost/502webdeveloper/backend/api/deleteacomm.php",params)
                .then(res=>{
                    if(res.data.error === false && res.data.status === 0){
                        toastr.success(`id is ${id}, it is to ${res.data.message}`);
                        axios('http://localhost/502webdeveloper/backend/api/accommodation.php')
                        .then(res => {
                            this.accommodationList = res.data.accommondations
                        })
                    }
                })
            },
            //renew data
            handleEdit(id) {
                var params = new URLSearchParams();
                params.append('id', id)
                axios.post('http://localhost/502webdeveloper/backend/api/editacommdation.php', params)
                    .then(res => {
                       this.editList = res.data.accomm
                })
                this.isShow =!this.isShow;
            },
            handleShow(){
                this.isShow = !this.isShow;
            }
        }
    }
}