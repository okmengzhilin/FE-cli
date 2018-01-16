//引入依赖的库
import Vue from "vue";

import Message from "./message.js";
import Send from "./send.js";

export default Vue.component('AIDialog', {
	props: {
		
	},

	data (){
		return {
            windowHeight:"",
            message:[],

            socket:null,
            isLeave:false,
		}
	},
	beforeMount (){
        let vm = this;
        vm.setSize();
        window.addEventListener("resize",vm.setSize);
	},
	mounted (){
        let vm = this;
        vm.$el.querySelector(".dialog-message").scrollTop=vm.$el.querySelector(".dialog-message").scrollHeight;
    },
    
    updated(){
        this.$el.querySelector(".dialog-message").scrollTop=this.$el.querySelector(".dialog-message").scrollHeight;
    },

	methods:{
		setSize(){
            this.windowHeight = window.innerHeight;
        },
        sendHandler(message){
            
        },
	},

	render (h) {
        let message = this.message.map((item,i)=>{
            return (<Message title={item.title?item.title:""} text={item.text} position={item.position} datetime={item.datetime}></Message>)
        })
    	return (
              <div class="dialog">

                <div class="dialog-message" style={{height:this.windowHeight-70-80+"px"}}>
                    {message}
                </div>
  				<Send sendHandler={this.sendHandler}></Send>
    		</div>
    	)
  	}
})
