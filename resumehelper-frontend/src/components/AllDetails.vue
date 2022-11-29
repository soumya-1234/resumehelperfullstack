<template>
    <div>
        <div class="container">
            <div class="card border-success">
                <div class="card-header">
                    <h2 class="text-info">Basic Details</h2>
                </div>
                <br><br>
                <div class="card-body">
                    <h3 class="card-title">Name : {{$route.query.sname}}</h3><br>
                    <h3 class="card-title">Website : {{website}}</h3><br>
                    <h3 class="card-title">Address : {{address}}</h3><br>
                    <h3 class="card-title">Mobile Number : {{mobile}}</h3><br>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
        </div><br>
        <div class="container">
            <div class="card border-success">
                <div class="card-header">
                    <h2 class="text-info">Academic Details</h2>
                </div>
                <br><br>
                <div class="card-body">
                    <h3 class="card-title">10th Percentage : {{percentage}}</h3><br>
                    <h3 class="card-title">12th Percentage : {{percentage1}}</h3><br>
                    <h3 class="card-title">Graduation Percentage : {{percentage2}}</h3><br>
                    <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, totam.</p>
                </div>
            </div>
        </div><br>
        <div class="container">
            <div class="card border-success">
                <div class="card-header">
                    <h2 class="text-info">Skills Details</h2>
                </div>
                <br><br>
                <div class="card-body">
                    <h3 class="card-title">Skills : {{skill}}</h3><br>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
        </div><br>
        <div class="container">
            <div class="card border-success">
                <div class="card-header">
                    <h2 class="text-info">Project Details</h2>
                </div>
                <br><br>
                <div class="card-body">
                    <h3 class="card-title">Project Name : {{projname}}</h3><br>
                    <h3 class="card-title">Technologies Used : {{techno}}</h3><br>
                    <h3 class="card-title">Description : {{projdetails}}</h3><br>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    name: "AllDetails",
    data(){
            return{
                bdata:[],
                adata:[],
                sdata:[],
                pdata:[],
                ssid: this.$route.query.sid,
                website:"",
                mobile:"",
                address:"",
                percentage: null,
                percentage1: null,
                percentage2: null,
                skill:"",
                projname: "",
                techno: "",
                projdetails: ""
            }
    },
    beforeMount(){
        axios.get('https://resumehelpbackend.onrender.com/students/basicdetget')
        .then((response)=>{
            this.formatPosts(response.data)
            this.checksid()
        })
        axios.get('https://resumehelpbackend.onrender.com/students/academicdetget')
        .then((response)=>{
            this.formatPosts1(response.data)
            this.checksid1()
        })
        axios.get('https://resumehelpbackend.onrender.com/students/skilldetget')
        .then((response)=>{
            this.formatPosts2(response.data)
            this.checksid2()
        })
        axios.get('https://resumehelpbackend.onrender.com/students/projectdetget')
        .then((response)=>{
            this.formatPosts3(response.data)
            this.checksid3()
        })
    },
    methods:{
        formatPosts(postData){
            for (let key in postData){
                this.bdata.push({...postData[key],id:key});
            }
        },
        formatPosts1(postData){
            for (let key in postData){
                this.adata.push({...postData[key],id:key});
            }
        },
        formatPosts2(postData){
            for (let key in postData){
                this.sdata.push({...postData[key],id:key});
            }
        },
        formatPosts3(postData){
            for (let key in postData){
                this.pdata.push({...postData[key],id:key});
            }
        },
        checksid(){
            for(var i=0;i<this.bdata.length;i++){
                if(this.bdata[i].sid==this.ssid){
                    this.website=this.bdata[i].website
                    this.mobile=this.bdata[i].mobile
                    this.address=this.bdata[i].address
                }
            }
        },
        checksid1(){
            for(var i=0;i<this.adata.length;i++){
                if(this.adata[i].sid==this.ssid){
                    this.percentage=this.adata[i].percentage
                    this.percentage1=this.adata[i].percentage1
                    this.percentage2=this.adata[i].percentage2
                }
            }
        },
        checksid2(){
            for(var i=0;i<this.sdata.length;i++){
                if(this.sdata[i].sid==this.ssid){
                    this.skill=this.sdata[i].skill
                }
            }
        },
        checksid3(){
            for(var i=0;i<this.pdata.length;i++){
                if(this.pdata[i].sid==this.ssid){
                    this.projname=this.pdata[i].projname
                    this.techno=this.pdata[i].techno
                    this.projdetails=this.pdata[i].projdetails
                }
            }
        }
    }
}
</script>

<style scoped>
*{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>