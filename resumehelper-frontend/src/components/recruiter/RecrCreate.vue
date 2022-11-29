<template>
    <div>
        <h1 style="color:aqua;">Job Details</h1>
        <section style="padding-top: 55px;">
            <div class="mask d-flex align-items-center h-100 gradient-custom-3">
                <div class="container h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div class="card" style="border-radius: 15px;">
                                <div class="card-body p-5">
                                    <p class="alert alert-danger" v-if="bool">Empty fields are not allowed</p>
                                    <p class="alert alert-success" v-if="bool1">{{message}} Successfully</p>
                                    <form>
                                        <div class="form-outline mb-4">
                                        <input type="text" id="form3Example3cg" class="form-control form-control-lg" v-model.trim="formdata.jtitle"/>
                                        <label class="form-label" for="form3Example3cg">Job Title</label>
                                        </div>

                                        <div class="form-outline mb-4">
                                        <input type="text" id="form3Example4cg" class="form-control form-control-lg" v-model.trim="formdata.skills"/>
                                        <label class="form-label" for="form3Example4cg">Skills</label>
                                        </div>

                                        <div class="form-outline mb-4">
                                        <textarea type="text" id="form3Example4cg" class="form-control form-control-lg" v-model.trim="formdata.jdesc"></textarea>
                                        <label class="form-label" for="form3Example4cg">Job Description</label>
                                        </div>

                                        <div class="d-flex justify-content-center" v-if="bool2">
                                            <button type="button"
                                            class="btn btn-success btn-block btn-lg gradient-custom-4 text-body" @click.prevent="jdetails">Submit</button>
                                        </div>
                                    </form>
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
    name: "RecrCreate",
    data(){
        return{
            formdata:{
                rid: "",
                jtitle: "",
                skills: "",
                jdesc:""
            },
            bool: false,
            bool1: false,
            bool2: true,
            data: [],
            ssid: this.$route.query.rid,
            bid: "",
            message: ""
        }
    },
    methods:{
        jdetails(){
            this.formdata.rid=this.ssid
            if(this.formdata.jtitle==""){
                this.bool=true

            }
            else if(this.formdata.skills==""){
                this.bool=true
                this.bool1=false
            }
            else if(this.formdata.jdesc==""){
                this.bool=true
                this.bool1=false
            }
            else{
                axios.post("https://resumehelpbackend.onrender.com/recruiters/jobdet",this.formdata)
                .then(response=>console.log(response))
                .catch(error=>console.log(error))
                this.bool=false
                this.bool1=true
                this.formdata.jtitle=""
                this.formdata.skills=""
                this.formdata.jdesc=""
                this.message="Submitted"
            }
        }
    }
}
</script>