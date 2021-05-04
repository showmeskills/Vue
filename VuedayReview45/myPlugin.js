(()=>{
    const MyPlugin = {};

    MyPlugin.install = function(Vue,options){
        
        Vue.myGlobalMethod = function (){
            console.log(`Vue function objective method myGlobalMethod`)
        }

        Vue.directive('my-directive',function(el,binding){
            el.textContent = binding.value.toUpperCase();
            el.style.color = binding.value;
        })

        Vue.mixin({
            created:function(){

            }
        })

        Vue.prototype.$myMethod = function(methodOptions){
            console.log(`this is a new Vue method`)
        }
    }
    window.MyPlugin = MyPlugin;
})();