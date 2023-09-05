<template>
    <div class="form-forgot flex flex-row justify-center items-center h-screen">
        <div v-if="isAlert" class="alert" icon="$success" title="Successful !" closable>

            <i class="fa-regular fa-circle-check" style="color: #3aec22;"></i>
            <p>{{ alertMessage }}</p>

        </div>
        <form @submit.prevent="sendCodeVerification" class="flex flex-col w-4/12 bg-gray-800 p-10 rounded-2xl">
            <div class="flex flex-col justify-center items-center">
                <img src="../../assets/forgot-password.png" alt="" class="w-3/12">
                <h1 class="text-white font-bold font m-5" style="margin: 2%;">FORGOT PASSWORD</h1>
            </div>
            <p style="color: white; margin: 2%;">Send email to verify code.</p>
            <input type="email" placeholder="Enter your email" v-model="email">
            <button type="submit" class="bg-green-600">
                    <span v-if="loading">Loading...</span>
                    <span v-else>SEND</span>
            </button>
            <router-link class="btn" to="/login">BACK</router-link>
        </form>
    </div>
</template>
<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
const email = ref("");
const router = useRouter();
const alertMessage = ref("");
const isAlert = ref(false);
const loading = ref(false);
const sendCodeVerification = () => {
    loading.value = true
    axios.post("http://localhost:5000/user/send_code", { email: email.value }, { withCredentials: true })
        .then((res) => {
            console.log(res.data);
            setTimeout(() => (
            alertMessage.value = "Please check your email to get code verification.",
            isAlert.value = true,
            loading.value = false
        ), 1000)
        setTimeout(() => (
            isAlert.value = false,
            setTimeout(() => (
                router.push({ name: 'reset_password' })
            ), 1000)
        ), 3000)
        }).catch((err) => {
            console.error(err);
        console.log(err.response.status)
         if(err.response.status == 400){
            setTimeout(() => (
                alertMessage.value = err.response.data,
                isAlert.value = true,
                loading.value = false,
                setTimeout(() => (
                    isAlert.value = false
                    
                    ), 1000)
            ), 2000)
        }
            
        })
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

.btn {
    background-color: green;
    text-decoration: none;
    padding: 14px;
    border-radius: 10px;
    color: white;
    width: 20%;
    margin-left: 80%;
    text-align: center;
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
 .form{
    background-color: black;
    height: 150vh;
  }
  input,button,.btn{
    padding: 2.5%;
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
  form{
    background-color: black;
    height: 100%;
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
  form{
    background-color: black;
    height: 250%;
  }
  .btn{
    margin-left: 70%;
    width: 30%;
  }
} 
</style>