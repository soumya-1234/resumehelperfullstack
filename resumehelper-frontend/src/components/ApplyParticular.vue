<template>
    <div>
        <br><br><br><br><br><br>
        <div class="container">
            <div class="card border-success">
                <div class="card-header">
                    <h1 class="text-info">Job Details</h1>
                </div>
                <br><br>
                <div class="card-body">
                    <h3 class="card-title">Job Name : {{jtitle}}</h3><br>
                    <h3 class="card-title">Job skills : {{skills}}</h3><br>
                    <h3 class="card-title">Job Description : {{jdesc}}</h3><br>
                    <h3 class="card-title">Company : {{company}}</h3><br>
                    <h3 class="card-title">Recruiter Name : {{name}}</h3><br>
                    <p class="card-text text-success" style="font-weight: 14px;">Send Resume to Email : {{email}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    name: "ApplyParticular",
    data(){
        return{
            data:[],
            rdata:[],
            jtitle:"",
            skills:"",
            jdesc:"",
            company:"",
            name:"",
            email:"",
            rid: this.$route.query.rid,
            jid: this.$route.query.jid
        }
    },
    beforeMount(){
        axios.get('https://resumehelpbackend.onrender.com/recruiters/jobdetget')
        .then((response)=>{
            this.formatPosts(response.data)
            this.checksid()
        })
        axios.get('https://resumehelpbackend.onrender.com/recruiters/get')
        .then((response)=>{
            this.formatPosts1(response.data)
            this.checksid1()
        })
    },
    methods:{
        formatPosts(jobdetdata){
            for(let key in jobdetdata){
                this.data.push({...jobdetdata[key],id:key});
            }
        },
        formatPosts1(jobdetdata){
            for(let key in jobdetdata){
                this.rdata.push({...jobdetdata[key],id:key});
            }
        },
        checksid(){
            for(var i=0;i<this.data.length;i++){
                if(this.data[i]._id==this.jid){
                    this.jtitle=this.data[i].jtitle
                    this.skills=this.data[i].skills
                    this.jdesc=this.data[i].jdesc
                }
            }
        },
        checksid1(){
            for(var i=0;i<this.rdata.length;i++){
                if(this.rdata[i]._id==this.rid){
                    this.company=this.rdata[i].company
                    this.name=this.rdata[i].name
                    this.email=this.rdata[i].email
                }
            }
        }
    }
}
</script>