<template>
  <div>
      <section class="bg_dark-blue-0 px-2 py-0">
		<div class="container-xl bg_dark-blue-1 rounded-bottom rounded-0 px-3 py-1 w-100 h-100">
            <div class="row">
                <div class="col-md-6">
                </div>
                <div class="col-md-6 col-lg-6 col-xl-4 offset-xl-1">
                    <form>
                    <!-- Email input -->
                    <div class="form-outline mb-4">
                        <input type="email" id="form3Example3" class="form-control form-control-lg"
                        placeholder="Enter a valid email address" v-model="email" />
                        <label class="form-label text_yellow-white-grey-3" for="form3Example3">email</label>
                    </div>

                    <!-- Password input -->
                    <div class="form-outline mb-3">
                        <input type="password" id="form3Example4" class="form-control form-control-lg"
                        placeholder="Enter password" v-model="password" />
                        <label class="form-label text_yellow-white-grey-3" for="form3Example4">Password</label>
                    </div>
                    <div>
                        <small v-if="showErrorMsg" id="passwordHelp" class="text-danger">
                            {{errorMsg}}
                        </small> 
                    </div>

                    <div class="d-flex justify-content-between align-items-center">
                        <!-- Checkbox -->
                        <div class="form-check mb-0">
                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                        <label class="form-check-label text_yellow-white-grey-3" for="form2Example3">
                            Remember me
                        </label>
                        </div>
                        <a href="#!" class="text-body text_yellow-white-grey-3">Forgot password?</a>
                    </div>

                    <div class="text-center text-lg-start mt-4 pt-2">
                        <button type="button" class="btn btn-primary btn-lg"
                        style="padding-left: 2.5rem; padding-right: 2.5rem;" @click="login()">Login</button>

                        <p class="small fw-bold mt-2 pt-1 mb-0 text_yellow-white-grey-3">Don't have an account? <a href="#!" class="link-danger" @click="signup()">Register</a></p>
                    </div>

                    </form>
                </div>
            </div>
        </div>
      </section>
  </div>
</template>

<script>
import authenticationService from '@/services/authenticationService';
export default {
  name: 'login',
  data(){
        return{
            email: null,
            password: null,
            showErrorMsg: false,
            errorMsg: null
        }
    },
  methods: {
        login: function(){
            this.showErrorMsg = false;
            if(!this.email || this.email.trim().length === 0 || !this.password || this.password.trim().length === 0){
                this.errorMsg = "Email/Password cannot be empty";
                this.showErrorMsg = true;
                return;
            }

            var credentials = new FormData();
            var self = this;
            credentials.set('email', this.email);
            credentials.set('password', this.password);

            authenticationService.login(credentials)
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
        signup:function(){
            this.$router.push({name: 'signup'});
        },
  }  
}
</script>
