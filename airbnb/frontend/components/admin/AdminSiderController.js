        //sider bar components
        Vue.component('SiderController', {
            template: `
                <ul class="app-admin-sider-bar-container">
                    <li class="app-admin-sider-bar-li" v-for="(title,idx) in siderBar" :key="title.id"
                        :class="idx === index? 'hoverActive':''"
                        @mouseenter="enter(idx)"
                        @click="handleComponents(idx)"
                    >
                        <i class="iconfont" :class="title.icon"></i>
                        {{title.title}}
                    </li>
                </ul>
            
            `,
            data(){
                return{
                    siderBar: [
                        { id: 0, title: "Home", icon: "icon-home" },
                        { id: 1, title: "Booked", icon: "icon-shu" },
                        { id: 2, title: "Comments", icon: "icon-53pinglun-" },
                        { id: 3, title: "Users Info", icon: "icon-icon_xinyong_xianxing_jijin-" },
                        { id: 4, title: "Email Box", icon: "icon-youxiang" },
                        { id: 5, title: "Accommodations", icon: "icon-jiudian" },
                    ],
                    index: 0,
                }
            },
            props:{
                "handleComponents":{
                    type:Function,
                    isRequired:true,
                }
            },
            methods:{
                //gain admin local session
                getLocalStorage: () => JSON.parse(window.localStorage.getItem('Administrator')),
                //hover change css style
                enter(index) {
                    this.index = index;
                }
            }
        })