
<template>
  <div class="login">
    <div v-if="isAlert" class="alert" icon="$success" title="Successful !" closable>

      <i v-if="status == 200" class="fa-regular fa-circle-check" style="color: #3aec22;"></i>
      <i v-else class="fa-solid fa-xmark" style="color: #ff0000; font-size: 30px;"></i>
      <p>{{ alertMessage }}</p>
    </div>
    <div class="flex flex-row justify-center items-center h-screen">
      <img class="picture w-4/12 h-4/6" src="../../assets/login-image.webp" alt="">
      <form @submit.prevent="loginAccount()" class="flex flex-col w-3/12 bg-gray-800 p-10 rounded-2xl">
        <div class="flex  flex-col justify-center items-center">
          <img src="../../assets/login.png" alt="" class="w-2/6">
          <h1 class="text-white font-bold font m-5">LOGIN ACCOUNT</h1>
        </div>
        <input type="email" placeholder="Your Email" v-model="email">
        <span style="color: red; margin-top: -6%; margin-bottom: 3%;" v-if="pathName == 'email'">{{ validateMessage }}.</span>
        
        <input type="password" placeholder="Your Password" v-model="password">
        <span style="color: red; margin-top: -2%;" v-if="pathName == 'password'">{{ validateMessage }}.</span>
        <router-link style="color: pink; text-decoration: none;" to="/forgot_password">Forgot Password</router-link>
        <button type="submit" class="bg-green-600 mt-3">
          <span v-if="loading">Loading...</span>
          <span v-else>LOGIN</span>
        </button>
        <p class="text-white text-center">Don't have an account? <router-link to="/register" class="text-purple-300">Register</router-link></p>
      </form>
    </div>
  </div>
</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import "@fortawesome/fontawesome-free/css/all.css";

const password = ref("");
const email = ref("");
const alertMessage = ref("");
const isAlert = ref(false);
const loading = ref(false);
const router = useRouter();
const pathName = ref("");
const validateMessage = ref("");
const status = ref("");

const loginAccount = async () => {
  loading.value = true;
  axios.post('http://localhost:5000/user/login', {
    email: email.value,
    password: password.value,
  }, { withCredentials: true }).then(res => {
    console.log(res);
    status.value = res.status
    if (res.status == 200) {
      setTimeout(() => (
        alertMessage.value = "You login successfully.",
        isAlert.value = true,
        loading.value = false
      ), 1000)
      setTimeout(() => (
        isAlert.value = false,
        setTimeout(() => (
          router.push({ name: 'home' })
        ), 1000)
      ), 3000)
    }
    pathName.value = res.data[0].path[0];
    validateMessage.value = res.data[0].message;
    console.log(validateMessage.value)
  }).catch(err => {
    console.error(err);
    console.log(err.response.status)
    status.value = err.response.status
    if (err.response.status == 400) {
      setTimeout(() => (
        alertMessage.value = err.response.data,
        isAlert.value = true,
        loading.value = false,
        setTimeout(() => (
          isAlert.value = false

        ), 1000)
      ), 2000)
    }else{
       setTimeout(() => (
      alertMessage.value = "Email in valid state",
      isAlert.value = true,
      loading.value = false,
      setTimeout(() => (
        isAlert.value = false

      ), 1000)
    ), 2000)
    }
   
  });




};
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

  
  input{
    padding: 2.5%;
    font-size: 14px;
    width: 100%;
  } 
  h1 {
      font-size: 20px;
  }
  button{
    padding: 2.5%;
  }
  .picture {
      display: none;
  }
  p,span{
    font-size: 15px;

  } 
 .login{
    background-color: black;
    height: 120vh;
  }
}
@media (max-width: 320px) {
  form{
    margin: auto;
    width: 100%;
  }
  .login{
    background-color: black;
    height: 250%;
  }
} 
</style>