<template>
    
    <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        
        <br><br><br>
        <div class="container">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../assets/resumepic1.png" class="d-block w-100" alt="..." width="400px" height="500px">
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/resumebuilder.png" class="d-block w-100" alt="..." width="400px" height="500px">
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/resume5.jpg" class="d-block w-100" alt="..." width="400px" height="500px">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <br>
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <div class="card border-success">
                    <div class="card-body">
                        <h1 class="card-title">{{sdata.length}} students registered</h1>
                        <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, 
                        magni quod cum blanditiis consectetur rerum eos minima mollitia explicabo ex officia sequi! Ad, rem assumenda.</p>
                    </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card border-success">
                    <div class="card-body">
                        <h1 class="card-title">{{rdata.length}} new recruiters joined</h1>
                        <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Nesciunt neque perspiciatis magnam nisi nulla atque quisquam officia deleniti,
                             repudiandae mollitia debitis optio saepe ab eius.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default{
        name: "MainPage",
        data(){
            return {
                sdata: [],
                rdata: []
            }
        },
        beforeMount(){
            axios.get('https://resumehelpbackend.onrender.com/students/get')
            .then((response)=>{
                this.formatPosts(response.data)
            })
            axios.get('https://resumehelpbackend.onrender.com/recruiters/get')
            .then((response)=>{
                this.formatPosts1(response.data)
            })
        },
        methods: {
            formatPosts(postData){
                for (let key in postData){
                    this.sdata.push({...postData[key],id:key});
                }
            },
            formatPosts1(postData){
                for (let key in postData){
                    this.rdata.push({...postData[key],id:key});
                }
            }
        }
    }
</script>

<style scoped>
</style>