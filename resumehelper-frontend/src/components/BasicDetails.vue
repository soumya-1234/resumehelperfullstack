<template>
    <div>
        <br>
        <h1 style="color:aqua;">Basic Details</h1>
        <section>
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
                                        <input type="text" id="form3Example3cg" class="form-control form-control-lg" v-model.trim="formdata.mobile"/>
                                        <label class="form-label" for="form3Example3cg">Mobile No</label>
                                        </div>

                                        <div class="form-outline mb-4">
                                        <input type="text" id="form3Example4cg" class="form-control form-control-lg" v-model.trim="formdata.address"/>
                                        <label class="form-label" for="form3Example4cg">Address</label>
                                        </div>

                                        <div class="form-outline mb-4">
                                        <input type="text" id="form3Example4cg" class="form-control form-control-lg" v-model.trim="formdata.website"/>
                                        <label class="form-label" for="form3Example4cg">Linkedin Profile or Website</label>
                                        </div>

                                        <div class="d-flex justify-content-center" v-if="bool2">
                                            <button type="button"
                                            class="btn btn-success btn-block btn-lg gradient-custom-4 text-body" @click.prevent="bdetails">Submit</button>
                                        </div>
                                        <div class="d-flex justify-content-center" v-if="!bool2">
                                            <button type="button"
                                            class="btn btn-warning btn-block btn-lg gradient-custom-4 text-body" @click.prevent="bdetailsupdate">Update</button>
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
    name: "BasicDetails",
    data(){
        return{
            formdata:{
                sid: "",
                mobile: "",
                address: "",
                website:""
            },
            bool: false,
            bool1: false,
            bool2: true,
            data: [],
            ssid: this.$route.query.sid,
            bid: "",
            message: ""
        }
    },
    beforeMount(){
        axios.get('https://resumehelpbackend.onrender.com/students/basicdetget')
        .then((response)=>{
            this.formatPosts(response.data)
            console.log(this.data)
            this.checksid()
        })
    },
    props:{
        msg: String
    },
    methods:{
        bdetails(){
            this.formdata.sid=this.msg
            if(this.formdata.mobile==""){
                this.bool=true
            }
            else if(this.formdata.address==""){
                this.bool=true
                this.bool1=false
            }
            else if(this.formdata.website==""){
                this.bool=true
                this.bool1=false
            }
            else{
                axios.post("https://resumehelpbackend.onrender.com/students/basicdetcreate",this.formdata)
                .then(response=>console.log(response))
                .catch(error=>console.log(error))
                this.bool=false
                this.bool1=true
                this.formdata.mobile=""
                this.formdata.address=""
                this.formdata.website=""
                this.message="Submitted"
            }
        },
        formatPosts(postData){
            for (let key in postData){
                this.data.push({...postData[key],id:key});
            }
        },
        checksid(){
            for(var i=0;i<this.data.length;i++){
                console.log(this.ssid)
                console.log(this.data[i].sid)
                if(this.data[i].sid==this.ssid){
                    this.bool2=false
                    this.formdata.mobile=this.data[i].mobile
                    this.formdata.address=this.data[i].address
                    this.formdata.website=this.data[i].website
                    this.bid=this.data[i]._id
                }
            }
        },
        bdetailsupdate(){
            if(this.formdata.mobile==""){
               this.bool=true
               this.bool1=false
            }
            else if(this.formdata.address==""){
                this.bool=true
                this.bool1=false
            }
            else if(this.formdata.website==""){
                this.bool=true
                this.bool1=false
            }
            else{
                this.formdata.sid=this.ssid;
                axios.put("https://resumehelpbackend.onrender.com/students/basicupdate/"+this.bid,this.formdata)
                .then(response=>console.log(response))
                .catch(error=>console.log(error))
                this.bool=false
                this.bool1=true
                this.message="Updated"
            }
        }
    }
}
</script>