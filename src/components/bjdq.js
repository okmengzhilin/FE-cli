//引入依赖的库
import Vue from "vue";
import AIheader from "./header.js";
import AIside from "./side.js";
import AIdialog from "./dialog_bjdq.js";
export default Vue.component('Layout', {
	props: {
		
	},

	data (){
		return {
            windowWidth:"",
            windowHeight:"",
            rightWidth:360,
		}
	},

	methods:{
		setSize(){
            this.windowWidth = window.innerWidth>960?window.innerWidth:960;
            this.windowHeight = window.innerHeight;
        },
    },
    
    beforeMount(){
        let vm = this;

        vm.setSize();

        window.addEventListener("resize",vm.setSize);
        // window.onresize = vm.setSize;
    },

	mounted (){
		document.title="平台业务中心AI";
    },

	render (h) {
    	return (
            <div class="container">
                <div class="left" style={{width:this.windowWidth-this.rightWidth+"px"}}>
                    <AIheader></AIheader>
                    <div class="chat" style={{height:this.windowHeight-70+"px"}}>
                        <AIdialog></AIdialog>
                    </div>
                </div>
        		<div class="right">
                    <AIside></AIside>
                </div>
      		</div>
    	)
  	}
})
