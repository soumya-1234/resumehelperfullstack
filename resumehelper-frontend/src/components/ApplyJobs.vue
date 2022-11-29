<template>
    <div>
        <br><br><br>
        <div class="container" v-for="job in data" :key="job._id" >
            <div class="card text-center border-info">
                <h4 class="card-header">
                {{job.jtitle}}
                </h4>
                <div class="card-body">
                    <h5 class="card-title">{{job.skills}}</h5>
                    <p class="card-text">{{job.jdesc}}</p>
                    <button class="btn btn-primary" @click.prevent="applyjob(job.rid,job._id)">Apply</button>
                </div>
            </div>
            <br>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    name: "ApplyJobs",
    data(){
        return{
            data: [],
            rrid: this.$route.query.rid
        }
    },
    beforeMount(){
        axios.get('https://resumehelpbackend.onrender.com/recruiters/jobdetget')
        .then((response)=>{
            this.formatposts(response.data)
            console.log(this.data)
        })
    },
    methods:{
        formatposts(jobdetdata){
            for(let key in jobdetdata){
                this.data.push({...jobdetdata[key],id:key});
            }
        },
        applyjob(rid,jid){
            this.$router.push({path: "/applypart", query:{navb:false,sid:this.$route.query.sid,sname:this.$route.query.sname,rid: rid,jid: jid}});
        }
    }
}
</script>