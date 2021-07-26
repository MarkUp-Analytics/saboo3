<template>
  <div>
      <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black">
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4">

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" class="form-control" v-model="name" />
                      <label class="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" class="form-control" v-model="email" />
                      <label class="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" class="form-control" v-model="password" />
                      <label class="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" class="form-control" v-model="repeatPassword" />
                      <label class="form-label" for="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input
                      class="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3c"
                    />
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>
                    <div>
                        <small v-if="showErrorMsg" id="passwordHelp" class="text-danger">
                            {{errorMsg}}
                        </small> 
                    </div>
                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn btn-primary btn-lg" @click="register()">Register</button>
                  </div>

                </form>

              </div>
            </div>
            </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import authenticationService from '@/services/authenticationService';
export default {
  name: 'signup',
  data(){
      return{
        name: null,
        email: null,
        password: null,
        repeatPassword: null,
        showErrorMsg: false,
        errorMsg: null
      }
  },
  methods: {
        register: function(){
            this.showErrorMsg = false;
            if(!this.email || this.email.trim().length === 0 || !this.password || this.password.trim().length === 0 || !this.name || this.name.trim().length === 0 || !this.repeatPassword || this.repeatPassword.trim().length === 0 ){
                this.errorMsg = "Name, Email and Password cannot be empty";
                this.showErrorMsg = true;
                return;
            }
            if(this.password !== this.repeatPassword){
                this.errorMsg = "Password did not match";
                this.showErrorMsg = true;
                return;
            }

            var userDetails = new FormData();
            var self = this;
            userDetails.set('name', this.name);
            userDetails.set('email', this.email);
            userDetails.set('password', this.password);

            authenticationService.signup(userDetails)
                .then(function(response){                    
                    self.$router.push({name: 'feed'});
              }).catch(function(error){
                self.showErrorMsg = true;

                if(error.response.data.message){
                  self.errorMsg = error.response.data.message;
                }
                else{
                  self.errorMsg = error;
                }    
              });
        },
  }
  
}
</script>
