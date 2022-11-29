import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Vuerouter from 'vue-router'
import LoginAll from "./components/LoginAll.vue"
import ProductsPage from "./components/ProductsPage.vue"
import MainPage from "./components/MainPage.vue"
import ContactPage from "./components/ContactPage"
import LoginstudentsPage from "./components/LoginstudentsPage.vue"
import SignupstudPage from "./components/SignupstudPage"
import StudentHome from "./components/StudentHome"
import CreateResume from "./components/CreateResume"
import ApplyJobs from "./components/ApplyJobs"
import BasDet from "./components/BasDet"
import AcaDet from "./components/AcaDet"
import SkiDet from "./components/SkiDet"
import ProDet from "./components/ProDet"
import RecruiterLogin from "./components/recruiter/RecruiterLogin.vue"
import RecruiterSignup from "./components/recruiter/RecruiterSignup"
import RecruiterHome from "./components/recruiter/RecruiterHome"
import RecrCreate from "./components/recruiter/RecrCreate"
import RecrDelsuccess from "./components/recruiter/RecrDelsuccess"
import RecrUpdate from "./components/recruiter/RecrUpdate"
import GeneratePdf from "./components/GeneratePdf"
import ApplyParticular from "./components/ApplyParticular"


Vue.config.productionTip = false
Vue.use(Vuerouter)
Vue.use(Vuex)

const store= new Vuex.Store(
  {
    state:{
      authenticated: false,
      recrauthenticated: false,
      navbar: true,
      navbar1: false,
      navbar2: false
    },
    mutations:{
      setAuthentication(state,status){
        state.authenticated=status;
      },
      setRecrauthentication(state,status){
        state.recrauthenticated=status
      },
      setNavbar(state,status){
        state.navbar=status
      },
      setNavbar1(state,status){
        state.navbar1=status
      },
      setNavbar2(state,status){
        state.navbar2=status
      }
    }
  }
);





const routes=[{
  path:'/login', component: LoginAll 
},
{
  path:'/products', component: ProductsPage
},
{
  path:'/', component: MainPage
},
{
  path:'/contact', component: ContactPage
},
{
  path:"/loginstud", 
  name: "loginstud",
  component: LoginstudentsPage
},
{
  path:"/studhome",
  name:"studhome",
  component: StudentHome,
  beforeEnter: (to, from, next)=>{
    if(store.state.authenticated==false){
      next(false);
    }else{
      next();
    }
  }
},
{
  path:"/recrhome",
  name:"recrhome",
  component: RecruiterHome,
  beforeEnter: (to, from, next)=>{
    if(store.state.recrauthenticated==false){
      next(false);
    }else{
      next();
    }
  }
},
{
  path:"/signupstud" , component: SignupstudPage
},
{
  path:"/createresume", component: CreateResume
},
{
  path:"/applyjobs" , component: ApplyJobs
},
{
  path:"/basdet", component: BasDet
},
{
  path:"/acadet", component: AcaDet
},
{
  path:"/skidet", component: SkiDet
},
{
  path:"/prodet", component: ProDet
},
{
  path:"/recrlogin", component: RecruiterLogin
},
{
  path:"/recrsignup", component: RecruiterSignup
},
{
  path:"/createjob", component: RecrCreate
},
{
  path:"/deletesucc", component: RecrDelsuccess
},
{
  path:"/updatejob", component: RecrUpdate
},
{
  path:"/gpdf", component: GeneratePdf
},
{
  path:"/applypart", component: ApplyParticular
}]

const router=new Vuerouter({
  routes
})

new Vue({
  router: router,
  store: store,

  render: h => h(App),
}).$mount('#app')
