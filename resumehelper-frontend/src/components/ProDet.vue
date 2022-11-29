<template>
    <div>
        <br><br><br><br><br><br>
        <div class="container">
            <div class="card border-success">
                <div class="card-header">
                    <h1 class="text-info">Project Details</h1>
                </div>
                <br><br>
                <div class="card-body">
                    <h3 class="card-title">Name : {{$route.query.sname}}</h3><br>
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
        name: "ProDet",
        data(){
            return{
                data:[],
                projname: "",
                techno: "",
                projdetails: "",
                ssid: this.$route.query.sid
            }
        },
        beforeMount(){
            axios.get('https://resumehelpbackend.onrender.com/students/projectdetget')
            .then((response)=>{
                this.formatPosts(response.data)
                console.log(this.data)
                this.checksid()
            })
        },
        methods:{
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
                        this.projname=this.data[i].projname
                        this.techno=this.data[i].techno
                        this.projdetails=this.data[i].projdetails
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