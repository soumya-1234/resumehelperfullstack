<template>
    <div>
        <div class="container" style="padding-top: 60px;">
            <button @click.prevent="generatePDF()" class="btn btn-success">Generate PDF</button><br><br>
            <vue-html2pdf
                :show-layout="false"
                :float-layout="true"
                :enable-download="true"
                :preview-modal="true"
                :paginate-elements-by-height="1400"
                filename="nightprogrammerpdf"
                :pdf-quality="2"
                :manual-pagination="false"
                pdf-format="a4"
                :pdf-margin="10"
                pdf-orientation="portrait"
                pdf-content-width="800px"
                @progress="onProgress($event)"
                ref="html2Pdf"
            >
                <section slot="pdf-content">
                    <AllDetails/>
                </section>
            </vue-html2pdf>
            <div>
                <AllDetails/>
            </div>
        </div>
    </div>
</template>

<script>
import AllDetails from "./AllDetails.vue"
import VueHtml2pdf from "vue-html2pdf";
export default{
    name: "GeneratePdf",
    components:{
        AllDetails,
        VueHtml2pdf
    },
    methods: {
        onProgress(event) {
            console.log(`Processed: ${event} / 100`);
        },
        hasGenerated() {
            alert("PDF generated successfully!");
        },
        generatePDF() {
            this.$refs.html2Pdf.generatePdf();
        }
    }
}
</script>