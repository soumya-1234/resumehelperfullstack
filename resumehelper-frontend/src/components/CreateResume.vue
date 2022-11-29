<template>
    <div>
        <br><br><br><br>
        <button type="button" class="btn btn-success" @click="text='BasicDetails'">Basic Details</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-success" @click="text='AcademicDetails'">Academic Details</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-success" @click="text='SkillsDetails'">Skills Details</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-success" @click="text='ProjectDetails'">Project Details</button>
        <keep-alive>
            <component :is="text" :msg="ssid"/>
        </keep-alive>
    </div>
</template>

<script>
import BasicDetails from "./BasicDetails.vue"
import AcademicDetails from "./AcademicDetails.vue"
import SkillsDetails from "./SkillsDetails.vue"
import ProjectDetails from "./ProjectDetails.vue"
export default{
    name: "CreateResume",
    components:{
        BasicDetails,
        AcademicDetails,
        SkillsDetails,
        ProjectDetails
    },
    data(){
        return{
            text: "BasicDetails",
            ssid: this.$route.query.sid
        }
    }
}
</script>