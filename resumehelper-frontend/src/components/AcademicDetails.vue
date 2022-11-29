<template>
    <div>
        <br>
        <h1 style="color: aqua;">Academic Details</h1>
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
                                        <input type="number" id="form3Example3cg" class="form-control form-control-lg" v-model.trim="formdata.percentage"/>
                                        <label class="form-label" for="form3Example3cg">10th Percentage</label>
                                        </div>

                                        <div class="form-outline mb-4">
                                        <input type="number" id="form3Example4cg" class="form-control form-control-lg" v-model.trim="formdata.percentage1"/>
                                        <label class="form-label" for="form3Example4cg">12th Percentage</label>
                                        </div>

                                        <div class="form-outline mb-4">
                                        <input type="number" id="form3Example4cg" class="form-control form-control-lg" v-model.trim="formdata.percentage2"/>
                                        <label class="form-label" for="form3Example4cg">Graduation Percentage</label>
                                        </div>

                                        <div class="d-flex justify-content-center" v-if="bool2">
                                            <button type="button"
                                            class="btn btn-success btn-block btn-lg gradient-custom-4 text-body" @click.prevent="adetails">Submit</button>
                                        </div>
                                        <div class="d-flex justify-content-center" v-if="!bool2">
                                            <button type="button"
                                            class="btn btn-warning btn-block btn-lg gradient-custom-4 text-body" @click.prevent="adetailsupdate">Update</button>
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
        name: "AcademicDetails",
        data(){
            return{
                formdata:{
                    sid:"",
                    percentage: null,
                    percentage1: null,
                    percentage2: null
                },
                ssid: this.$route.query.sid,
                bool: false,
                bool1: false,
                bool2: true,
                message: "",
                data: [],
                aid: ""
            }
        },
        beforeMount(){
            axios.get('https://resumehelpbackend.onrender.com/students/academicdetget')
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
            adetails(){
                this.formdata.sid=this.msg
                if(this.formdata.percentage==null){
                    this.bool=true
                    this.bool1=false
                }
                else if(this.formdata.percentage1==null){
                    this.bool=true
                    this.bool1=false
                }
                else if(this.formdata.percentage2==null){
                    this.bool=true
                    this.bool1=false
                }
                else{
                    axios.post("https://resumehelpbackend.onrender.com/students/academicdetcreate",this.formdata)
                    .then(response=>console.log(response))
                    .catch(error=>console.log(error))
                    this.bool=false
                    this.bool1=true
                    this.formdata.percentage=null
                    this.formdata.percentage1=null
                    this.formdata.percentage2=null
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
                        this.formdata.percentage=this.data[i].percentage
                        this.formdata.percentage1=this.data[i].percentage1
                        this.formdata.percentage2=this.data[i].percentage2
                        this.aid=this.data[i]._id
                    }
                }
            },
            adetailsupdate(){
                if(this.formdata.percentage==null){
                    this.bool=true
                    this.bool1=false
                }
                else if(this.formdata.percentage1==null){
                    this.bool=true
                    this.bool1=false
                }
                else if(this.formdata.percentage2==null){
                    this.bool=true
                    this.bool1=false
                }
                else{
                    this.formdata.sid=this.ssid;
                    axios.put("https://resumehelpbackend.onrender.com/students/academicupdate/"+this.aid,this.formdata)
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