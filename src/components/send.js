//引入依赖的库
import Vue from "vue";

export default Vue.component('AISend', {
	props: {
        sendHandler:Function,
	},

	data (){
		return {
           message:"",
		}
	},
	beforeMount (){

	},
	mounted (){
        let vm = this;
		document.addEventListener("keydown",function(event){
            var target = document.activeElement;
            if(event.keyCode==13){
                if(target.name=="input-box"){
                    vm.send();
                }
            }
        });
	},

	methods:{
		send(){
            this.sendHandler(this.message);
            this.$el.querySelector(".input-box").value = "";
            this.message = "";
        },
        inputMessage(){
            this.message = this.$el.querySelector(".input-box").value;
        }
	},

	render (h) {
        
    	return (
            <div class="send">
                <img class="speak" src={require("../images/speak.png")} />
                <input onInput={this.inputMessage} name="input-box" class="input-box" placeholder="输入你感兴趣的内容" type="text" />
                <img onClick={this.send} class="send-btn" src={require("../images/send.png")} />
    		</div>
    	)
  	}
})
