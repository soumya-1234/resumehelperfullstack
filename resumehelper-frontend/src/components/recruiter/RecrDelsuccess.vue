<template>
    <div>
        <div class="lightbox" id="point">
            <br><br><br><br><br>
            <center>
                <img src="https://icons.veryicon.com/png/o/miscellaneous/8atour/submit-successfully.png" alt="" width="200px" height="200px">
                <h2 style="color: #feac45;">Deleted Successfully</h2>
                <router-link :to="{path: '/recrhome',query:{rname:this.$route.query.rname,rid:this.$route.query.rid}}">Back</router-link>
            </center>
        </div>
    </div>
</template>

<script>
export default{
    name: "RecrDelsuccess"
}
</script>

<style scoped>
.lightbox {
        display: block;
        position: fixed;
        z-index: 999;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 1em;
        background: rgba(0, 0, 0, 0.8);
}


</style>