const{HostBooking}={
    "HostBooking":{
        template: `
        <div class="app-admin-doarddash-booked">
        <ul class="app-admin-doarddash-booked-container">
        <li v-if="accommodationList.length === 0" class="app-admin-doarddash-booked-li" >
            <div class="app-admin-doarddash-accommodations-name">
                <h1 style="color:#fff">there are not any data!!!</h1>
            </div>
        </li >
        <li v-else class="app-admin-doarddash-booked-li" 
            :class="idx === index? 'liActive':''"
            v-for="(booking,idx) in accommodationListFilter" :key="booking.id"
                @mouseenter="enter(idx)"
            >   
            <div class="app-admin-doarddash-booked-content" 
            >
                <p :class="idx === index? 'active':''">apartment:{{booking.apartmentname}}</p>
                <p :class="idx === index? 'active':''">tenant:{{booking.email}}</p>
                <p :class="idx === index? 'active':''">firstname:{{booking.firstname}}</p>
                <p :class="idx === index? 'active':''">lastname:{{booking.lastname}}</p>
                <p :class="idx === index? 'active':''">night stay(s):{{booking.night}}day(s)</p>
                <p :class="idx === index? 'active':''">guests:{{booking.guests}} person(s)</p>
            </div>

            <div>
                <button style="background-color:orange; border:none; font-weight:600;"
                    @click="confirmOrder(booking.id)"
                >Confirm order</button>
            </div>
        </li>
        </ul>
     </div>
        `,
        data(){
            return{
                accommodationList:[],
                index:0,
            }
        },
        mounted(){
            axios('http://localhost/502webdeveloper/backend/api/hostcheckbooking.php')
            .then(res => {
                this.accommodationList = res.data.booking;
            })
        },
       methods:{
        enter(index) {
            this.index = index;
        },
        getHostInfoSessionStorage(){
            return JSON.parse(window.sessionStorage.getItem(`hostInfo`));
        },
        confirmOrder(id){
            var params = new URLSearchParams();
            params.append('id', id)
            axios.post(`http://localhost/502webdeveloper/backend/api/hostconfirmorder.php`,params)
            .then(res=>{
                if(res.data.error===false&&res.data.status===0){
                    toastr.success(`confirm successfully`)
                    axios('http://localhost/502webdeveloper/backend/api/hostcheckbooking.php')
                    .then(res => {
                        this.accommodationList = res.data.booking;
                    })
                }
            })
        }
       },
       computed:{
        accommodationListFilter(){
            let arr = [];
            this.accommodationList.filter(item=>{
              if(this.getHostInfoSessionStorage()[0].hostemail== item.hostemail && item.status=='pending'){
                arr.push(item);
              }
            })
            return arr
        }
       }
    },
}