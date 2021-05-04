const{Release}={
    "Release":{
        template: `
        <div class="app-admin-doarddash-comments">
            <release-panel></release-panel>
        </div>
        `,
        data(){
            return{
                emailboxList:null,
                index:0,
            }
        },
        components:{
            "ReleasePanel":{
                template:`
                <div class="app-admin-doarddash-accommodations-editpage"
                    style="width:50vw; left:57.5%; border-radius:16px;margin-left: 2px;"
                >
                <form class="app-admin-doarddash-accommodations-editpage-form" @submit.prevent>
                    <div class="form-group">
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
                        <button class="btn btn-default" @click="publish" >update</button>
                    </div>
                </form>
                </div>
                `,
                data(){
                    return{
                        cityName:"",
                        address:'',
                        apartmentName:"",
                        guests:0,
                        rooms:0,
                        beds:0,
                        isKitchen:false,
                        isParking:false,
                        isPet:false,
                        isSmoking:false,
                        isStatus:false,
                        isPayment:false,
                        imgUrl:'',
                        price:"",
                        avaliable:"",
                        isShow:true,
                    }
                },
                methods:{
                    // release a new accommodation info
                    publish(){
                        const hostemail =this.getSessionStorage()[0].hostemail;
                        const {
                            cityName,address,
                            apartmentName,guests,
                            rooms,beds,isKitchen,isParking,isSmoking,
                            isPet,imgUrl,isStatus,price,avaliable,checkin,isPayment,
                        } = this;
                        var params = new URLSearchParams();
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
                        params.append('isPayment', isPayment)
                            if(cityName&&address&&apartmentName&&guests&&rooms&&beds&&price&&avaliable){
                                axios.post("http://localhost/502webdeveloper/backend/api/publishaccommondation.php",params)
                                .then(res=>{
                                    console.log(res);
                                    if(res.data.status===0&&res.data.error===false){
                                        toastr.success(`${res.data.message}`);
                                    }else{
                                        toastr.error(`${res.data.message}`);
                                    }
                                })
                            }else{
                                toastr.error('completed form');
                            }
                    },
                    getSessionStorage(){
                        return JSON.parse(window.sessionStorage.getItem('hostInfo'));
                    },
                }
            }
        },
        methods:{
            enter(index){
                this.index = index;
            },
        }
    }
}