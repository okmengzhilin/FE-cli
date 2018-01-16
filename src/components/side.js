//引入依赖的库
import Vue from "vue";

export default Vue.component('AISide', {

	data (){
		return {
            menu:[
                {name:"服务咨询",icon:"fwzx.png",url:"javascript:void(0)"},
                {name:"在线问诊",icon:"zxwz.png",url:"javascript:void(0)"},
                {name:"吃土有小AI",icon:"ctyxa.png",url:"javascript:void(0)"},
            ],

            favorite:[
                {image:"../images/test.png",url:"javascript:void(0)"},
                {image:"../images/test.png",url:"javascript:void(0)"},
                {image:"../images/test.png",url:"javascript:void(0)"},
                {image:"../images/test.png",url:"javascript:void(0)"},
            ],
		}
	},

	render (h) {
        let menu = this.menu.map((item,i)=>{
            return (
                <div class="menu-item">
                    <a href={item.url}><img src={require("../images/"+item.icon)} alt="" /></a>
                    <span class="menu-name">{item.name}</span>
                </div>
            )
        });

        let favorite = this.favorite.map((item,i)=>{
            return (
                <a href={item.url}>
                    <img class="favorite-item" src={require("../images/test.png")} alt="" />
                </a>
            )
        });
    	return (
              <div class="side">

                <div class="side-item">
                    <span class="item-title">发现</span>
                    <div class="item-menu-box">
                        {menu}
                    </div>
                </div>

                <div class="side-item">
                    <span class="item-title">猜你喜欢</span>
                    <div class="item-menu-box">
                        {favorite}
                    </div>
                </div>
  				
    		</div>
    	)
  	}
})
