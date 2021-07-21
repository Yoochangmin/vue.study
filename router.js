import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";   // Home 컴포넌트를 이용하기 위해
import About from "./views/About"; // About 컴포넌트를 이용하기 위해

Vue.use(VueRouter);  //vue내에서 vuerouter를 사용하겠다는 뜻

export const router  = new VueRouter(  //eslint-disable-line no-unused-vars
  {
    mode: "history",  //모드는 히스토리 좀있다 설명
    router: [
      {path:"/",
      name : 'home',
      component:Home},
         //url 패스가 생성될때 아무것도 없으면 Home component 불러옴
      {path:"About",
      name: 'about',
      component:About}, //path에 About이 있으면 About component를 로밍
    ]     //오브젝트형식으로 생성

}) //실제로
export default router; 