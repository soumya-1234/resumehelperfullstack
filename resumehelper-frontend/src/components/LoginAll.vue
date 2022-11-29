<template>
    <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <div class="container" style="padding-top: 135px;">
            <div class="card border-primary">
                <div class="card-header bg-light">
                    <h3>For Students</h3>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Students can login/signup</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, repellat.</p>
                    <router-link :to="{path: '/loginstud' ,query:{navb:true}}" class="btn btn-primary">Login Account</router-link>
                    <br>Don't have an account?<router-link :to="{path: '/signupstud' ,query:{navb:true}}">Sign Up</router-link>
                </div>
            </div><br>
            <div class="card border-primary">
                <div class="card-header bg-light">
                    <h3>For Recruiters</h3>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Recruiters can login/signup</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, necessitatibus.</p>
                    <router-link :to="{path: '/recrlogin' ,query:{navb:true}}" class="btn btn-primary">Login Account</router-link>
                    <br>Don't have an account?<router-link :to="{path: '/recrsignup' ,query:{navb:true}}">Sign Up</router-link>
                </div>
            </div>
        </div><br><br>
    </div>
</template>

<script>
    export default{
        name: "LoginAll"
    }
</script>

<style scoped>
    hr{
        width: 100px;
        height: 5px;
        background-color: red;
    }
    span{
        font-size: 20px;
    }
</style>