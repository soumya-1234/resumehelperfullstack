<template>
    <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <br><br><br>
        <section>
            <div class="mask d-flex align-items-center h-100 gradient-custom-3">
                <div class="container h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div class="card" style="border-radius: 15px;">
                                <div class="card-body p-5">
                                    <h2 class="text-uppercase text-center mb-5" style="color:blueviolet;">Create an account for students</h2>
                                    <p class="alert alert-danger" v-if="bool">{{passerr}}</p>
                                    <p class="alert alert-success" v-if="boolr">Registered Successfully</p>
                                    <p class="alert alert-warning" v-if="bool4">Email already registered</p>
                                    <form>
                                        <div class="form-outline mb-4" v-if="boole">
                                        <input type="text" id="form3Example1cg" class="form-control form-control-lg" placeholder="name....." v-model.trim="formdata.name"/>
                                        <label class="form-label" for="form3Example1cg">Your Name</label>
                                        </div>

                                        <div class="form-outline mb-4" v-if="!boole">
                                        <input type="text" style="border:2px solid red;" id="form3Example1cg" class="form-control form-control-lg" placeholder="name....." v-model.trim="formdata.name"/>
                                        <label class="form-label" for="form3Example1cg">Your Name</label>
                                        </div>

                                        <div class="form-outline mb-4" v-if="boole1">
                                        <input type="email" id="form3Example3cg" class="form-control form-control-lg" placeholder="email....." v-model.trim="formdata.email"/>
                                        <label class="form-label" for="form3Example3cg">Your Email</label>
                                        </div>

                                        <div class="form-outline mb-4" v-if="!boole1">
                                        <input type="email" style="border:2px solid red;" id="form3Example3cg" class="form-control form-control-lg" placeholder="email....." v-model.trim="formdata.email"/>
                                        <label class="form-label" for="form3Example3cg">Your Email</label>
                                        </div>

                                        <div class="form-outline mb-4" v-if="boole2">
                                        <input type="password" id="form3Example4cg" class="form-control form-control-lg" placeholder="password....." v-model.trim="formdata.password"/>
                                        <label class="form-label" for="form3Example4cg">Password</label>
                                        </div>

                                        <div class="form-outline mb-4" v-if="!boole2">
                                        <input type="password" style="border:2px solid red;" id="form3Example4cg" class="form-control form-control-lg" placeholder="password....." v-model.trim="formdata.password"/>
                                        <label class="form-label" for="form3Example4cg">Password</label>
                                        </div>

                                        <div class="form-outline mb-4" v-if="boole3">
                                        <input type="password" id="form3Example4cdg" class="form-control form-control-lg" placeholder="confirm password....." v-model.trim="cpassword"/>
                                        <label class="form-label" for="form3Example4cdg">Confirm your password</label>
                                        </div>

                                        <div class="form-outline mb-4" v-if="!boole3">
                                        <input type="password" style="border:2px solid red;" id="form3Example4cdg" placeholder="cofirm password....." class="form-control form-control-lg" v-model.trim="cpassword"/>
                                        <label class="form-label" for="form3Example4cdg">Confirm your password</label>
                                        </div>

                                        <div class="d-flex justify-content-center">
                                            <button type="button"
                                            class="btn btn-success btn-block btn-lg gradient-custom-4 text-body" @click.prevent="createacc">Register</button>
                                        </div>
                                    </form><br>
                                    <strong>Not registered? <router-link :to="{path: '/loginstud' ,query:{navb:true}}">Login</router-link></strong>
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
import Axios from 'axios'
export default{
    name: "SignupstudPage",
    data(){
        return{
            formdata:{
                name: "",
                email: "",
                password: ""
            },
            cpassword: "",
            passerr: "",
            bool: false,
            boolr:false,
            boole:true,
            boole1:true,
            boole2:true,
            boole3: true,
            bool4: false,
            data:[]
        }
    },
    mounted(){
        Axios.get('https://resumehelpbackend.onrender.com/students/get')
        .then((response)=>{
            this.formatPosts(response.data)
            console.log(this.data)
        })
    },
    methods:{
        createacc(){
            var regexname = /^[a-zA-Z ]{3,30}$/;
            var regexemail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            var regexpassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
            if(this.formdata.name==""){
                this.boole=false
            }
            else if(!regexname.test(this.formdata.name)){
                this.boole=false
            }
            else if(this.formdata.email==""){
                this.boole=true
                this.boole1=false
            }
            else if(!regexemail.test(this.formdata.email)){
                this.boole=true
                this.boole1=false
            }
            else if(this.formdata.password==""){
                this.boole=true
                this.boole1=true
                this.boole2=false
            }
            else if(!regexpassword.test(this.formdata.password)){
                this.boole=true
                this.boole1=true
                this.bool=true
                this.passerr="Password must have atleast one special character and one number"
                this.boole2=false
            }
            else if(this.cpassword==""){
                this.bool=false
                this.boole=true
                this.boole1=true
                this.boole2=true
                this.boole3=false
            }
            else if(this.formdata.password==this.cpassword){
                var count=0;
                for(var i=0;i<this.data.length;i++){
                    if(this.data[i].email==this.formdata.email)
                    {
                        this.bool4=true;
                        count++;
                    }
                }
                if(count==0){
                    this.bool4=false
                }
                if(!this.bool4){
                    Axios.post('https://resumehelpbackend.onrender.com/students/create',this.formdata)
                    .then(response=>console.log(response))
                    .catch(error=>console.log(error))
                    this.bool=false
                    this.boole=true
                    this.boole1=true
                    this.boole2=true
                    this.boole3=true
                    this.formdata.name=""
                    this.formdata.email=""
                    this.formdata.password=""
                    this.cpassword=""
                    this.boolr=true
                }
            }
            else{
                this.passerr="Confirm password is not matched with password"
                this.boole=false
                this.boole=true
                this.boole1=true
                this.boole2=true
                this.boole3=true
                this.bool=true
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