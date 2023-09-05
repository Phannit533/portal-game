
<template>
  <div class="register">
      <div v-if="isAlert" class="alert" icon="$success" title="Successful !" closable>

        <i v-if="status ==200" class="fa-regular fa-circle-check" style="color: #3aec22;"></i>
        <i v-else class="fa-solid fa-xmark" style="color: #ff0000; font-size: 30px;"></i>
          <p>{{ mailMessage }}</p>

      </div>

      <div class="flex flex-row justify-center items-center h-screen">
          <img class="picture w-4/12 h-4/6" src="../../assets/register-image.png" alt="">
          <form @submit.prevent="createUser()" class="flex flex-col w-4/12 bg-gray-800 p-10 rounded-2xl">
            <div class="flex  flex-col justify-center items-center">
              <img src="../../assets/register.png" alt="" class="w-3/12">

                
                  <h1 class="text-white font-bold font m-5">REGISTER ACCOUNT</h1>
              </div>
              <input type="text" placeholder="Your first name" v-model="firstName">
              <span class="validate" v-if="pathName == 'first_name'">{{ validateMessage }}.</span>
              <input type="text" placeholder="Your last name" v-model="lastName">
              <span class="validate" v-if="pathName == 'last_name'">{{ validateMessage }}.</span>
              <input type="email" placeholder="Your Email" v-model="email">
              <span class="validate" v-if="pathName == 'email'">{{ validateMessage }}.</span>
              <input type="password" placeholder="Your Password" v-model="password">
              <span class="validate" v-if="pathName == 'password'">{{ validateMessage }}.</span>
              <input type="password" placeholder="Confirm Password" v-model="confirm_password">
              <!-- <span class="validate" v-if="password !== confirm_password > 0 ">{}</span> -->
              <p class="flex flex-row justify-center items-center mb-5"><img src="../../assets/google.png" alt="" class="w-4 h-4 mr-1"><span class="text-white">Sign in wuth Google</span> </p>
              <button type="submit" class="bg-green-600">
                  <span v-if="loading">Loading...</span>
                  <span v-else>REGISTER</span>
              </button>
              <p class="text-white text-center">Already have an account? <router-link :to="{name:'login'}" style="color: pink; text-decoration: none;" >Login</router-link></p>

          </form>
      </div>
  </div>
</template>
<script setup>
import "@fortawesome/fontawesome-free/css/all.css";
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// import Cookies from 'js-cookie';


const isAlert = ref(false);
const loading = ref(false);
// const passwordRepeat = ref("");
const firstName = ref("");
const lastName = ref("");
const password = ref("");
const email = ref("");
const pathName = ref("");
const validateMessage = ref("");
const confirm_password = ref("");
const mailMessage = ref("");
const router = useRouter();
const status = ref("");


const createUser = () => {  
      //     return passwordRepeat.value = "password should be confirm."
      const data = {
          "first_name": firstName.value,
          "last_name": lastName.value,
          "email": email.value,
          "password": password.value
      }
      console.log(data);
      loading.value = true;
      axios.post('http://localhost:5000/user/register', data,{withCredentials: true})
          .then(res => {
            console.log(res.data);
            console.log(res.status);
            status.value = res.status;
              if (res.status == 200) {
                  setTimeout(() => (
                      loading.value = false,
                      mailMessage.value = "Please go to your email address to verify your email address.",
                      isAlert.value = true
                      ), 3000)
                      setTimeout(() => (
                        isAlert.value = false,
                        router.push({name:'login'})
                        ), 7000)
                      }
                      loading.value = false,
                pathName.value = res.data[0].path[0];
              validateMessage.value = res.data[0].message;
              console.log(validateMessage.value)
              if (password.value !== confirm_password.value){

              }
             

          })
          .catch(err => {
              console.error(err);
              status.value = err.response.status 
              if(err.response.status == 400){
                setTimeout(() => (
                      loading.value = false,
                      mailMessage.value =err.response.data.error,
                      isAlert.value = true
                  ), 1000)
                  setTimeout(() => (
                        isAlert.value = false
                        ), 7000)
              }
              loading.value = false;
          });
  }



</script>
<style scoped>
form {
  background-color: rgba(43, 39, 39, 0.726);
} 

input,
button {
  padding: 15px;
  margin-bottom: 25px;
  border: none;
  border-radius: 10px;

}
input {
  border: 1px solid rgb(36, 90, 31);
  color: white;
}
button:hover {
  background-color: pink;
  color: black;
}

.alert {
  margin-left: 81%;
  position: absolute;
  background-color: rgb(221, 23, 139);
  padding: 1%;
  width: 17%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.alert p {
  color: white;
}

i {
  color: green;
  margin-right: 1%;
}

.validate {
  color: rgb(197, 33, 33);
  margin-bottom: 2%;
  margin-top: -3%;
}


@media (max-width:1280px) {
  form{
    width: 50%;
  }
  .picture {
      display: none;
  }
} 
 @media (max-width:980px) {
  form{
    width: 70%;
  }
} 
@media (max-width: 500px) {
  form {
    margin: auto;
      width: 100%;
      background-color:rgba(112, 104, 104, 0);
      box-shadow: black 0px 0px 0px 0px;
  }
 .register{
    background-color: black;
    height: 150vh;
  }
}
@media (max-width: 360px) {
  form{
    margin: auto;
    width: 100%;
  }
  h1{
    font-size: 15px;
  }
  .register{
    background-color: black;
    height: 170%;
  }
} 
@media (max-width: 320px) {
  form{
    margin: auto;
    width: 100%;
  }
  h1{
    font-size: 15px;
  }
  .register{
    background-color: black;
    height: 280%;
  }
} 
</style>