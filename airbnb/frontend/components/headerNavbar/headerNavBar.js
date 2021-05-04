/* nav bar start */

Vue.component("HeaderNavBar", {
    template: `
    <header>
        <div class="header-logo">
            <h1>{{brand}}</h1>
            <div class="header-login">
                <div>
                    <i class="iconfont icon-weidenglutouxiang"></i>
                    <span>{{status}}</span>
                </div>
            </div>
        </div>
        <div class="nav">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item" v-for="titleName in title" :key="titleName.id">
                    <a :href="'./'+titleName.link+'.html'"  class="nav-link" >
                        {{titleName.title}}
                    </a>
                </li>
            </ul>
        </div>
    </header>
 `,
    data() {
        return {
            title: [
                { id: 0, link: "index", title: "Home" },
                { id: 1, link: "accommodation", title: "Accommodation" },
                { id: 2, link: "login", title: "Login" },
            ],
            brand: "Unibnb",
        }
    },
    props:{
        'status':{
            type:String,
            isRequired:true,
        }
    },
    mounted(){
        const navA = document.querySelectorAll(".nav-item a");
        let local = window.location.href;
        for(let i = 0; i < navA.length; i++){
            if(local.toLowerCase() == navA[i].href.toLowerCase()){
                navA[i].parentElement.className = "nav-item active";
            }
        }
    }
})
/* nav bar end */