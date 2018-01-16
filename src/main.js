
/*
引入依赖
*/
import Vue from "vue";
import VueRouter from "vuerouter";

import axios from "axios";

import router from "./components/router.js";
/*
引入sass、less或css
*/

import style from "./scss/style.scss";

Vue.use(VueRouter);

const app = new Vue({  
    router:router,
    render (h){
    	return (
            <router-view></router-view>
    	)
    },  
}).$mount('#app');
