<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    
    <nav class="navbar navbar-expand-lg bg-light fixed-top" v-if="$store.state.navbar">
      <div class="container">
        <router-link class="logo me-auto" :to="{path: '/' ,query:{navb:true}}"><img src="./assets/resumehelper.jpeg" width="157px" height="36px"></router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link style="padding-left: 25px;" class="nav-link" aria-current="page" :to="{path: '/products' ,query:{navb:true}}"><span class="r4">Services</span></router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{path: '/contact' ,query:{navb:true}}"><span class="r4">Contacts</span></router-link>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <button class="btn btn-outline-success" type="submit" @click.prevent="login">Login</button>
            </form>
          </div>
        </div>
    </nav>
    <nav class="navbar navbar-expand-lg bg-light fixed-top" v-if="$store.state.navbar1">
      <div class="container">
        <router-link class="nav-link" :to="{path: '/studhome',query:{sname:this.$route.query.sname,sid:this.$route.query.sid}}"><img src="./assets/resumehelper.jpeg" width="157px" height="36px"></router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link style="padding-left: 25px;" class="nav-link" aria-current="page" :to="{path: '/createresume',query:{sname:this.$route.query.sname,sid:this.$route.query.sid}}"><span class="r4">CreateResume</span></router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{path: '/applyjobs',query:{sname:this.$route.query.sname,sid:this.$route.query.sid}}"><span class="r4">ApplyJobs</span></router-link>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <button class="btn btn-outline-success" type="submit" @click.prevent="logout">Logout</button>
            </form>
          </div>
        </div>
    </nav>
    <nav class="navbar navbar-expand-lg bg-light fixed-top" v-if="$store.state.navbar2">
      <div class="container">
        <router-link class="nav-link" :to="{path: '/recrhome',query:{rname:this.$route.query.rname,rid:this.$route.query.rid}}"><img src="./assets/resumehelper.jpeg" width="157px" height="36px"></router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link style="padding-left: 25px;" class="nav-link" aria-current="page" :to="{path: '/createjob',query:{rname:this.$route.query.rname,rid:this.$route.query.rid}}"><span class="r4">CreateJob</span></router-link>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <button class="btn btn-outline-success" type="submit" @click.prevent="logoutrecr">Logout</button>
            </form>
          </div>
        </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  beforeUpdate(){
    this.navbar=this.$route.query.navb
  },
  data(){
    return{
      navbar: true
    }
  },
  methods:{
    login(){
      this.$router.push({path:"/login", query:{navb:true}})
    },
    logout(){
      this.$store.commit("setNavbar",true);
      this.$store.commit("setNavbar1",false);
      this.$store.commit("setNavbar2",false);
      this.$router.push({path:"/loginstud", query:{navb:true}})
    },
    logoutrecr(){
      this.$store.commit("setNavbar",true);
      this.$store.commit("setNavbar1",false);
      this.$store.commit("setNavbar2",false);
      this.$router.push({path:"/recrlogin", query:{navb:true}})
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;1,400&display=swap');
#app {
  font-family: 'Plus Jakarta Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  
}
#r1{
    color:rgb(17, 17, 250);
      font-size: 28px;
  }
  #r2{
      color: red;
      font-size: 28px;
  }
  .r4{
      color: #482673;
      font-size: 20px;
  }
</style>
