<template>
    <div>
      <section id="contact" class="contact">
        <div data-aos="fade-up">
          <iframe style="border:0; width: 100%; height: 350px;" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Damanjodi&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" frameborder="0" allowfullscreen></iframe>
        </div>

        <div class="container" data-aos="fade-up">

          <div class="row mt-5">

            <div class="col-lg-4">
              <div class="info">
                <div class="address">
                  <i class="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>A195 Damanjodi Koraput-763008 Odisha</p>
                </div>

                <div class="email">
                  <i class="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>soumya977761@example.com</p>
                </div>

                <div class="phone">
                  <i class="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+91 7991058337</p>
                </div>

            </div>

          </div>

          <div class="col-lg-8 mt-5 mt-lg-0">

            <form class="php-email-form">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" v-model.trim="formdata.fname" name="name" class="form-control" id="name" placeholder="Your Name">
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" v-model.trim="formdata.email" class="form-control" name="email" id="email" placeholder="Your Email">
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" v-model.trim="formdata.subject" class="form-control" name="subject" id="subject" placeholder="Subject">
              </div>
              <div class="form-group mt-3">
                <textarea v-model.trim="formdata.message" class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message" v-if="bool">Fields are empty</div>
                <div class="sent-message" v-if="bool1">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit" @click.prevent="sendm">Send Message</button></div>
            </form>

          </div>

        </div>

      </div>
    </section>
 
    </div>
</template>

<script>
export default{
  name: "ContactPage",
  data(){
    return{
      formdata:{
        fname:"",
        email:"",
        subject:"",
        message:""
      },
      bool: false,
      bool1: false
    }
  },
  methods:{
    sendm(){
      if(this.formdata.fname==""){
        this.bool=true
        this.bool1=false
      }
      else if(this.formdata.email==""){
        this.bool=true
        this.bool1=false
      }
      else if(this.formdata.subject==""){
        this.bool=true
        this.bool1=false
      }
      else if(this.formdata.message==""){
        this.bool=true
        this.bool1=false
      }
      else{
        this.bool1=true
        this.bool=false
      }
    }
  }
}
</script>

<style scoped>
.contact {
  padding-top: 5px;
}

.contact .info {
  width: 100%;
  background: #fff;
}

.contact .info i {
  font-size: 20px;
  color: #5fcf80;
  float: left;
  width: 44px;
  height: 44px;
  background: #ecf9f0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
}

.contact .info h4 {
  padding: 0 0 0 60px;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #37423b;
}

.contact .info p {
  padding: 0 0 0 60px;
  margin-bottom: 0;
  font-size: 14px;
  color: #657a6d;
}

.contact .info .email,
.contact .info .phone {
  margin-top: 40px;
}

.contact .info .email:hover i,
.contact .info .address:hover i,
.contact .info .phone:hover i {
  background: #5fcf80;
  color: #fff;
}

.contact .php-email-form {
  width: 100%;
  background: #fff;
}

.contact .php-email-form .form-group {
  padding-bottom: 8px;
}

.contact .php-email-form .error-message {
  display: block;
  color: #fff;
  background: #ed3c0d;
  text-align: left;
  padding: 15px;
  font-weight: 600;
}

.contact .php-email-form .error-message br+br {
  margin-top: 25px;
}

.contact .php-email-form .sent-message {
  display: block;
  color: #fff;
  background: #18d26e;
  text-align: center;
  padding: 15px;
  font-weight: 600;
}

.contact .php-email-form .loading {
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
}

.contact .php-email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #18d26e;
  border-top-color: #eee;
  -webkit-animation: animate-loading 1s linear infinite;
  animation: animate-loading 1s linear infinite;
}

.contact .php-email-form input,
.contact .php-email-form textarea {
  border-radius: 4px;
  box-shadow: none;
  font-size: 14px;
}

.contact .php-email-form input:focus,
.contact .php-email-form textarea:focus {
  border-color: #5fcf80;
}

.contact .php-email-form input {
  height: 44px;
}

.contact .php-email-form textarea {
  padding: 10px 12px;
}

.contact .php-email-form button {
  background: #5fcf80;
  border: 0;
  padding: 10px 35px;
  color: #fff;
  transition: 0.4s;
  border-radius: 50px;
}

.contact .php-email-form button[type=submit]:hover {
  background: #3ac162;
}

@-webkit-keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>