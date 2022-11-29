<template>
    <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <div id="ma">
            <strong id="re">Resume</strong><strong id="he">Helper</strong>
        </div>
        <br>
        <h3 id="bu">We build the tools that will help recruiter,students </h3><br>
        <div class="container">
            <p id="lo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos obcaecati voluptas animi? Repudiandae ut sapiente minima 
            iste amet doloremque, maxime molestiae rerum tempora temporibus recusandae, minus quasi, ducimus dignissimos illo. Dignissimos 
            aperiam possimus voluptas odio quia, dolorem dolore non soluta, sit nesciunt ratione, voluptatibus fugit vero. Quam laboriosam 
            qui dignissimos dolorem ad assumenda molestiae debitis enim aliquam ratione, quo doloribus 
            voluptas cum nesciunt nemo minima aut consectetur magnam odit! Dignissimos magni aliquam quibusdam et velit.
            </p>
        </div>
        <h3 style="font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif">SERVICES</h3>
        <div class="container">
            <div class="card-group">
                <div class="card border-success">
                    <img src="../assets/resumepic2.png" class="card-img-top" alt="..." height="250px">
                    <div class="card-body">
                        <h5 class="card-title text-success">Students Create Resume</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro tempore, consequatur fuga odio suscipit deleniti!</p>
                    </div>
                </div>
                <div class="card border-success">
                    <img src="../assets/resume3.png" class="card-img-top" alt="..." height="250px">
                    <div class="card-body">
                        <h5 class="card-title text-success">Recruiters Create Jobs</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos beatae omnis totam! Labore, ipsam temporibus?</p>
                    </div>
                </div>
                <div class="card border-success">
                    <img src="../assets/resume4.jpg" class="card-img-top" alt="..." height="250px">
                    <div class="card-body">
                        <h5 class="card-title text-success">Students Apply Jobs</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, minus obcaecati voluptas vel aliquid nesciunt.</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default{
    name: "ProductsPage"
}
</script>

<style scoped>
    #re{
        color:darkblue;
      font-size: 32px;
    }
    #he{
        color: red;
      font-size: 32px;
    }
    #ma{
        padding-top: 70px;
    }
    #bu{
        color: purple;
    }
    #lo{
        color: grey;
        font-size:medium;
    }
</style>