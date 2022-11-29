<template>
    <div>
        <br><br><br>
        <img src="../assets/user-solid.svg" alt="" width="100px" height="35px"><br>
        <h1 style="color:darkslategray;">{{$route.query.sname}}</h1>
        
        <br><br><br>
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <div class="card border-primary">
                        <div class="card-body">
                            <h2 class="card-title" style="color:blue; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">Basic Details</h2>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, sequi!</p>
                            <router-link :to="{path:'/basdet',query:{sid:this.$route.query.sid,sname:this.$route.query.sname}}" class="btn btn-primary">Get Details</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card border-primary">
                        <div class="card-body">
                            <h2 class="card-title" style="color:blue; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">Academic Details</h2>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, odit!</p>
                            <router-link :to="{path:'/acadet',query:{sid:this.$route.query.sid,sname:this.$route.query.sname}}" class="btn btn-primary">Get Details</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div><br><br>
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <div class="card border-primary">
                        <div class="card-body">
                            <h2 class="card-title" style="color:blue; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">Skill Details</h2>
                            <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, repellendus.</p>
                            <router-link :to="{path:'/skidet',query:{sid:this.$route.query.sid,sname:this.$route.query.sname}}" class="btn btn-primary">Get Details</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card border-primary">
                        <div class="card-body">
                            <h2 class="card-title" style="color:blue; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">Project Details</h2>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, pariatur!</p>
                            <router-link :to="{path:'/prodet',query:{sid:this.$route.query.sid,sname:this.$route.query.sname}}" class="btn btn-primary">Get Details</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div><br><br>
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <div class="card border-primary">
                        <div class="card-body">
                            <h2 class="card-title" style="color:blue; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">All Details</h2>
                            <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, repellendus.</p>
                            <router-link :to="{path:'/gpdf',query:{sid:this.$route.query.sid,sname:this.$route.query.sname}}" class="btn btn-primary">Get Details</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:"StudentHome"
}
</script>