<template>
    <div>
        <br><br><br><br><br><br>
        <div class="container">
            <div class="card border-success">
                <div class="card-header">
                    <h1 class="text-info">Skills Details</h1>
                </div>
                <br><br>
                <div class="card-body">
                    <h3 class="card-title">Name : {{$route.query.sname}}</h3><br>
                    <h3 class="card-title">Skills : {{skill}}</h3><br>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default{
        name: "SkiDet",
        data(){
            return{
                data:[],
                skill:"",
                ssid: this.$route.query.sid
            }
        },
        beforeMount(){
            axios.get('https://resumehelpbackend.onrender.com/students/skilldetget')
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
                        this.skill=this.data[i].skill
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