const {SearchPopup} = {
    "SearchPopup":{
        template:`
        <div class='app-search-popup-container'>
            <i class="iconfont icon-yuanxingdacha" @click="popClose"></i>
            <div class='app-search-popup-content'>
            <ul class='app-search-popup-ul'>
                <li v-if="listFilter.length === 0"
                class="app-search-popup-li"
                >
                    <h1>sorry,there are not any rooms</h1>
                </li>
                <li v-else
                 class="app-search-popup-li"
                    v-for="(accom,idx) in listFilter" :key="idx"
                >
                    <div class='app-search-popup-img'>
                        <img :src="accom.image" alt="">
                    </div>
                    <div class='app-search-popup-accommo-content'>
                        <p class='app-search-popup-accommo-content-p'>apartment name:{{accom.apartmentname}}</p>
                        <p class='app-search-popup-accommo-content-p'>address:{{accom.address}}</p>
                        <p class='app-search-popup-accommo-content-p'>rooms:{{accom.rooms}}</p>
                        <p class='app-search-popup-accommo-content-p'>guest:{{accom.guests}}</p>
                        <p class='app-search-popup-accommo-content-p'>price:{{accom.price}}</p>
                    </div>
                    <div class='app-search-popup-accommo-content-btn'
                        @click="isLogin(accom.id)"
                    >
                        Book Now
                    </div>
                </li>
            </ul>
        </div>
    </div>
        `,
        props:{
            "popClose":{
                type:Function,
                isRequired:true,
            },
            "listFilter":{
                type:Array,
                isRequired:true,
            },
            "checkin":{
                type:String,
                isRequired:true,
            },
            "checkout":{
                type:String,
                isRequired:true,
            }
        }, 
        methods:{
            isLogin(id){
                if(this.getSessionStorage(`client`)){
                    this.bookSessionStorage(id)
                    this.checkDataSessionStorage()
                    window.location.href= './booking.html'
                }else{
                    if(isConfirm = window.confirm("you aren\'t logged in, would you like to turn login?")){
                        window.location.href="./login.html"
                    }
                }
               
            },
            getSessionStorage(value){
                return window.sessionStorage.getItem(value)
			},
            bookSessionStorage(id){
              let arr= this.listFilter.filter(item=>item.id == id)
              window.sessionStorage.setItem('booking',JSON.stringify(arr));
            },
            checkDataSessionStorage(){
                window.sessionStorage.setItem('checkDate',JSON.stringify(this.checkout+','+this.checkin))
            }
        }       
    }
}