const{ControllPanelBooked}={
    "ControllPanelBooked":{
        template: `
        <div class="app-admin-doarddash-booked">
        <ul class="app-admin-doarddash-booked-container">
        <li v-if="accommodationList === null" class="app-admin-doarddash-booked-li" >
            <div class="app-admin-doarddash-accommodations-name">
                <h1 style="color:#fff">there are not any data!!!</h1>
            </div>
        </li >
        <li v-else class="app-admin-doarddash-booked-li" 
            :class="idx === index? 'liActive':''"
            v-for="(accom,idx) in accommodationListFilter" :key="accom.id"
                @mouseenter="enter(idx)"
            >   
            <div class="app-admin-doarddash-booked-content" 

            >
                <p  :class="idx === index? 'active':''">apartment:{{accom.apartmentname}}</p>
                <p :class="idx === index? 'active':''">check-out:{{accom.avaliable.substring(0,10)}}</p>
                <p :class="idx === index? 'active':''">check-in:{{accom.checkin.substring(0,10)}}</p>
                <p :class="idx === index? 'active':''">paid:{{accom.payment}} </p> 
                <p :class="idx === index? 'active':''">contact:{{accom.hostemail}}</p>    
            </div>
        </li>
        </ul>
     </div>
        `,
        data(){
            return{
                accommodationList:null,
                index:0,
            }
        },
        mounted(){
            axios('http://localhost/502webdeveloper/backend/api/accommodation.php')
            .then(res => {
                this.accommodationList = res.data.accommondations
            })
        },
       methods:{
        enter(index) {
            this.index = index;
            // this.siderBar.length;
        },
       },
       //filter some accomm info
       computed:{
        accommodationListFilter(){
            let arr = [];
            this.accommodationList.filter(item=>{
                if(item.status === "false"){
                    arr.push(item)
                }
            })
            return arr
        }
       }
    },
}