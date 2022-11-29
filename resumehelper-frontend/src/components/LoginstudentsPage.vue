<template>
    <div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        
        <section style="padding-top:90px;">
            
            <div class="mask d-flex align-items-center h-100 gradient-custom-3">
                <div class="container h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div class="card" style="border-radius: 15px;">
                                <div class="card-body p-5">
                                    <h2 class="text-uppercase text-center mb-5" style="color:blueviolet;">Login For Students</h2>
                                    <p class="alert alert-danger" v-if="bool" >Invalid password or email</p>
                                    <form>
          
                                        <div class="form-outline mb-4" v-if="boole">
                                        <input type="email" id="form3Example3cg" class="form-control form-control-lg" placeholder="email....." v-model.trim="email"/>
                                        <label class="form-label" for="form3Example3cg">Your Email</label>
                                        </div>

                                        <div class="form-outline mb-4" v-if="!boole">
                                        <input type="email" style="border:2px solid red;" id="form3Example3cg" class="form-control form-control-lg" placeholder="email....." v-model.trim="email"/>
                                        <label class="form-label" for="form3Example3cg">Your Email</label>
                                        </div>

                                        <div class="form-outline mb-4" v-if="boole1">
                                        <input type="password" id="form3Example4cg" class="form-control form-control-lg" placeholder="password....." v-model.trim="password"/>
                                        <label class="form-label" for="form3Example4cg">Password</label>
                                        </div>

                                        <div class="form-outline mb-4" v-if="!boole1">
                                        <input type="password" style="border:2px solid red;" id="form3Example3cg" class="form-control form-control-lg" placeholder="password....." v-model.trim="password"/>
                                        <label class="form-label" for="form3Example3cg">Password</label>
                                        </div>

                                        <div class="d-flex justify-content-center">
                                            <button type="button"
                                            class="btn btn-success btn-block btn-lg gradient-custom-4 text-body" @click.prevent="login">Login</button>
                                        </div>
                                    </form><br>
                                    <strong>Not registered? <router-link :to="{path: '/signupstud' ,query:{navb:true}}">Sign Up</router-link></strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    name: "LoginstudentsPage",
    data(){
      return{
        email:"",
        studname: "",
        studid: "",
        password:"",
        boole: true,
        boole1:true,
        bool: false,
        auth: false,
        data:[]
      }
    },
    mounted(){
        axios.get('https://resumehelpbackend.onrender.com/students/get')
        .then((response)=>{
            this.formatPosts(response.data)
            console.log(this.data)
        })
      },
    methods:{
      login(){
        if(this.email==""){
          this.bool=false
          this.boole=false
        }
        else if(this.password==""){
          this.bool=false
          this.boole=true
          this.boole1=false
        }
        else if(this.email!="" && this.password!=""){
          for(var i=0;i<this.data.length;i++){
            if(this.data[i].email==this.email && this.data[i].password==this.password){
              this.studname=this.data[i].name
              this.studid=this.data[i]._id
              this.auth=true
            }
          }
          if(this.auth){
            this.$store.commit("setAuthentication",true);
            this.$store.commit("setNavbar",false);
            this.$store.commit("setNavbar1",true);
            this.$router.replace({name: "studhome", query:{navb:false,sname: this.studname,sid: this.studid}});
          } 
          else{
            this.boole=true
            this.boole1=true
            this.bool=true
          }
        }
      },
      formatPosts(postData){
            for (let key in postData){
                this.data.push({...postData[key],id:key});
            }
        }
    }
}
</script>

<style scoped>


</style>