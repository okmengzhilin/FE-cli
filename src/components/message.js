//引入依赖的库
import Vue from "vue";

export default Vue.component('AIMessage', {
	props: {
        position:String,
        title:String,
        text:String,
        datetime:String,
	},

	data (){
		return {
           
		}
	},
	beforeMount (){

	},
	mounted (){
		
	},

	methods:{
		
	},

	render (h) {
        
    	return (
            <div class={"message position-"+this.position}>
                <img class="photo" src={require("../images/ai_photo.png")} alt="" />
                <div class="message-content">
                    {this.title!=""?(<p class="messae-title">{this.title}</p>):""}
                    {this.text!=""?(<p domPropsInnerHTML={this.text} class="messae-info"></p>):""}
                    <span class="datetime">{this.datetime}</span>
                </div>
                <div class="clear-float"></div>
    		</div>
    	)
  	}
})
