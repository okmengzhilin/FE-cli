//引入依赖的库
import Vue from "vue";
import VueRouter from "vuerouter";

//引入路由组件

import Index from "./index.js";

import Bjdq from "./bjdq.js";


var router = new VueRouter({
	routes:[
	  	{ 	//资源管理
	  		path: '/',
	  		name:"i0",
	  		component:Index,
		  },
		  
		{ 	//资源管理
			path: '/bjdq',
			name:"i1",
			component:Bjdq,
		},
	]
})

export default router;
