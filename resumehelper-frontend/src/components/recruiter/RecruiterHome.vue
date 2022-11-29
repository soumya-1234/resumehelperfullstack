<template>
    <div>
        <br><br><br>
        <div v-if="!dataset || dataset.length==0">
            <h1>No Jobs Created</h1>
        </div>
        <div class="container" v-for="job in dataset" :key="job._id">
            <div class="card text-center border-success">
                <h4 class="card-header">
                    {{ job.jtitle }}
                </h4>
                <div class="card-body">
                    <h5 class="card-title">{{ job.skills }}</h5>
                    <p class="card-text">{{ job.jdesc }}</p>
                    <button class="btn btn-warning" @click.prevent="updatejob">Update</button>
                    &nbsp;&nbsp;
                    <button class="btn btn-danger" @click.prevent="deletejob(job._id)">Delete</button>
                </div>
            </div>
            <br>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "RecruiterHome",
    data() {
        return {
            data: [],
            dataset: [],
            bool: false,
            rrid: this.$route.query.rid
        }
    },
    beforeMount() {
        axios.get('https://resumehelpbackend.onrender.com/recruiters/jobdetget')
            .then((response) => {
                this.formatposts(response.data)
                console.log(this.data)
                this.checkdata()
            })
    },
    methods: {
        formatposts(jobdetdata) {
            for (let key in jobdetdata) {
                this.data.push({ ...jobdetdata[key], id: key });
            }
        },
        checkdata() {
            for (var i = 0; i < this.data.length; i++) {
                if (this.data[i].rid == this.rrid) {
                    this.dataset.push(this.data[i])
                }
            }
        },
        deletejob(id) {
            let conf = confirm("Are you sure to delete ?")
            if (conf == true) {
                axios.delete("https://resumehelpbackend.onrender.com/recruiters/deletejob/" + id)
                    .then((response) => {
                        console.log(response.data)
                        this.$router.push({ path: "/deletesucc", query: { navb: false, rname: this.$route.query.rname, rid: this.$route.query.rid } });
                    })
                    .catch(err => console.log(err))
            }
        },
        updatejob() {
            this.$router.push({ path: "/updatejob", query: { navb: false, rname: this.$route.query.rname, rid: this.$route.query.rid } });
        }
    }
}
</script>